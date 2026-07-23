import { Home } from './VUE/pages/home.js';
import { About } from './VUE/pages/about.js';
import { Kontak } from './VUE/pages/kontak.js';

const app = document.getElementById('app');

function renderPage() {
    const route = location.hash.replace('#/', '') || 'home';
    const pages = {
        home: new Home().render(),
        about: new About().render(),
        kontak: new Kontak().render()
    };

    app.innerHTML = pages[route] || pages.home;
}

window.addEventListener('hashchange', renderPage);
renderPage();