// main.js

// Dark / Light Mode Toggle
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Load saved preference
if(localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    if(body.classList.contains('dark')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('mode', 'dark');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('mode', 'light');
    }
});

