let sections = [...document.querySelectorAll('.view-section')]
 
export function hide(){
    sections.forEach(element => {
        element.style.display = 'none'
    });
}

export function showSection(sec){
    hide()
    sec.style.display= 'block'
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));
    const msgContaier = document.getElementById('welcome-msg');
    if (user) {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        msgContaier.textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block');
        msgContaier.textContent = '';
    }
}
