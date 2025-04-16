document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
        
       
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        
        console.log('Login attempt with:', {
            email,
            password,
            rememberMe
        });
        
        
        alert('Login successful! (This is a demo)');
        
        
        loginForm.reset();
        
    
    });
});