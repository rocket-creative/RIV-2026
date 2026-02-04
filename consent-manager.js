/*!
 * Riviera Waterfront Mansion - Cookie Consent Manager
 * Copyright (c) 2024-2026 Riviera Waterfront Mansion. All Rights Reserved.
 * 
 * Unauthorized copying, modification, distribution, or use of this code,
 * via any medium, is strictly prohibited without express written permission.
 * This code is proprietary and confidential.
 * 
 * For licensing inquiries: info@rivierawaterfrontmansion.com
 * Version: 1.0.0
 * Last Modified: 2026-02-04
 */

/**
 * Cookie Consent Manager
 * Riviera Waterfront Mansion
 * GDPR/CCPA Compliant - No tracking until explicit consent
 */

(function() {
    'use strict';

    const CONSENT_KEY = 'riviera_consent';
    const CONSENT_VERSION = '1.0';

    // Check if consent already given
    function getConsent() {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            if (stored) {
                const consent = JSON.parse(stored);
                if (consent.version === CONSENT_VERSION) {
                    return consent;
                }
            }
        } catch (e) {
            console.warn('Could not read consent:', e);
        }
        return null;
    }

    // Save consent choice
    function saveConsent(preferences) {
        const consent = {
            version: CONSENT_VERSION,
            timestamp: new Date().toISOString(),
            necessary: true, // Always true
            analytics: preferences.analytics || false,
            marketing: preferences.marketing || false,
            thirdParty: preferences.thirdParty || false
        };
        try {
            localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
        } catch (e) {
            console.warn('Could not save consent:', e);
        }
        return consent;
    }

    // Check for Global Privacy Control
    function hasGPC() {
        return navigator.globalPrivacyControl === true;
    }

    // Create and show banner
    function showBanner() {
        // Don't show if GPC is set (treat as opt-out)
        if (hasGPC()) {
            saveConsent({ analytics: false, marketing: false, thirdParty: false });
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-labelledby', 'consent-title');
        banner.setAttribute('aria-describedby', 'consent-description');
        banner.innerHTML = `
            <div class="consent-content">
                <div class="consent-text">
                    <h3 id="consent-title">We Value Your Privacy</h3>
                    <p id="consent-description">We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. You can customize your preferences or accept all cookies.</p>
                </div>
                <div class="consent-actions">
                    <button type="button" class="consent-btn consent-btn-secondary" id="consent-customize">Customize</button>
                    <button type="button" class="consent-btn consent-btn-outline" id="consent-reject">Reject All</button>
                    <button type="button" class="consent-btn consent-btn-primary" id="consent-accept">Accept All</button>
                </div>
            </div>
            <div class="consent-customize-panel" id="consent-panel" style="display: none;">
                <div class="consent-options">
                    <label class="consent-option">
                        <input type="checkbox" checked disabled>
                        <span class="consent-option-text">
                            <strong>Necessary</strong>
                            <small>Required for the website to function properly</small>
                        </span>
                    </label>
                    <label class="consent-option">
                        <input type="checkbox" id="consent-analytics">
                        <span class="consent-option-text">
                            <strong>Analytics</strong>
                            <small>Help us understand how visitors use our site</small>
                        </span>
                    </label>
                    <label class="consent-option">
                        <input type="checkbox" id="consent-marketing">
                        <span class="consent-option-text">
                            <strong>Marketing</strong>
                            <small>Personalized ads and content</small>
                        </span>
                    </label>
                    <label class="consent-option">
                        <input type="checkbox" id="consent-third-party">
                        <span class="consent-option-text">
                            <strong>Third Party</strong>
                            <small>Embedded content like maps and videos</small>
                        </span>
                    </label>
                </div>
                <div class="consent-panel-actions">
                    <button type="button" class="consent-btn consent-btn-primary" id="consent-save">Save Preferences</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Add styles
        const styles = document.createElement('style');
        styles.id = 'consent-styles';
        styles.textContent = `
            #consent-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: #1A1A1A;
                color: #FFFFFF;
                padding: 1.25rem 1.5rem;
                z-index: 10000;
                box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
                font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
            }
            @media (max-width: 767px) {
                #consent-banner {
                    padding-bottom: calc(1.25rem + 70px);
                }
            }
            .consent-content {
                max-width: 1400px;
                margin: 0 auto;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 1.5rem;
            }
            .consent-text {
                flex: 1;
                min-width: 280px;
            }
            .consent-text h3 {
                font-family: 'Cormorant Garamond', Georgia, serif;
                font-size: 1.25rem;
                font-weight: 600;
                margin: 0 0 0.5rem 0;
                color: #D4A84B;
            }
            .consent-text p {
                font-size: 0.875rem;
                line-height: 1.5;
                margin: 0;
                opacity: 0.85;
            }
            .consent-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 0.75rem;
            }
            .consent-btn {
                padding: 0.625rem 1.25rem;
                font-size: 0.8125rem;
                font-weight: 600;
                letter-spacing: 0.03em;
                text-transform: uppercase;
                border-radius: 4px;
                border: none;
                cursor: pointer;
                transition: all 0.2s ease;
                white-space: nowrap;
                font-family: inherit;
            }
            .consent-btn-primary {
                background: #B8860B;
                color: #FFFFFF;
            }
            .consent-btn-primary:hover {
                background: #8B6914;
            }
            .consent-btn-secondary {
                background: #2C2C2C;
                color: #FFFFFF;
                border: 1px solid #4A4A4A;
            }
            .consent-btn-secondary:hover {
                background: #3C3C3C;
            }
            .consent-btn-outline {
                background: transparent;
                color: #FFFFFF;
                border: 1px solid rgba(255,255,255,0.3);
            }
            .consent-btn-outline:hover {
                background: rgba(255,255,255,0.1);
            }
            .consent-customize-panel {
                max-width: 1400px;
                margin: 1rem auto 0;
                padding-top: 1rem;
                border-top: 1px solid rgba(255,255,255,0.1);
            }
            .consent-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
            }
            .consent-option {
                display: flex;
                align-items: flex-start;
                gap: 0.75rem;
                cursor: pointer;
            }
            .consent-option input {
                margin-top: 0.25rem;
                width: 18px;
                height: 18px;
                accent-color: #B8860B;
            }
            .consent-option-text {
                display: flex;
                flex-direction: column;
            }
            .consent-option-text strong {
                font-size: 0.875rem;
                font-weight: 600;
            }
            .consent-option-text small {
                font-size: 0.75rem;
                opacity: 0.7;
                margin-top: 0.125rem;
            }
            .consent-panel-actions {
                text-align: right;
            }
            @media (max-width: 640px) {
                .consent-content {
                    flex-direction: column;
                    align-items: stretch;
                }
                .consent-actions {
                    flex-direction: column;
                }
                .consent-btn {
                    width: 100%;
                    text-align: center;
                }
            }
        `;
        document.head.appendChild(styles);

        // Event listeners
        document.getElementById('consent-accept').addEventListener('click', function() {
            const consent = saveConsent({ analytics: true, marketing: true, thirdParty: true });
            hideBanner();
            applyConsent(consent);
        });

        document.getElementById('consent-reject').addEventListener('click', function() {
            const consent = saveConsent({ analytics: false, marketing: false, thirdParty: false });
            hideBanner();
            applyConsent(consent);
        });

        document.getElementById('consent-customize').addEventListener('click', function() {
            const panel = document.getElementById('consent-panel');
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        });

        document.getElementById('consent-save').addEventListener('click', function() {
            const consent = saveConsent({
                analytics: document.getElementById('consent-analytics').checked,
                marketing: document.getElementById('consent-marketing').checked,
                thirdParty: document.getElementById('consent-third-party').checked
            });
            hideBanner();
            applyConsent(consent);
        });
    }

    function hideBanner() {
        const banner = document.getElementById('consent-banner');
        if (banner) {
            banner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            banner.style.transform = 'translateY(100%)';
            banner.style.opacity = '0';
            setTimeout(() => banner.remove(), 300);
        }
    }

    // Apply consent settings (load scripts, enable features)
    function applyConsent(consent) {
        // Dispatch event for other scripts to listen to
        window.dispatchEvent(new CustomEvent('consentUpdated', { detail: consent }));

        // Enable third-party embeds (like Google Maps)
        if (consent.thirdParty) {
            document.querySelectorAll('[data-consent-src]').forEach(function(el) {
                el.src = el.getAttribute('data-consent-src');
                el.removeAttribute('data-consent-src');
            });
            document.querySelectorAll('.consent-placeholder').forEach(function(el) {
                el.style.display = 'none';
            });
            document.querySelectorAll('.consent-content-wrapper').forEach(function(el) {
                el.style.display = 'block';
            });
        }

        // Analytics scripts would go here (when implemented)
        // if (consent.analytics) { ... }

        // Marketing scripts would go here (when implemented)
        // if (consent.marketing) { ... }
    }

    // Initialize on DOM ready
    function init() {
        const existingConsent = getConsent();
        if (existingConsent) {
            applyConsent(existingConsent);
        } else {
            showBanner();
        }
    }

    // Expose functions globally for preference center access
    window.ConsentManager = {
        showBanner: showBanner,
        getConsent: getConsent,
        resetConsent: function() {
            localStorage.removeItem(CONSENT_KEY);
            location.reload();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
