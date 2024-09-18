const copyEmail = document.getElementById('copyEmail');

copyEmail.addEventListener('click', (event) => {
    navigator.clipboard.writeText('victor.augusto.desenvolvedor@gmail.com');
    copyEmail.textContent = ' Email Copiado! ';

    setTimeout(function () {
        copyEmail.textContent = " Copiar email ";
        const createIcone = document.createElement('i');
        createIcone.classList.add('bx');
        createIcone.classList.add('bx-mail-send');
        copyEmail.appendChild(createIcone);
    }, 1500);

});