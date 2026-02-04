# Branch Protection Setup Guide
## GitHub/GitLab Configuration for Riviera Waterfront Mansion

This guide shows you how to set up branch protection so that:
1. **MAIN branch** - Only you can commit (production code)
2. **DEV branch** - You + trusted team (development code)
3. **client-contributions branch** - Anyone can submit (review sandbox)

---

## Option A: GitHub (Most Common)

### Step 1: Push Your Branches to GitHub

First, make sure all three branches exist on GitHub:

```bash
# Make sure you're in the project directory
cd "/Users/rocketcreative/Desktop/CURSER BUILDS/RIVIERA-FINAL"

# Push all branches
git push origin RIVIERA-FINAL_MAIN
git push origin RIVIERA-FINAL_DEV
git push origin client-contributions
```

### Step 2: Protect MAIN Branch (Owner Only)

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Branches** (left sidebar)
4. Under "Branch protection rules", click **Add rule**

**Configure MAIN protection:**
```
Branch name pattern: RIVIERA-FINAL_MAIN

✅ Require a pull request before merging
   ✅ Require approvals: 1
   ✅ Dismiss stale pull request approvals when new commits are pushed

✅ Require status checks to pass before merging
   (Leave empty for now, or add if you have CI/CD)

✅ Require conversation resolution before merging

✅ Require signed commits (Optional but recommended)

✅ Require linear history

✅ Do not allow bypassing the above settings
   (Leave unchecked if you want to bypass as admin)

✅ Restrict who can push to matching branches
   Click "Restrict pushes that create matching branches"
   Under "Restrict pushes": Add ONLY your GitHub username
   
❌ Allow force pushes (Keep unchecked)
❌ Allow deletions (Keep unchecked)
```

Click **Create** or **Save changes**

### Step 3: Protect DEV Branch (Team Members)

Click **Add rule** again:

```
Branch name pattern: RIVIERA-FINAL_DEV

✅ Require a pull request before merging (Optional)
   ✅ Require approvals: 1 (Optional)

✅ Restrict who can push to matching branches
   Click "Restrict pushes that create matching branches"
   Under "Restrict pushes": Add your username + trusted team members
   
❌ Allow force pushes (Keep unchecked)
❌ Allow deletions (Keep unchecked)
```

Click **Create** or **Save changes**

### Step 4: Leave client-contributions Open

**Do NOT add protection rules for `client-contributions`**

This branch is intentionally open so external reviewers can submit pull requests.

---

## Option B: GitLab

### Step 1: Push Your Branches to GitLab

```bash
# Push all branches
git push origin RIVIERA-FINAL_MAIN
git push origin RIVIERA-FINAL_DEV
git push origin client-contributions
```

### Step 2: Protect MAIN Branch

1. Go to your project on GitLab
2. Click **Settings** → **Repository** (left sidebar)
3. Expand **Protected branches**

**Configure MAIN protection:**
```
Branch: RIVIERA-FINAL_MAIN

Allowed to merge: Maintainers
Allowed to push and merge: No one (or only your username)
Allowed to force push: ❌ Toggle OFF
Code owner approval: ✅ Toggle ON (if you have CODEOWNERS file)
```

Click **Protect**

### Step 3: Protect DEV Branch

Still in **Protected branches** section:

```
Branch: RIVIERA-FINAL_DEV

Allowed to merge: Maintainers + Developers
Allowed to push and merge: Maintainers + Developers (or specific usernames)
Allowed to force push: ❌ Toggle OFF
```

Click **Protect**

### Step 4: Leave client-contributions Open

Do not add `client-contributions` to protected branches.

---

## Option C: Bitbucket

### Step 1: Push Your Branches

```bash
git push origin RIVIERA-FINAL_MAIN
git push origin RIVIERA-FINAL_DEV
git push origin client-contributions
```

### Step 2: Protect MAIN Branch

1. Go to your repository on Bitbucket
2. Click **Repository settings** (left sidebar)
3. Click **Branch permissions**
4. Click **Add a branch permission**

