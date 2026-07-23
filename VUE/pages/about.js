import { Component } from '../component/componen.js';
import { Navbar } from '../component/navbar.js';
import { Footer } from '../component/footer.js';

export class About extends Component {
    render() {
        const navbar = new Navbar({ namaSekolah: 'SMK YADIKA SOREANG - About' }).render();
        const footer = new Footer().render();

        return `
            ${navbar}
            <main>
                <h1>Tentang Kami</h1>
                <p>SMK YADIKA SOREANG adalah sekolah yang berkomitmen untuk mencetak lulusan yang siap kerja dan berprestasi.</p>
            </main>
            ${footer}
        `;
    }
}