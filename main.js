class PasswordProfile {
    constructor(title,description,password) {
        this.title = title;
        this.description = description;
        this.password = password;
    }
}

const PasswordProfileTemplate = document.getElementById('password-profile-template');
const PasswordProfileContainer = document.getElementById('password-profile-container');

function addPasswordProfile(passwordProfile) {
    const clone = PasswordProfileTemplate.content   .cloneNode(true);
    
    clone.querySelector('.password-profile-title').textContent = passwordProfile.title;
    clone.querySelector('.password-profile-description').textContent = passwordProfile.description;

    PasswordProfileContainer.appendChild(clone);
}

for(let i=0; i < 1000; i++) addPasswordProfile(new PasswordProfile('Hello!', 'This is a test ' + (i+1)));