**Configure MAIN protection:**
```
Branch or branch pattern: RIVIERA-FINAL_MAIN

Prevent: ✅ Deletion
Prevent: ✅ Rewriting branch history
Prevent: ✅ Changes without a pull request

Merge requirements:
✅ Require approvals: 1
✅ Require passing builds
✅ Reset approvals on changes

Restrict writes to:
[Add only your username]
```

Click **Add**

### Step 3: Protect DEV Branch

Click **Add a branch permission** again:

```
Branch or branch pattern: RIVIERA-FINAL_DEV

Prevent: ✅ Deletion
Prevent: ✅ Rewriting branch history

Restrict writes to:
[Add your username + trusted team members]
```

Click **Add**

---

## Testing Branch Protection

### Test 1: Verify MAIN is Protected

Try to push directly to MAIN (should fail):

```bash
git checkout RIVIERA-FINAL_MAIN
echo "test" >> test.txt
git add test.txt
git commit -m "Test direct push"
git push origin RIVIERA-FINAL_MAIN
```

**Expected Result:** ❌ Push rejected with error like:
```
remote: error: GH006: Protected branch update failed
remote: error: You're not authorized to push to RIVIERA-FINAL_MAIN
```

If it fails, protection is working! ✅  
Clean up:
```bash
git reset --hard HEAD~1
git checkout RIVIERA-FINAL_DEV
```

### Test 2: Create PR to MAIN

This should be the ONLY way to update MAIN:

```bash
# Make a change on DEV
git checkout RIVIERA-FINAL_DEV
echo "feature" >> feature.txt
git add feature.txt
git commit -m "009_feat_test-feature"
git push origin RIVIERA-FINAL_DEV

# Now create PR on GitHub/GitLab/Bitbucket
# Base: RIVIERA-FINAL_MAIN
# Compare: RIVIERA-FINAL_DEV
# You can approve and merge as the owner
```

---

## Adding Team Members (Trusted Collaborators)

### GitHub

1. Go to **Settings** → **Collaborators**
2. Click **Add people**
3. Enter their GitHub username or email
4. Set permission:
   - **Write** - Can push to DEV branch
   - **Maintain** - Can manage issues, PRs
   - **Admin** - Full access (be careful!)

Recommended: **Write** for developers

### GitLab

1. Go to **Settings** → **Members**
2. Click **Invite members**
3. Enter email or username
4. Set role:
   - **Developer** - Can push to DEV
   - **Maintainer** - Can manage branches

Recommended: **Developer** for team members

### Bitbucket

1. Go to **Repository settings** → **User and group access**
2. Click **Add users or groups**
3. Enter username
4. Set permission:
   - **Write** - Can push to DEV
   - **Admin** - Full access

Recommended: **Write** for team members

---

## For External Reviewers (No Write Access)

External reviewers should:

1. **Fork the repository** (GitHub/GitLab) or get read-only access (Bitbucket)
2. Clone their fork: `git clone [their-fork-url]`
3. Create branch: `git checkout -b reviewer-name/feature`
4. Make changes and push to their fork
5. Create Pull Request from their fork to your `client-contributions` branch
6. You review and merge (or reject)

**They cannot:**
- Push to any of your branches
- Access other PRs or issues (unless you grant)
- See repository settings

**They can:**
- View code
- Submit PRs
- Comment on PRs

---

## CODEOWNERS File (Optional but Recommended)

Create a file at the root: `.github/CODEOWNERS` (GitHub) or `CODEOWNERS` (GitLab)

```
# Riviera Waterfront Mansion Code Owners
# These owners will be requested for review when a PR is opened

# Default owners for everything
*       @your-github-username

# Specific file types
*.html  @your-github-username
*.js    @your-github-username
*.css   @your-github-username

# Security-sensitive files
.htaccess              @your-github-username
unified-contact-form.js @your-github-username
consent-manager.js      @your-github-username

# Documentation
*.md    @your-github-username @trusted-collaborator
```

Replace `@your-github-username` with your actual username.

---

## Workflow Summary

### For You (Owner):

