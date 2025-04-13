import users from "./data.mjs";

// Function untuk melihat semua data
const index = () => {
  users.map((user, index) => {
    console.log(
      `${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`
    );
  });
};

// Function untuk menambah data
const store = (user) => {
  users.push(user); // Menambahkan user baru ke array
  console.log(`Data berhasil ditambahkan: ${JSON.stringify(user)}`);
};

// Function untuk menghapus data terakhir
const destroy = () => {
  const deletedUser = users.pop(); // Menghapus user terakhir dari array
  console.log(`Data yang dihapus: ${JSON.stringify(deletedUser)}`);
};

// Ekspor semua fungsi
export { index, store, destroy };