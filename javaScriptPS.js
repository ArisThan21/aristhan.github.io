function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); 

    if (body.classList.contains('dark-mode')) {
        body.style.color = '#fff';
    } else {
        body.style.color = '#000';
    }
}

