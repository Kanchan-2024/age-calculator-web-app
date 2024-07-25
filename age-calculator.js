const birthDayInput = document.getElementById('birthDay');
const birthMonthInput = document.getElementById('birthMonth');
const birthYearInput = document.getElementById('birthYear');
const calculateBtn = document.getElementById('calculate-btn');
const ageElement = document.getElementById('age');
const form = document.querySelector('form'); // Add this line

form.addEventListener('submit', (e) => { // Add this event listener
    e.preventDefault();
});

calculateBtn.addEventListener('click', calculateAge);

function calculateAge() {
    const birthDay = Number(birthDayInput.value);
    const birthMonth = Number(birthMonthInput.value) - 1;
    const birthYear = Number(birthYearInput.value);

    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const age = calculateAgeInYears(birthDate, today);
    ageElement.innerHTML = `You are ${age} years old.`;
}

function calculateAgeInYears(birthDate, today) {
    const ageInMilliseconds = today.getTime() - birthDate.getTime();
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
}