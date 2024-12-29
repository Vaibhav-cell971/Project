// JavaScript Part
function closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
    let container = document.getElementById('container');
    container.classList.remove('overlay');
    let container2 = document.getElementById('m-container');
    container2.classList.remove('overlay');
    let table = document.getElementById('table');
    table.classList.remove('overlay');
   
}
   function show(){
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
    let container = document.getElementById('container');
    container.classList.add('overlay');
    let container2 = document.getElementById('m-container');
    container2.classList.add('overlay');
    let table = document.getElementById('table');
    table.classList.add('overlay');
}
document.addEventListener('DOMContentLoaded', function() {
    
    
    // Select all elements with the class 'card-1', 'card', 'table', 'adv', 'dis', and 'btn'
    const elementsToAnimate = document.querySelectorAll('.main-container .card-1, .card, .table, .adv, .dis, .btn');
    
    // Create an intersection observer with a threshold of 0.5
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the fade-in animation
                entry.target.classList.add('visible');
                entry.target.classList.remove('fade-out'); // Ensure fade-out class is removed
            } else {
                // Add the 'fade-out' class to trigger the fade-out animation
                entry.target.classList.remove('visible');
                entry.target.classList.add('fade-out');
            }
        });
    }, {
        threshold: 0.2 
    });

    // Start observing each element
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});