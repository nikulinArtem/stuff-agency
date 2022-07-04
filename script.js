// Слайдер
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

let timer = 0;
makeTimer();
function makeTimer(){
    clearInterval(timer);
    timer = setInterval(function(){
        slideIndex++;
        showSlides(slideIndex);
    },2000);
}


document.addEventListener('DOMContentLoaded', () => {
// Всплывающее окно
    const navItem = document.getElementById('drop-list');
    let list = document.getElementsByClassName('pop-up')[0];

    list.style.display = 'none';

    document.addEventListener('click', e => {
        let target = e.target;
        if (!list.contains(target) && !navItem.contains(target)) {
            list.style.display = 'none';

        } else if (navItem.contains(target)) {
            list.style.display = (list.style.display !== 'block') ? 'block' : 'none';

        }

        if (list.style.display === 'block') {
            navItem.style.background = 'linear-gradient(0deg, #faedc7 0%, #eacf8f 13%, #e8c478 58%, #fff9e0 96%, #fff9e0 100%)';
            navItem.firstElementChild.style.color = '#3e2318';
        } else {
            navItem.style.background = '';
            navItem.firstElementChild.style.color = 'white';
        }
    })

// Всплывающая форма
    const request = document.getElementsByClassName('button-request')[0];
    const send = document.getElementsByClassName('button-send')[0];
    const requestForm = document.getElementsByClassName('request-form')[0];
    const sendForm = document.getElementsByClassName('send-form')[0];


    requestForm.style.display = 'none';
    sendForm.style.display = 'none';

    document.addEventListener('click', (event) => {
        let target = event.target;
        if (request.contains(target)) {
            requestForm.style.display = 'block';

        } else if (!requestForm.contains(target)) {
            requestForm.style.display = 'none';

        }

        if (send.contains(target)) {
            sendForm.style.display = 'block';
        } else if (!sendForm.contains(target)) {
            sendForm.style.display = 'none';
        }
    });

// таблица с персоналом

// Массив сотрудников

    let people = [
        {
            name: 'Лопухова Надежда Александровна',
            job: 'Гувернантка',
            age: 45,
            exp: 15
        },
        {
            name: 'Ермакова Надежда Ивановна',
            job: 'Няня',
            age: 30,
            exp: 5
        },
        {
            name: 'Филимонов Константин Николаевич',
            job: 'Садовник',
            age: 50,
            exp: 20
        },
        {
            name: 'Иванова Светлана Игоревна',
            job: 'Уборщица',
            age: 35,
            exp: 7
        },
        {
            name: 'Миронов Юрий Герасимович',
            job: 'Конюх',
            age: 60,
            exp: 15
        },
        {
            name: 'Новикова Нина Алексеевна',
            job: 'Повар',
            age: 40,
            exp: 17
        },
        {
            name: 'Шохина Екатерина Юрьевна',
            job: 'Гувернантка',
            age: 48,
            exp: 16
        },
        {
            name: 'Косткина Надежда Дмитриевна',
            job: 'Гувернантка',
            age: 39,
            exp: 9
        },
        {
            name: 'Рудь Ольга Алексеевна',
            job: 'Гувернантка',
            age: 55,
            exp: 18
        }
    ]

    let peopleArr = [];

// Подключение HTML-элементов
// Форма

    // const form = document.getElementsByClassName('js-stuff-form')[0];
    const formJob = document.getElementById('stuff-select');
    const minExp = document.getElementById('min-exp');
    const maxExp = document.getElementById('max-exp');
    const minAge = document.getElementById('min-age');
    const maxAge = document.getElementById('max-age');
    const submitBtn = document.getElementsByClassName('submit-btn')[0];
// Таблица
    let stuffContainer = document.getElementsByClassName('js-stuff-container')[0];
    let tableTemplate = (() => {
        let template = document.getElementsByClassName('js-stuff')[0].cloneNode(true);
        document.getElementsByClassName('js-stuff')[0].remove();
        template.classList.remove('d-none');
        return template;
    })();

    let template;
    peopleArr = people;

    peopleArr.forEach(elem => {
        template = tableTemplate.cloneNode(true);
        template.querySelector('.js-stuff-name').textContent = elem.name;
        template.querySelector('.js-stuff-job').textContent = elem.job;
        template.querySelector('.js-stuff-age').textContent = elem.age;
        template.querySelector('.js-stuff-exp').textContent = `${elem.exp} лет`;

        stuffContainer.appendChild(template)
    })

    console.log(submitBtn);
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (stuffContainer.childElementCount > 0) {
            stuffContainer.innerHTML = '';
        }
        let filterPeople = peopleArr.filter(item => {
            return (item.job === formJob.value || !formJob.value)
                && item.age >= minAge.value
                && item.age <= maxAge.value
                && item.exp >= minExp.value
                && item.exp <= maxExp.value
        });

        console.log(filterPeople);

        filterPeople.forEach(stuff => {
            template = tableTemplate.cloneNode(true);
            template.querySelector('.js-stuff-name').textContent = stuff.name;
            template.querySelector('.js-stuff-job').textContent = stuff.job;
            template.querySelector('.js-stuff-age').textContent = stuff.age;
            template.querySelector('.js-stuff-exp').textContent = `${stuff.exp} лет`;

            stuffContainer.appendChild(template)
        })
    })
})

