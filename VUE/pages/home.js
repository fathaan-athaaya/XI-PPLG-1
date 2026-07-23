import { Component } from '../component/componen.js';
import { Navbar } from '../component/navbar.js';
import { Footer } from '../component/footer.js';

export class Home extends Component {

    render() {
        const navbar = new Navbar({ namaSekolah: `SMK YADIKA SOREANG - Home ` }).render();
        const footer = new Footer().render();
        return ` ${navbar}
        <main>
            <h1>Selamat Datang di Halaman Home</h1>
            <p>Ini adalah halaman home dari website SMK Yadika Soreang.</p>
        </main>
            ${footer}
        `;
    }
}
