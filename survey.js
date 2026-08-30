/* =====================================================
   DATA AWAL
===================================================== */

let dataSurvey = [
    {
        nama: "PT Sawit Makmur",
        lokasi: "Palangkaraya",
        harga: 3500,
        waktu: "Hari ini, 09:30"
    },

    {
        nama: "CV Tani Sejahtera",
        lokasi: "Katingan",
        harga: 3400,
        waktu: "Hari ini, 08:45"
    },

    {
        nama: "UD Berkah Sawit",
        lokasi: "Pulang Pisau",
        harga: 3300,
        waktu: "Kemarin, 15:20"
    },

    {
        nama: "Koperasi Tani Bersama",
        lokasi: "Kapuas",
        harga: 3200,
        waktu: "Kemarin, 13:10"
    }
];


/* =====================================================
   BUKA FORM
===================================================== */

function openForm() {

    document
        .getElementById("formModal")
        .classList.add("show");

}


/* =====================================================
   TUTUP FORM
===================================================== */

function closeForm() {

    document
        .getElementById("formModal")
        .classList.remove("show");

}


/* =====================================================
   TAMBAH SURVEY
===================================================== */

function addSurvey(event) {

    event.preventDefault();


    const nama =
        document.getElementById("namaPembeli").value;

    const lokasi =
        document.getElementById("lokasi").value;

    const harga =
        parseInt(
            document.getElementById("hargaInput").value
        );


    const waktu = "Baru saja";


    const data = {
        nama: nama,
        lokasi: lokasi,
        harga: harga,
        waktu: waktu
    };


    dataSurvey.unshift(data);


    renderSurvey();

    updateStatistics();


    document
        .getElementById("surveyForm")
        .reset();


    closeForm();

}


/* =====================================================
   TAMPILKAN DATA
===================================================== */

function renderSurvey() {

    const list =
        document.getElementById("surveyList");


    list.innerHTML = "";


    dataSurvey.forEach(function(data) {

        let status = "normal";

        let statusText = "Normal";

        let icon = "fa-minus";


        if (data.harga >= 3500) {

            status = "up";

            statusText = "Tinggi";

            icon = "fa-arrow-up";

        }

        else if (data.harga <= 3200) {

            status = "down";

            statusText = "Rendah";

            icon = "fa-arrow-down";

        }


        const card =
            document.createElement("div");


        card.className = "survey-card";


        card.setAttribute(
            "data-name",
            data.nama
        );


        card.setAttribute(
            "data-location",
            data.lokasi
        );


        card.innerHTML = `

            <div class="company-icon green">

                <i class="fa-solid fa-industry"></i>

            </div>


            <div class="survey-info">

                <strong>
                    ${data.nama}
                </strong>

                <span>

                    <i class="fa-solid fa-location-dot"></i>

                    ${data.lokasi}

                </span>

                <small>
                    ${data.waktu}
                </small>

            </div>


            <div class="survey-price">

                <strong>
                    Rp ${formatRupiah(data.harga)}
                </strong>

                <span>
                    / Kg
                </span>

                <b class="${status}">

                    <i class="fa-solid ${icon}"></i>

                    ${statusText}

                </b>

            </div>

        `;


        list.appendChild(card);

    });


    document.getElementById("jumlahData").innerText =
        dataSurvey.length + " data ditemukan";

}


/* =====================================================
   FORMAT RUPIAH
===================================================== */

function formatRupiah(angka) {

    return angka
        .toString()
        .replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
        );

}


/* =====================================================
   STATISTIK
===================================================== */

function updateStatistics() {

    if (dataSurvey.length === 0) {
        return;
    }


    const harga =
        dataSurvey.map(
            item => item.harga
        );


    const tertinggi =
        Math.max(...harga);


    const terendah =
        Math.min(...harga);


    const rata =
        Math.round(
            harga.reduce(
                (a, b) => a + b,
                0
            ) / harga.length
        );


    document.getElementById(
        "hargaTertinggi"
    ).innerText =
        "Rp " + formatRupiah(tertinggi);


    document.getElementById(
        "hargaTerendah"
    ).innerText =
        "Rp " + formatRupiah(terendah);


    document.getElementById(
        "hargaRata"
    ).innerText =
        "Rp " + formatRupiah(rata);

}


/* =====================================================
   PENCARIAN
===================================================== */

function searchSurvey() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const cards =
        document.querySelectorAll(
            ".survey-card"
        );


    let jumlah = 0;


    cards.forEach(function(card) {

        const nama =
            card.dataset.name.toLowerCase();

        const lokasi =
            card.dataset.location.toLowerCase();


        if (
            nama.includes(keyword) ||
            lokasi.includes(keyword)
        ) {

            card.style.display = "flex";

            jumlah++;

        }

        else {

            card.style.display = "none";

        }

    });


    document.getElementById("jumlahData").innerText =
        jumlah + " data ditemukan";

}


/* =====================================================
   RESET
===================================================== */

function resetData() {

    dataSurvey = [
        {
            nama: "PT Sawit Makmur",
            lokasi: "Palangkaraya",
            harga: 3500,
            waktu: "Hari ini, 09:30"
        },

        {
            nama: "CV Tani Sejahtera",
            lokasi: "Katingan",
            harga: 3400,
            waktu: "Hari ini, 08:45"
        },

        {
            nama: "UD Berkah Sawit",
            lokasi: "Pulang Pisau",
            harga: 3300,
            waktu: "Kemarin, 15:20"
        },

        {
            nama: "Koperasi Tani Bersama",
            lokasi: "Kapuas",
            harga: 3200,
            waktu: "Kemarin, 13:10"
        }
    ];


    renderSurvey();

    updateStatistics();


    document.getElementById(
        "searchInput"
    ).value = "";

}


/* =====================================================
   TUTUP MODAL KLIK LUAR
===================================================== */

document
    .getElementById("formModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeForm();

            }

        }
    );


/* =====================================================
   JALANKAN SAAT HALAMAN DIBUKA
===================================================== */

updateStatistics();