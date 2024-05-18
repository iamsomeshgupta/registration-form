document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let errors = [];
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const description = document.getElementById('description').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!/^\d{10}$/.test(phone)) {
      errors.push("Phone number should be a 10-digit number.");
    }
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      errors.push("Email should be a valid email address.");
    }

    if (description.split(/\s+/).length > 200) {
      errors.push("Description should not exceed 200 words.");
    }
  
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
      errors.push("Password should be at least 8 characters long and include at least one number and one special character.");
    }
  
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = "";
  
    if (errors.length > 0) {
      errors.forEach(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error;
        errorMessages.appendChild(errorMessage);
      });
    } else {
      alert("Registration successful!");
      document.getElementById('registrationForm').reset();
    }
  });
  