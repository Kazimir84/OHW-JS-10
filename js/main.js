// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//      чтобы при клике на кнопку исчезал элемент с id="text".
let label = document.createElement('LABEL');
    label.innerText = 'Play with text';
document.body.append(label);
let idText = document.createElement('H1');
    idText.id = 'text';
    idText.innerText = 'Hello World!!!';
label.append(idText);
let btnHideIdText = document.createElement('BUTTON');
    btnHideIdText.innerText = 'Click Me!';
    label.append(btnHideIdText);

btnHideIdText.addEventListener("click", function (e) {
    idText.classList.toggle('textActive');
});

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btnHide = document.createElement('BUTTON');
    btnHide.innerText = 'Click Me To Hide';
    document.body.append(btnHide);

btnHide.addEventListener("click", function (e) {
    btnHide.classList.toggle('textActive');
});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//      При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let divUser = document.createElement('DIV');
divUser.innerText = 'Input Your Age! > ';
document.body.append(divUser);

let inputAge = document.createElement('INPUT')
divUser.append(inputAge);

let btnAge = document.createElement('BUTTON');
btnAge.innerText = 'Check Age';
divUser.append(btnAge);

btnAge.addEventListener('click', function (e) {
    let age = +inputAge.value < 18 ? 'You so yong for this Content' : "It's Ok, you may cam!";
    alert(age);
});

// - Создайте меню, которое раскрывается/сворачивается при клике
let menuNav = document.createElement('NAV');
document.body.append(menuNav);
menuNav.style = `
    display: flex;
    width: 150px;
    align-items: center;
    flex-direction: column;
    border: 2px solid greenyellow;
    background-color: aqua;
`;

let navContacts = document.createElement('A');
    navContacts.setAttribute('href', '#');
    navContacts.innerText = 'Contacts';

let aboutUs = document.createElement('A');
    aboutUs.setAttribute('href', '#');
    aboutUs.innerText = 'About Us';

let navAurProjects = document.createElement('A');
    navAurProjects.setAttribute('href', '#');
    navAurProjects.innerText = 'Projects';

let navHome = document.createElement('A');
    navHome.setAttribute('href', '#');
    navHome.innerText = 'HOME';

let navNews = document.createElement('A');
    navNews.setAttribute('href', '#');
    navNews.innerText = 'News about Us';

menuNav.append(navContacts, aboutUs, navAurProjects, navHome, navNews);

menuNav.addEventListener('click', function (e) {
    menuNav.classList.toggle('transform');
});

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let arrList = [
    {title : 'Germany', body:'BMW, AUDI, WW, Skoda, Seat'},
    {title : 'Japan', body:'Toyota, Nissan, Honda'},
    {title : 'France', body:'Peugeot, Citroen, Reno'}
];
let divCar = document.createElement('DIV');
document.body.append(divCar);
let ol = document.createElement('OL');
divCar.append(ol);

arrList.forEach((value,index) => {
    let li = document.createElement('LI');
    let divTitle = document.createElement('DIV');
    let dibBody = document.createElement('DIV');
    divTitle.innerText = `Country: ${value.title}`;
    dibBody.innerText = `Factory: ${value.body}`;
    li.append(divTitle, dibBody);
    ol.append(li);
    let btn = document.createElement('BUTTON');
    btn.className = 'btn';
    btn.innerText = 'Hide Me!';
    li.append(btn);
    btn.addEventListener("click", function (e) {
        divTitle.classList.toggle('textActive');
        dibBody.classList.toggle('textActive');
        li.classList.toggle('transform2');
    });
});
