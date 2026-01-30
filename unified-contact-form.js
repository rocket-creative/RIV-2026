/**
 * Riviera Waterfront Mansion - Form Handler
 * 
 * Sends all form submissions to: info@rivierawaterfrontmansion.com
 * Backups stored at: https://formspree.io (login to view all submissions)
 * 
 * ═══════════════════════════════════════════════════════════════════
 * SETUP REQUIRED (5 minutes):
 * ═══════════════════════════════════════════════════════════════════
 * 1. Go to https://formspree.io/register
 * 2. Create FREE account (no credit card needed)
 * 3. Click "New Form" → name it "Riviera Contact"
 * 4. Set email to: info@rivierawaterfrontmansion.com
 * 5. Copy the form ID (looks like: "xpwzgkqv")
 * 6. Replace 'YOUR_FORMSPREE_ID' below with your ID
 * 7. Done! All submissions go to email + backed up in Formspree dashboard
 * ═══════════════════════════════════════════════════════════════════
 */

const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'; // ← REPLACE THIS (e.g., 'xpwzgkqv')
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
const FALLBACK_EMAIL = 'info@rivierawaterfrontmansion.com';
const IS_CONFIGURED = FORMSPREE_ID !== 'YOUR_FORMSPREE_ID';

/**
 * Validate form fields
 */
function validateForm(form) {
    let isValid = true;
    
    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(el => el.remove());
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    
    // Validate required fields
    form.querySelectorAll('[required]').forEach(field => {
        const value = field.value.trim();
        
        if (!value) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else if (field.type === 'email' && !isValidEmail(value)) {
            showFieldError(field, 'Please enter a valid email');
            isValid = false;
        } else if (field.type === 'tel' && !isValidPhone(value)) {
            showFieldError(field, 'Please enter a valid phone number');
            isValid = false;
        }
    });
    
    return isValid;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\d\s\-\(\)\+]{10,}$/.test(phone);
}

function showFieldError(field, message) {
    field.classList.add('error');
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    error.style.cssText = 'color:#C62828;font-size:0.75rem;display:block;margin-top:0.25rem;';
    field.parentNode.appendChild(error);
}

/**
 * Submit form to Formspree (or fallback to mailto)
 */
async function submitToFormspree(formData, formType) {
    // If Formspree not configured, use mailto fallback
    if (!IS_CONFIGURED) {
        return submitViaMailto(formData, formType);
    }
    
    // Add metadata
    formData.append('_subject', `Riviera Inquiry: ${formType}`);
    formData.append('_form_type', formType);
    formData.append('_submitted_at', new Date().toISOString());
    formData.append('_page_url', window.location.href);
    
    const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });
    
    if (!response.ok) {
        throw new Error('Submission failed');
    }
    
    return response.json();
}

/**
 * Fallback: Open mailto link with form data
 */
function submitViaMailto(formData, formType) {
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });
    
    const subject = encodeURIComponent(`Riviera Inquiry: ${formType}`);
    const body = encodeURIComponent(
        Object.entries(data)
            .map(([k, v]) => `${k}: ${v}`)
            .join('\n\n') +
        `\n\n---\nSubmitted from: ${window.location.href}\nTime: ${new Date().toLocaleString()}`
    );
    
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    
    return Promise.resolve({ ok: true, fallback: true });
}

/**
 * Show loading state on button
 */
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.innerHTML;
        button.innerHTML = '<span class="spinner"></span> Sending...';
    } else {
        button.disabled = false;
        button.innerHTML = button.dataset.originalText || 'Submit';
    }
}

/**
 * Show success message
 */
function showSuccess(container, message) {
    container.innerHTML = `
        <div style="text-align:center;padding:2rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2" style="margin:0 auto 1rem;">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <h3 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.75rem;margin-bottom:0.5rem;color:#2C2C2C;">Thank You!</h3>
            <p style="color:#4A4A4A;font-size:1rem;">${message}</p>
        </div>
    `;
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Show error message
 */
function showError(container, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-banner';
    errorDiv.style.cssText = 'background:#FFEBEE;color:#C62828;padding:1rem;border-radius:4px;margin-bottom:1rem;text-align:center;';
    errorDiv.innerHTML = `<strong>Error:</strong> ${message}`;
    
    const existingError = container.querySelector('.form-error-banner');
    if (existingError) existingError.remove();
    
    container.insertBefore(errorDiv, container.firstChild);
}

/**
 * Contact Form Handler
 * Used on: contact.html, index.html (footer contact form)
 */
async function submitUnifiedContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const wrapper = form.closest('.contact-form-wrapper') || form.parentNode;
    
    if (!validateForm(form)) return;
    
    setButtonLoading(button, true);
    
    try {
        const formData = new FormData(form);
        const result = await submitToFormspree(formData, 'Contact Form');
        if (result.fallback) {
            showSuccess(wrapper, "Your email app should open. Please click Send to submit your inquiry.");
        } else {
            showSuccess(wrapper, "We've received your message and will contact you within 24 hours.");
        }
    } catch (error) {
        setButtonLoading(button, false);
        showError(form, 'Something went wrong. Please call us at 516-541-5020.');
        console.error('Form error:', error);
    }
}

/**
 * Quiz Form Handler
 * Used on: index.html (wedding planning quiz)
 */
async function submitQuizForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const wrapper = form.closest('.quiz-form-step') || form.parentNode;
    
    if (!validateForm(form)) return;
    
    setButtonLoading(button, true);
    
    try {
        const formData = new FormData(form);
        const result = await submitToFormspree(formData, 'Wedding Quiz');
        if (result.fallback) {
            showSuccess(wrapper, "Your email app should open. Please click Send to submit your inquiry.");
        } else {
            showSuccess(wrapper, "Your personalized consultation request has been received. We'll be in touch within 24 hours!");
        }
    } catch (error) {
        setButtonLoading(button, false);
        showError(form, 'Something went wrong. Please call us at 516-541-5020.');
        console.error('Form error:', error);
    }
}

/**
 * Booking/Tour Request Handler
 * Used on: index.html (tour booking modal)
 */
async function submitBooking(event) {
    event.preventDefault();
    
    const form = event.target;
    const button = form.querySelector('button[type="submit"]');
    const wrapper = form.closest('.booking-form') || form.parentNode;
    
    if (!validateForm(form)) return;
    
    setButtonLoading(button, true);
    
    try {
        const formData = new FormData(form);
        
        // Add selected date from calendar if available
        const selectedDate = document.querySelector('.selected-date-display');
        if (selectedDate) {
            formData.append('requested_tour_date', selectedDate.textContent);
        }
        
        const result = await submitToFormspree(formData, 'Tour Request');
        if (result.fallback) {
            showSuccess(wrapper, "Your email app should open. Please click Send to submit your tour request.");
        } else {
            showSuccess(wrapper, "Your tour request has been submitted. We'll confirm your appointment within 24 hours.");
        }
    } catch (error) {
        setButtonLoading(button, false);
        showError(form, 'Something went wrong. Please call us at 516-541-5020.');
        console.error('Form error:', error);
    }
}

// Add spinner animation styles
(function addSpinnerStyles() {
    if (document.getElementById('form-spinner-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'form-spinner-styles';
    style.textContent = `
        .spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #fff;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .form-group input.error,
        .form-group textarea.error,
        .form-group select.error {
            border-color: #C62828;
        }
    `;
    document.head.appendChild(style);
})();

// Expose functions globally
window.submitUnifiedContactForm = submitUnifiedContactForm;
window.submitQuizForm = submitQuizForm;
window.submitBooking = submitBooking;
