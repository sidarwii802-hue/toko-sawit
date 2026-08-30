```javascript
/* =====================================================
   MODAL
===================================================== */

function openModal() {

    document
        .getElementById("modal")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

}


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    notification.innerText = message;

    notification.classList.add("show");


    setTimeout(function () {

        notification.classList.remove("show");

    }, 2500);

}


/* =====================================================
   TAMBAH KEBUN
===================================================== */

function addFarm() {

    showNotification(
        "Fitur tambah kebun akan segera dibuka"
    );

}


/* =====================================================
   FITUR
===================================================== */

function showFeature(name) {

    closeModal();

    showNotification(
        "Fitur " + name + " sedang dipersiapkan"
    );

}


/* =====================================================
   RIWAYAT HARGA
===================================================== */

function showHistory() {

    showNotification(
        "Menampilkan riwayat harga sawit"
    );

}


/* =====================================================
   BAGIKAN HARGA
===================================================== */

function sharePrice() {

    const text =
        "Harga TBS Sawit Kota Palangkaraya hari ini Rp 3.500/Kg.";

    if (
        navigator.share
    ) {

        navigator.share({

            title:
                "Harga Sawit Hari Ini",

            text:
                text

        });

    } else {

        navigator.clipboard
            .writeText(text);

        showNotification(
            "Harga berhasil disalin"
        );

    }

}


/* =====================================================
   KLIK DI LUAR MODAL
===================================================== */

document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );
```
