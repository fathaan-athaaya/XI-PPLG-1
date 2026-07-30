import { Page } from '../component/page.js';

export class Kontak extends Page {
    constructor() {
        super({
            namaSekolah: 'SMK YADIKA SOREANG - Kontak',
            activePage: 'kontak',
        });
    }

    renderContent() {
        return `
        <main>
            <h1>Kontak Kami</h1>
            <p>Hubungi kami melalui email atau nomor telepon yang tersedia di sekolah.</p>
        </main>
        `;
    }
}