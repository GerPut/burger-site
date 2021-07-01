let hambtn = document.getElementById('hambtn');


hambtn.addEventListener('click', show);

function show() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('change');

}


