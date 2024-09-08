class PasswordProfile {
    constructor(title,description,password) {
        this.title = title;
        this.description = description;
        this.password = password;
    }
}

const PASSWD_PROFILE_TEMPLATE = document.getElementById('password-profile-template');
const PASSWD_PROFILE_CONTAINER = document.getElementById('password-profile-container');
const PASSWD_HIDDEN = '●●●●●●●';

function addPasswordProfile(profile) {
    const clone = PASSWD_PROFILE_TEMPLATE.content.cloneNode(true);
    
    clone.querySelector('.password-profile-title').textContent = profile.title;
    clone.querySelector('.password-profile-description').textContent = profile.description;

    const checkbox = clone.querySelector('.password-profile-checkbox');

    const passwd = clone.querySelector('.password-profile-password');
    passwd.textContent = PASSWD_HIDDEN;

    checkbox.addEventListener('click', function(event) {
        event.stopPropagation();
        passwd.textContent = checkbox.checked ? profile.password : PASSWD_HIDDEN;
    });

    const passwd_container = clone.querySelector('.password-profile-password-container');

    passwd_container.addEventListener('click', function() {
        navigator.clipboard.writeText(profile.password);
        alert(`Copied "${profile.password}".`); 
    });

    PASSWD_PROFILE_CONTAINER.appendChild(clone);
}

for(let i=0; i < 10; i++) addPasswordProfile(new PasswordProfile('Hello!', 'This is a test ' + (i+1), 'supersecretpassword1234'));