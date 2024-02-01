/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // Check if the fields have a value
    if(calculateCm.value === '' || calculateKg.value == '') {
        // Add and remove color
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // Show Message
        calculateMessage.textContent = 'Fill in the Height and Weight 🧑‍💻';

        // Remove Message after 3 seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000);
    } else {
        // BMI Formula
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm));

        // Show your health status
        if(bmi < 18.5) {
            // Add color and display message
            calculateMessage.classList.add('color-red');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are UNDERWEIGHT 😥`
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          calculateMessage.classList.add("color-green");
          calculateMessage.textContent = `Your BMI is ${bmi} and you are HEALTHY 🥳`;
        } else if (bmi >= 25 && bmi <= 29.9) {
          calculateMessage.classList.add("color-blue");
          calculateMessage.textContent = `Your BMI is ${bmi} and you are OVERWEIGHT 😟`;
        } else if (bmi >= 30 && bmi < 39.9) {
          calculateMessage.classList.add("color-orange");
          calculateMessage.textContent = `Your BMI is ${bmi} and you are OBESE 😰`;
        } else {
          calculateMessage.classList.add("color-red");
          calculateMessage.textContent = `Your BMI is ${bmi} and you EXTREMELY OBESE  😱`;
        }

        // To clear the input field
        calculateCm.value = '';
        calculateKg.value = '';

        // Remove Message after 4 seconds
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 4000);
    }
}

calculateForm.addEventListener('submit', calculateBmi)