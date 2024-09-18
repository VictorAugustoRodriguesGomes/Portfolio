const hours = new Date().getHours();
const h1Loading = document.getElementById('h1Loading');
const textLoading = hours >= 5 && hours < 12 ? 'Olá... Bom dia!' :
    hours >= 12 && hours < 18 ? 'Olá... Bom tarde!' :
        'Olá... Bom noite!';
h1Loading.setAttribute('data-text', textLoading);
h1Loading.textContent = textLoading;