'use strict';

const sun = document.querySelector('#sun');
const earth = document.querySelector('#earth');

const sunX = 700;
const sunY = 300;

const px = (n) => n + 'px';
const rad = (deg, speed) => deg * speed / 180;



sun.style.top = px(sunY);
sun.style.left = px(sunX);


function setPlanet(id, speed, radius){
    const planet = document.querySelector('#' + id);
    let deg = 0;
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed));
        const y = sunY + radius * Math.sin(rad(deg, speed));
        planet.style.top = px(y);
        planet.style.left = px(x);
        deg--;   
    }, 10);
}

function setSatallite(id, planetId, speed, radius){
    let deg = 0;
    
    const satallite = document.querySelector('#' + id);
    const planet = document.querySelector('#' + planetId);
    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0, -2));
        const planetY = Number(planet.style.top.slice(0, -2));
        const x = planetX + radius * Math.cos(rad(deg, speed));
        const y = planetY + radius * Math.sin(rad(deg, speed));
        satallite.style.top = px(y);
        satallite.style.left = px(x);
        deg--;   
    }, 10);
}


setPlanet('earth', 5, 100);
setSatallite('moon', 'earth', 10, 50)

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

for (let i = 0; i < 500; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const x = Math.round(Math.random() * screenWidth);
    const y = Math.round(Math.random() * screenHeight);
    const size = Math.floor(1 + Math.random() * 5);
    const delay = Math.round(Math.random() * 100) / 100;
    star.style.width = px(size);
    star.style.height = px(size);
    star.style.top = px(y);
    star.style.left = px(x);
    star.style.animationDelay = delay + 's  ';
    document.body.append(star)

}