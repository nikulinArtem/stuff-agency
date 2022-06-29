
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

    navItem.addEventListener('mouseover', ev => list.style.display = '');
    navItem.addEventListener('mouseout', ev => list.style.display = 'none');

// Всплывающая форма
    const request = document.getElementsByClassName('button-request')[0];
    const send = document.getElementsByClassName('button-send')[0];
    const requestform = document.getElementsByClassName('request-form')[0];
    const sendform = document.getElementsByClassName('send-form')[0];
    const requestBtn = document.getElementsByClassName('request')[0];
    const sendBtn = document.getElementsByClassName('send')[0];
    console.log(requestBtn)
    console.log(requestform);

    requestform.style.display = 'none';
    sendform.style.display = 'none';

    request.addEventListener('mouseover', ev => {
        requestform.style.display = '';
        requestBtn.style.background = 'linear-gradient(180deg, #E1B67A, #864F0D)';
        requestBtn.style.border = '1px solid #AE741F';
        requestBtn.style.color = 'white';
    });
    request.addEventListener('mouseout', ev => {
        requestform.style.display = 'none';
        requestBtn.style.background = 'rgb(253,245,215)';
        requestBtn.style.background = 'linear-gradient(180deg, rgba(253,245,215,1) 0%, rgba(215,192,116,1) 70%, rgba(245,228,183,1) 100%)';
        requestBtn.style.color = '#472800';
    });
    send.addEventListener('mouseover', ev => {
        sendform.style.display = '';
        sendBtn.style.background = 'linear-gradient(180deg, #E1B67A, #864F0D)';
        sendBtn.style.border = '1px solid #AE741F';
        sendBtn.style.color = 'white';
    });
    send.addEventListener('mouseout', ev => {
        sendform.style.display = 'none';
        sendBtn.style.background = 'rgb(253,245,215)';
        sendBtn.style.background = 'linear-gradient(180deg, rgba(253,245,215,1) 0%, rgba(215,192,116,1) 70%, rgba(245,228,183,1) 100%)';
        sendBtn.style.color = '#472800';
    });

// таблица с персоналом

// Массив сотрудников

    let people = [
        {
            name: 'Лопухова Надежда Александровна',
            job: 'гувернантка',
            age: 45,
            exp: 15
        },
        {
            name: 'Ермакова Надежда Ивановна',
            job: 'няня',
            age: 30,
            exp: 5
        },
        {
            name: 'Филимонов Константин Николаевич',
            job: 'садовник',
            age: 50,
            exp: 20
        },
        {
            name: 'Иванова Светлана Игоревна',
            job: 'уборщица',
            age: 35,
            exp: 7
        },
        {
            name: 'Миронов Юрий Герасимович',
            job: 'конюх',
            age: 60,
            exp: 15
        },
        {
            name: 'Новикова Нина Алексеевна',
            job: 'повар',
            age: 40,
            exp: 17
        },
        {
            name: 'Шохина Екатерина Юрьевна',
            job: 'гувернантка',
            age: 48,
            exp: 16
        },
        {
            name: 'Косткина Надежда Дмитриевна',
            job: 'гувернантка',
            age: 39,
            exp: 9
        },
        {
            name: 'Рудь Ольга Алексеевна',
            job: 'гувернантка',
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
    let stuffName = document.getElementsByClassName('js-stuff-name')[0];
    let stuffJob = document.getElementsByClassName('js-stuff-job')[0];
    let stuffAge = document.getElementsByClassName('js-stuff-age')[0];
    let stuffExp = document.getElementsByClassName('js-stuff-exp')[0];
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

