import { Component } from './componen.js';
import { Navbar } from './navbar.js';
import { Footer } from './footer.js';

export class Page extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    const navbar = new Navbar({
      namaSekolah: this.props.namaSekolah,
      activePage: this.props.activePage,
    }).render();
    const footer = new Footer().render();
    return `${navbar}${this.renderContent()}${footer}`;
  }
 
  renderContent() {
    throw new Error("Method renderContent() harus diimplementasikan oleh halaman turunannya!");
  }
}