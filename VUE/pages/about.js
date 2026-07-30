import { Page } from '../component/page.js';

export class About extends Page {
    constructor() {
        super({
            namaSekolah: 'SMK YADIKA SOREANG - About',
            activePage: 'about',
        });
    }

    renderContent() {
        return `
        <main>
            <h1>Tentang Sekolah</h1>
            <p>SMK YADIKA SOREANG adalah sekolah yang berkomitmen untuk mencetak lulusan yang siap kerja dan berprestasi.</p>
        </main>
        `;
    }
}