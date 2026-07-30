import { Component } from "./componen.js";

export class Navbar extends Component {
    render() {
        const { namaSekolah, activePage } = this.props;
        const active = (page) => (page === activePage ? 'class="active"' : '');
        return `
        <nav>
            <h2>${namaSekolah || 'SMK YADIKA SOREANG'}</h2>
            <a href="#/home" ${active('home')}>home</a>
            <a href="#/about" ${active('about')}>about</a>
            <a href="#/kontak" ${active('kontak')}>kontak</a>
            <a href="#/ekskul" ${active('ekskul')}>ekskul</a>
        </nav>
        `;
    }
}