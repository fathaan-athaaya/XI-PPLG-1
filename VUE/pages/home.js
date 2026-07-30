import { Page } from '../component/page.js';

export class Home extends Page {
    constructor() {
        super({
            namaSekolah: 'SMK YADIKA SOREANG - Home',
            activePage: 'home',
        });
    }

    renderContent() {
        return `
        <main>
            <h1>Selamat Datang di Halaman Home</h1>
            <p>Ini adalah halaman home dari website SMK Yadika Soreang.</p>
        </main>
        `;
    }
}
