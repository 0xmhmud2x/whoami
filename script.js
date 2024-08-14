
function generateStars(numStars) {
    const starContainer = document.querySelector('.stars');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3;
        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;

        starContainer.appendChild(star);
    }
}


function generateMeteors(numMeteors) {
    const meteorContainer = document.querySelector('.meteors');

    for (let i = 0; i < numMeteors; i++) {
        const meteor = document.createElement('div');
        meteor.classList.add('meteor');
        meteor.style.top = `${Math.random() * -100}px`; 
        meteor.style.left = `${Math.random() * 100}vw`;
        meteor.style.animationDuration = `${Math.random() * 2 + 2}s`;

        meteorContainer.appendChild(meteor);
    }
}


function showMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.opacity = 1;
}


generateStars(100);
generateMeteors(5);