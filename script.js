// Data harga
let harga = 3600.00;

// Format rupiah
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}

// Tampilkan harga
document.getElementById("harga").innerText = formatRupiah(harga);

// Event tombol tambah kebun
document.querySelector(".btn").addEventListener("click", function() {
    alert("Fitur Tambah Kebun diklik!");
});

// Event klik menu
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        alert(item.innerText + " diklik!");
    });
});
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}