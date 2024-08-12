// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Shuffle Skills
const shuffleSkillsBtn = document.getElementById('shuffle-skills');
shuffleSkillsBtn.addEventListener('click', () => {
    const skillsList = document.getElementById('skills-list');
    for (let i = skillsList.children.length; i >= 0; i--) {
        skillsList.appendChild(skillsList.children[Math.random() * i | 0]);
    }
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});