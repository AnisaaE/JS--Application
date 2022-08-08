import { homePage } from './home.js'
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { createPage } from './create.js';
import { updateNav } from './util.js';


document.querySelector('nav').addEventListener('click', onNavigate)

const path = {
    '/': homePage,
    '/logout': logout,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage
}

function onNavigate(e){
    if(e.target.tagName=='A' && e.target.href){
        e.preventDefault()

        const url = new URL(e.target.href)
        const view = path[url.pathname]
 
      if(typeof view == 'function'){
        view()
      }
    }
}

function logout(){
  localStorage.removeItem('user');
  updateNav();
}

updateNav()
homePage()