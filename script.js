const btn = document.getElementById('next');
const secondText = document.getElementById('text2');

btn.addEventListener('click', () => {
    secondText.classList.toggle('seen')
})
