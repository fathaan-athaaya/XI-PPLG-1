import { Home } from './VUE/pages/home.js';
import { About } from './VUE/pages/about.js';
import { Kontak } from './VUE/pages/kontak.js';
import { EkskulPages } from './VUE/pages/EkskulPages.js';

// "Daftar rute": pemetaan dari path ke class Page yang sesuai
export const routes = {
    "/home": Home,
    "/about": About,
    "/kontak": Kontak,
    "/ekskul": EkskulPages,
};
export function router() {
    //Ambil patch saat ini dari hash URL, contoh "#/about" -> "/about"
    let path = window.location.hash.replace("#", "");
    // Kalau path kosong (baru buka website), default arahkan ke "/home"
    if (path === "") {
        path = "/home";
    }
    // Cari class page yang cocok , kalau tidak bertemu, default ke Home
    const PageClass = routes[path] || Home;
    // Buat instance dari class page tersebut, lalu render dan tampilkan di elemen dengan id "app"
    const page = new PageClass();
    document.getElementById("app").innerHTML = page.render();
}