const form = document.querySelector('#validation-form');
const submitBtn = document.querySelector('#submit-btn');

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

const isValidDate = (day, month, year) => {
    month = parseInt(month, 10) - 1;
    return month >= 0 && month < 12 && day > 0 && day <= daysInMonth(month, year);
}

const ageValidation = (e) => {
    // Form values
    const day = document.querySelector('#day').value;
    const month = document.querySelector('#month').value;
    const year = document.querySelector('#year').value;
    const dangerMsg = document.querySelector('.text-danger');

    if (isValidDate(day, month, year) === false) {
        dangerMsg.classList.remove('hidden');
        form.reset();
        return false;
    } else {
        dangerMsg.classList.add('hidden');
        console.log(day, month, year);
        form.submit();
    }

    e.preventDefault();
}

submitBtn.addEventListener('click', ageValidation);