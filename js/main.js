async function getRandomArticle() {
    const title = document.querySelector('.main_wrapper-title')
    const text = document.querySelector('.main_wrapper-text')

    title.innerHTML = "Завантаження";
    text.innerHTML = '';
    maxLength = 400

    try {
        const res = await fetch("https://uk.wikipedia.org/api/rest_v1/page/random/summary");
        const data = await res.json();

        title.innerHTML = data.title
        text.innerHTML = data.extract

        if(text.innerHTML.length > maxLength) {
            text.innerHTML = text.innerHTML.slice(0 , maxLength) + '...'
        }
    } catch (error) {
        title.innerHTML = 'Виникла помилка, спробуйте ще раз'
        console.log(error);
    }
}


const button = document.querySelector('.main_button')

button.addEventListener('click', () => {
    getRandomArticle()
})