// Menampilkan bagian konten berdasarkan ID
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}

// Menangani pengiriman formulir transaksi
const form = document.getElementById("transaksiForm");
const transaksiList = document.getElementById("transaksiList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const tipe = document.getElementById("tipeSelect").value;
  const jumlah = document.getElementById("jumlah").value;

  // Membuat elemen untuk menampilkan transaksi
  const transaksiItem = document.createElement("div");
  transaksiItem.classList.add("transaction-item");
  transaksiItem.innerHTML = `
        <div class="transaction-card">
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Tipe:</strong> ${tipe}</p>
            <p><strong>Jumlah:</strong> ${jumlah}</p>
        </div>
    `;

  // Menambahkan transaksiItem ke dalam daftar transaksi
  transaksiList.appendChild(transaksiItem);

  // Reset formulir setelah pengiriman
  form.reset();
});
