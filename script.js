let feet = document.getElementById('feet');
let inch = document.getElementById('inches');
let weigth = document.getElementById('numWeight');
let btn = document.getElementById('calculateBMI');
let placeHold = document.getElementById('place');
let first = document.getElementById('first');
let sec = document.getElementById('sec');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let reset = document.getElementById('reset');


btn.addEventListener('click', function() {
    if(weigth.value.length === 0 || feet.value === ''|| inch.value === '') {
        alert('Please enter the required fields');
    }
    else{
        reset.disabled = false;
        first.style.backgroundColor = 'white';
        sec.style.backgroundColor = 'white';
        third.style.backgroundColor = 'white';
        fourth.style.backgroundColor = 'white';
        first.style.color = 'black';
        sec.style.color = 'black';
        third.style.color = 'black';
        fourth.style.color = 'black';
        let height = (feet.value * 0.3048) + (inch.value * 0.0254);
        let BMI = weigth.value/(height * height);
        placeHold.innerText = `YOUR BMI IS ${BMI.toFixed(1)}`;
        if(BMI < 18.5) {
            first.style.backgroundColor = '#4CAF50';
            first.style.color = 'white';
        }
        else if(BMI >= 18.5 && BMI <= 24.9) {
            sec.style.backgroundColor = '#4CAF50';
            sec.style.color = 'white';
        }
        else if(BMI >= 25 && BMI <= 29.9) {
            third.style.backgroundColor = '#4CAF50';
            third.style.color = 'white';
        }
        else {
            fourth.style.backgroundColor = '#4CAF50';
            fourth.style.color = 'white';
        }
        }
})
reset.addEventListener('click', function() {
    placeHold.innerText = 'BMI CATEGORIES';
    reset.disabled = true;
    feet.value = '';
    inch.value = '';
    weigth.value = '';
    first.style.backgroundColor = 'white';
    sec.style.backgroundColor = 'white';
    third.style.backgroundColor = 'white';
    fourth.style.backgroundColor = 'white';
    first.style.color = 'black';
    sec.style.color = 'black';
    third.style.color = 'black';
    fourth.style.color = 'black';
})
