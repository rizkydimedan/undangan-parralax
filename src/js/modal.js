 // JavaScript untuk membuka dan menutup modal
 const openModal = document.getElementById('openModal');
 const closeModal = document.getElementById('closeModal');
 const modal = document.getElementById('modal');

 openModal.addEventListener('click', () => {
   modal.classList.remove('invisible'); 
 });

 closeModal.addEventListener('click', () => {
   modal.classList.add('invisible'); // Sembunyikan modal
 });

 // Optional: Tambahkan event untuk menutup modal jika area di luar modal diklik
 modal.addEventListener('click', (event) => {
   if (event.target === modal) {
     modal.classList.add('invisible');
   }
 });