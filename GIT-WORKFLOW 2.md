# Git Workflow & Branch Protection
## Riviera Waterfront Mansion

---

## Branch Structure

### 1. `RIVIERA-FINAL_MAIN` (Production Branch)
- **Owner Only:** Only you can commit directly
- **Purpose:** Production-ready code that goes live
- **Protection:** This branch should be protected on GitHub/remote
- **Workflow:** Only merge reviewed and approved code from DEV

### 2. `RIVIERA-FINAL_DEV` (Development Branch)
- **Team Access:** You and trusted collaborators
- **Purpose:** Active development and testing
- **Workflow:** Merge features here, test thoroughly before promoting to MAIN

### 3. `client-contributions` (Review Branch)
- **External Access:** For reviewers/clients who want to suggest changes
- **Purpose:** Safe space for external contributions
- **Workflow:** You review all changes before merging anywhere

---

## Workflow for You (Owner)

### Daily Development Work
```bash
# Always work on DEV branch
git checkout RIVIERA-FINAL_DEV

# Make your changes, then commit
git add [files]
git commit -m "009_[type]_description"

# Push to remote
git push origin RIVIERA-FINAL_DEV
```

### Promoting to Production
```bash
# When DEV is tested and ready for production
git checkout RIVIERA-FINAL_MAIN
git merge RIVIERA-FINAL_DEV --no-ff

# Add detailed merge commit
git commit --amend -m "$(cat <<'EOF'
Release: Version X.X.X - [Date]

Changes included:
- Feature 1
- Feature 2
- Bug fix 1

Tested on: Chrome, Safari, Firefox, Mobile
Performance: All metrics within targets
Security: Reviewed and validated

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)"

# Push to production
git push origin RIVIERA-FINAL_MAIN
```

---

## Workflow for External Contributors/Reviewers

### For People Who Want to Suggest Changes

**Step 1: They clone and create branch from client-contributions**
```bash
git clone [repository-url]
git checkout client-contributions
git checkout -b reviewer-name/feature-description
```

**Step 2: They make changes and push**
```bash
git add [files]
git commit -m "Suggested: [description]"
git push origin reviewer-name/feature-description
```

**Step 3: They create Pull Request**
- Create PR from their branch → `client-contributions`
- You review the PR
- You decide whether to merge

**Step 4: You review and integrate (if approved)**
```bash
# Review the PR on GitHub/remote
# If approved, merge to client-contributions first
git checkout client-contributions
git merge reviewer-name/feature-description

# Test the changes
# If good, cherry-pick or merge to DEV
git checkout RIVIERA-FINAL_DEV
git cherry-pick [commit-hash]  # Or merge if appropriate

# Test again in DEV
# When ready, promote to MAIN (see above)
```

---

## Setting Up Branch Protection on GitHub

### Protect MAIN Branch

1. Go to your repository on GitHub
2. Click **Settings** → **Branches**
3. Click **Add rule** under "Branch protection rules"
4. Branch name pattern: `RIVIERA-FINAL_MAIN`
5. Enable these settings:
   - ✅ Require pull request reviews before merging
   - ✅ Require review from Code Owners
   - ✅ Dismiss stale pull request approvals when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators (Optional: uncheck if you want to bypass)
   - ✅ Restrict who can push to matching branches
     - Add only your GitHub username
6. Click **Create** or **Save changes**

### Protect DEV Branch (Less Strict)

1. Branch name pattern: `RIVIERA-FINAL_DEV`
2. Enable:
   - ✅ Require pull request reviews before merging (optional)
   - ✅ Restrict who can push to matching branches
     - Add trusted team members only
3. Click **Create** or **Save changes**

### Client Contributions Branch (Open)

- No protection needed
- This is the "sandbox" for external suggestions
- Nothing gets to production without your review

---

## Code Review Checklist (For Reviewing External Contributions)

Before accepting any external code, verify:

- [ ] **Security**
  - No `eval()`, `Function()`, or `exec()` with user input
  - No hardcoded credentials or API keys
  - Input validation present
  - No path traversal vulnerabilities
  
- [ ] **Quality**
  - Code is readable and well-commented
  - Follows existing code style
  - No unnecessary dependencies
  - No breaking changes
  
- [ ] **Testing**
  - Test in browser (Chrome, Safari, Firefox)
  - Test on mobile devices
  - Test all affected forms/features
  - No console errors
  
- [ ] **SEO/Content**
  - No changes to meta tags without review
  - No changes to schema markup without review
  - No removal of accessibility features
  
- [ ] **Legal**
  - No changes to privacy policy without review
  - No changes to terms without review
  - No tracking code added without consent

---

## Emergency: Rolling Back Production

If something goes wrong in production:

```bash
# Find the last good commit
git log RIVIERA-FINAL_MAIN --oneline -10

# Reset to last good commit (replace COMMIT_HASH)
git checkout RIVIERA-FINAL_MAIN
git reset --hard COMMIT_HASH

# Force push (ONLY in emergencies!)
git push origin RIVIERA-FINAL_MAIN --force

# Then fix the issue in DEV and re-promote when ready
```

---

## Current Commit Number

Last commit: `008_docs_add-client-readme`  
**Next commit: 009_[type]_[description]**

Update this number after each commit!

---

## Quick Reference

| Branch | Who Can Commit | Purpose | Protection Level |
|--------|---------------|---------|------------------|
| `RIVIERA-FINAL_MAIN` | Owner only | Production | 🔒 High |
| `RIVIERA-FINAL_DEV` | Owner + Team | Development | 🔐 Medium |
| `client-contributions` | Anyone | External PRs | 🔓 Open |

---

**Last Updated:** $(date)  
**Document Version:** 1.0
