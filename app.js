import { router } from './router.js';
 
// Jalankan fungsi router untuk menangani perubahan hash pada URL
window.addEventListener('hashchange', router);
// jAlankan fungsi router saat halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', router);