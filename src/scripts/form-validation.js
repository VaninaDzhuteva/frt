// Form and button 
const form = document.querySelector('#validation-form');
const submitBtn = document.querySelector('#submit-btn');

if(form) {
    // Check for leap year, days in month
    const daysInMonth = (month, year) => {
        switch (month) {
            case 1:
                return (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
            case 3: case 5: case 8: case 10:
                return 30;
            default:
                return 31;
        }
    }

    // Check for valid date
    const isValidDate = (day, month, year) => {
        month = parseInt(month, 10) - 1;
        return month >= 0 && month < 12 && day > 0 && day <= daysInMonth(month, year);
    }

    // Form action
    const ageValidation = (e) => {
        // Form values
        const day = document.querySelector('#day').value;
        const month = document.querySelector('#month').value;
        const year = document.querySelector('#year').value;
        const dangerMsg = document.querySelector('.text-danger');
        // Dates
        const age = 18;
        let date = new Date();
        date.setFullYear(year, month - 1, day);
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - age);

        // Check if the input is valid
        if (isValidDate(day, month, year) === false) {
            // Show error message
            dangerMsg.classList.remove('hidden');
            // Reset form fields
            form.reset();
            return false;
        } 
        // Check if the user is 18
        else if((currentDate - date) < 0) {
                // Show error message
                dangerMsg.innerText = 'You must be adult to proceed!';
        } else {
            // Set cookie if user pass the from validation
            localStorage.setItem("Adult", 'yes');
            // Submit form
            form.submit();
        }
        // Prevent form submission
        e.preventDefault();
    }
    // Add event listener on submit button
    submitBtn.addEventListener('click', ageValidation);

    // Check for cookie and redirect if there is any
    window.addEventListener('load', function() {
        if(localStorage.getItem('Adult') !== null) {
            window.location.href = "/../dist/inner.html";
        } else {
            window.location.href = "/../dist/index.html";
        }
    });
}