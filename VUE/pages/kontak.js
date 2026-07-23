import { Component } from '../component/componen.js';
import { Navbar } from '../component/navbar.js';
import { Footer } from '../component/footer.js';

export class Kontak extends Component {
    render() {
        const navbar = new Navbar({ namaSekolah: 'SMK YADIKA SOREANG - Kontak' }).render();
        const footer = new Footer().render();

        return `
            ${navbar}
            <main>
                <h1>Kontak</h1>
                <p>Hubungi kami melalui email atau nomor telepon yang tersedia di sekolah.</p>
            </main>
            ${footer}
        `;
    }
}