**Daily Work:**
```bash
git checkout RIVIERA-FINAL_DEV
[make changes]
git add .
git commit -m "009_type_description"
git push origin RIVIERA-FINAL_DEV
```

**Promoting to Production:**
```bash
# Via Pull Request (Recommended)
# 1. Go to GitHub/GitLab/Bitbucket
# 2. Create PR: RIVIERA-FINAL_DEV → RIVIERA-FINAL_MAIN
# 3. Review and approve
# 4. Merge PR
```

### For Team Members:

**Daily Work:**
```bash
git checkout RIVIERA-FINAL_DEV
[make changes]
git add .
git commit -m "010_type_description"
git push origin RIVIERA-FINAL_DEV
```

They cannot push to MAIN. You merge to MAIN when ready.

### For External Reviewers:

**Their workflow:**
```bash
# In their fork
git checkout client-contributions
git checkout -b reviewer-name/fix-typo
[make changes]
git push origin reviewer-name/fix-typo

# Create PR to YOUR client-contributions branch
```

**Your workflow:**
```bash
# Review PR on GitHub/GitLab
# If approved:
git checkout client-contributions
git merge reviewer-name/fix-typo

# Test locally, then if good:
git checkout RIVIERA-FINAL_DEV
git cherry-pick [commit-hash-from-client-contributions]
git push origin RIVIERA-FINAL_DEV
```

---

## Emergency: Unlock MAIN Branch

If you need to bypass protection in an emergency:

### GitHub
1. Go to **Settings** → **Branches**
2. Find MAIN protection rule
3. Temporarily check "Allow force pushes" or "Allow bypass"
4. Make your emergency fix
5. **IMMEDIATELY** re-enable protection

### GitLab
1. **Settings** → **Repository** → **Protected branches**
2. Unprotect MAIN temporarily
3. Make your fix
4. Re-protect MAIN

### Bitbucket
1. **Repository settings** → **Branch permissions**
2. Delete MAIN permission temporarily
3. Make your fix
4. Re-add MAIN permission

**⚠️ IMPORTANT:** Only do this in true emergencies! Use PRs whenever possible.

---

## Verification Checklist

After setting up branch protection:

- [ ] MAIN branch shows "protected" badge
- [ ] Direct push to MAIN is rejected
- [ ] DEV branch shows "protected" badge (if configured)
- [ ] Direct push to DEV works for authorized users only
- [ ] client-contributions branch is NOT protected
- [ ] PRs can be created to MAIN from DEV
- [ ] Only you can approve PRs to MAIN
- [ ] Team members can push to DEV (if configured)
- [ ] External reviewers can fork or create PRs

---

## Troubleshooting

### "I can't push to DEV even though I'm the owner"

**Solution:**
- Check if you added yourself to "Restrict pushes"
- Or disable "Restrict pushes" for DEV
- Or use PRs even for DEV (more strict)

### "External reviewer can't create PR"

**Solution:**
- They should fork the repository first
- Or you need to add them as collaborator (not recommended for untrusted reviewers)
- Check repository visibility (should be private or public with fork enabled)

### "Protection rules aren't working"

**Solution:**
- Branch name must match exactly (case-sensitive)
- Push protection again: `git push origin RIVIERA-FINAL_MAIN`
- Refresh GitHub/GitLab page
- Check your role (must be admin/owner)

---

## Quick Reference Card

| Branch | Protection Level | Who Can Push | Who Can Merge to Main |
|--------|-----------------|--------------|---------------------|
| `RIVIERA-FINAL_MAIN` | 🔒 HIGH | Owner only (via PR) | Owner only |
| `RIVIERA-FINAL_DEV` | 🔐 MEDIUM | Owner + Team | Owner (via PR) |
| `client-contributions` | 🔓 OPEN | Anyone (via fork+PR) | Owner (after review) |

**Workflow:** 
client-contributions → (review) → DEV → (test) → MAIN → (deploy)

---

**Document Version:** 1.0  
**Last Updated:** 2026-02-04  
**Platform:** GitHub / GitLab / Bitbucket  
**Status:** Ready for Implementation
