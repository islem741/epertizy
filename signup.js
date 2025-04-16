document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const accountOptions = document.querySelectorAll('.type-option');
    
    
    accountOptions.forEach(option => {
        option.addEventListener('click', function() {
            
            accountOptions.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            
            this.classList.add('selected');
            
            
            const radioInput = this.querySelector('input[type="radio"]');
            if (radioInput) {
                radioInput.checked = true;
            }
        });
    });
    
    
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value,
            accountType: document.querySelector('input[name="account-type"]:checked')?.value,
            agreedToTerms: document.getElementById('terms').checked
        };
        
        
        if (!formData.firstName || !formData.lastName || !formData.email || 
            !formData.phone || !formData.password || !formData.confirmPassword || 
            !formData.accountType || !formData.agreedToTerms) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (formData.password.length < 8) {
            alert('Password must be at least 8 characters long');
            return;
        }
        
        
        console.log('Form submission data:', formData);
        
        
        alert('Account created successfully! (This is a demo)');
        
        signupForm.reset();
        
       
    });
});