// local reviews datae 
const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Designer',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus soluta cupiditate ipsa, repudiandae facere eaqu molestiae suscipit officiis tempora assumenda",
        img : 'https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918725861-FCQ8H3QLPMBJBMRBKHJ2/Smilingarmfoldedheadshot.jpg?format=750w',
    },
    {
        id: 2,
        name: 'Sara Dane',
        job: 'Software Engineer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta cupiditate ipsa, repudiandae facere eaque molestiae suscipit officiis tempora assumenda',
        img: 'https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918528805-4BMFEWNUBTAI3340LE2L/NAB+Fun-4.jpg?format=300w'

    },
    {
        id: 3,
        name: 'John Doe',
        job: 'Web Developer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta cupiditate ipsa, repudiandae facere eaque molestiae suscipit officiis tempora assumenda',
        img: 'https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918881830-ZKRPVVI95QIFERFO72UL/Dae-3.jpg?format=750w'
    },
    {
        id: 4,
        name: 'Henry Joe',
        job: 'Web Developer',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta cupiditate ipsa, repudiandae facere eaque molestiae suscipit officiis tempora assumenda',
        img: 'https://images.squarespace-cdn.com/content/v1/5c5a48b7809d8e364b16c2bf/1614918808292-YGT6VQPEAF6EO8I4MVVF/Majintha-4.jpg?format=750w'
    },
]
// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson();
})

// show person based on item

function showPerson() {
    const item = reviews[currentItem]
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    img.src = item.img
}

// show text person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})

// show prev person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

// show random person
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
    console.log(currentItem)
})