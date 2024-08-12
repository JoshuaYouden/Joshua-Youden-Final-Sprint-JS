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
