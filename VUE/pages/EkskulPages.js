import { Page } from '../component/page.js';

export class EkskulPages extends Page {
    constructor() {
        super({
            namaSekolah: 'SMK YADIKA SOREANG - Ekstrakurikuler',
            activePage: 'ekskul',
        });
    }

    renderContent() {
        return `
        <main>
            <h1>Ekstrakurikuler</h1>
            <p>Berikut beberapa kegiatan ekstrakurikuler di SMK YADIKA SOREANG:</p>
            <ul>
                <li>Basket</li>
                <li>Programming</li>
                <li>Jurnalistik</li>
                <li>Pramuka</li>
                <li>English Club</li>
                <li>Futsal</li>
            </ul>
            <p>Silakan pilih kegiatan ekstrakurikuler yang sesuai dengan minat dan bakat Anda.</p>
            </ul>
        </main>
        `;
    }
}

