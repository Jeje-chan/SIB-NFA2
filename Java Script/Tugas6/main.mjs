import { index, store, destroy } from './controller.mjs';
import users from './data.mjs';

const main = () => {
  console.log('Data Sebelum Menambah:');
  index();

  console.log('Menambahkan Data Baru...');
  const newUser1 = { nama: 'Data 11', umur: 23, alamat: 'Bali', email: 'data11@example.com' };
  const newUser2 = { nama: 'Data 12', umur: 24, alamat: 'Medan', email: 'data12@example.com' };
  store(newUser1);
  store(newUser2);

  console.log('Data Setelah Menambah:');
  index();

  console.log('Menghapus Data Terakhir...');
  destroy();
  
  console.log('Data Setelah Menghapus:');
  index();
};

main();