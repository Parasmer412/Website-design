 const form = document.getElementById("regForm");

    // Allow only numbers in mobile input
    document.getElementById("mobile").addEventListener("keypress", function (e) {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    });

    function showError(input, message) {
      let existingError = input.parentElement.querySelector(".error");
      if (existingError) existingError.remove();

      let error = document.createElement("div");
      error.className = "error";
      error.innerText = message;
      input.parentElement.appendChild(error);
    }

    function clearError(input) {
      let existingError = input.parentElement.querySelector(".error");
      if (existingError) existingError.remove();
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const email = document.getElementById("email");
      const password = document.getElementById("password");
      const repassword = document.getElementById("repassword");
      const firstname = document.getElementById("firstname");
      const lastname = document.getElementById("lastname");
      const mobile = document.getElementById("mobile");
      const gender = document.querySelector('input[name="gender"]:checked');
      const country = document.getElementById("country");
      const terms = document.getElementById("terms");

      // Email validation
      if (email.value.trim() === "") {
        showError(email, "Email is required");
        valid = false;
      } else {
        clearError(email);
      }

      // Password validation
      if (password.value.trim() === "") {
        showError(password, "Password is required");
        valid = false;
      } else {
        clearError(password);
      }

      // Re-password validation
      if (repassword.value.trim() === "") {
        showError(repassword, "Please re-type password");
        valid = false;
      } else if (password.value !== repassword.value) {
        showError(repassword, "Passwords do not match");
        valid = false;
      } else {
        clearError(repassword);
      }

      // Firstname validation
      if (firstname.value.trim() === "") {
        showError(firstname, "First name is required");
        valid = false;
      } else {
        clearError(firstname);
      }

      // Lastname validation
      if (lastname.value.trim() === "") {
        showError(lastname, "Last name is required");
        valid = false;
      } else {
        clearError(lastname);
      }

      // Mobile validation
      if (mobile.value.trim() === "") {
        showError(mobile, "Mobile number is required");
        valid = false;
      } else if (mobile.value.length < 10) {
        showError(mobile, "Enter at least 10 digits");
        valid = false;
      } else {
        clearError(mobile);
      }

      // Gender validation
      if (!gender) {
        alert("Please select gender");
        valid = false;
      }

      // Country validation
      if (country.value === "") {
        showError(country, "Select a country");
        valid = false;
      } else {
        clearError(country);
      }

      // Terms validation
      if (!terms.checked) {
        alert("You must agree to terms and conditions");
        valid = false;
      }

      if (valid) {
        alert("Registration Successful!");
        form.reset();
      }
    });
