/* ==================================================
   DATA KERANJANG
================================================== */

let cart = [];


/* ==================================================
   TAMBAH PRODUK KE KERANJANG
================================================== */

function addCart(productName, price) {

    let product =
        cart.find(
            item => item.name === productName
        );


    if (product) {

        product.quantity++;

    } else {

        cart.push({

            name: productName,

            price: price,

            quantity: 1

        });

    }


    updateCart();


    showNotification(
        productName +
        " ditambahkan ke keranjang"
    );

}


/* ==================================================
   UPDATE KERANJANG
================================================== */

function updateCart() {

    let totalQuantity = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalQuantity +=
            item.quantity;


        totalPrice +=
            item.price *
            item.quantity;

    });


    /* JUMLAH PRODUK */

    document
        .getElementById("cartCount")
        .innerText =
        totalQuantity;


    /* TOTAL HARGA */

    document
        .getElementById("cartTotal")
        .innerText =
        formatRupiah(totalPrice);


    /* ISI KERANJANG */

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    /* KERANJANG KOSONG */

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>
                    🛒
                </div>

                <p>
                    Keranjang masih kosong
                </p>

                <small>
                    Tambahkan produk untuk
                    mulai berbelanja
                </small>

            </div>

        `;

        return;
    }


    /* TAMPILKAN PRODUK */

    cartItems.innerHTML = "";


    cart.forEach(
        (item, index) => {

            cartItems.innerHTML += `

                <div class="cart-item">

                    <div class="cart-product-icon">
                        🌴
                    </div>


                    <div class="cart-product-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <strong>
                            ${formatRupiah(item.price)}
                        </strong>


                        <div class="quantity">

                            <button
                                onclick="decreaseQuantity(${index})"
                            >
                                −
                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                onclick="increaseQuantity(${index})"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="delete-btn"
                        onclick="removeCart(${index})"
                    >
                        🗑️
                    </button>

                </div>

            `;

        }
    );

}


/* ==================================================
   TAMBAH JUMLAH
================================================== */

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();

}


/* ==================================================
   KURANGI JUMLAH
================================================== */

function decreaseQuantity(index) {

    if (
        cart[index].quantity > 1
    ) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();

}


/* ==================================================
   HAPUS PRODUK
================================================== */

function removeCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ==================================================
   BUKA KERANJANG
================================================== */

function openCart() {

    document
        .getElementById("cartModal")
        .classList.add("show");

}


/* ==================================================
   TUTUP KERANJANG
================================================== */

function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("show");

}


/* ==================================================
   FORMAT RUPIAH
================================================== */

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",

            currency: "IDR",

            minimumFractionDigits: 0
        }
    ).format(number);

}


/* ==================================================
   SEARCH PRODUK
================================================== */

function searchProduct() {

    const input =
        document
            .getElementById(
                "searchInput"
            )
            .value
            .toLowerCase();


    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(
        product => {

            const name =
                product
                    .dataset
                    .name
                    .toLowerCase();


            if (
                name.includes(input)
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        }
    );

}


/* ==================================================
   FILTER KATEGORI
================================================== */

function filterProduct(category) {

    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(
        product => {

            if (
                product.dataset.category
                === category
            ) {

                product.style.display =
                    "block";

            } else {

                product.style.display =
                    "none";

            }

        }
    );


    /* Kosongkan pencarian */

    document
        .getElementById(
            "searchInput"
        )
        .value = "";

}


/* ==================================================
   TAMPILKAN SEMUA PRODUK
================================================== */

function showAll() {

    const products =
        document.querySelectorAll(
            ".product-card"
        );


    products.forEach(
        product => {

            product.style.display =
                "block";

        }
    );


    document
        .getElementById(
            "searchInput"
        )
        .value = "";

}


/* ==================================================
   PROMO
================================================== */

function showPromo() {

    showNotification(
        "🎉 Promo diskon hingga 30% tersedia!"
    );

}


/* ==================================================
   CHECKOUT
================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Keranjang masih kosong!"
        );

        return;
    }


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;

    });


    alert(
        "Pesanan siap diproses.\n\n" +
        "Total Belanja: " +
        formatRupiah(total)
    );

}


/* ==================================================
   NOTIFIKASI
================================================== */

function showNotification(message) {

    const notification =
        document.getElementById(
            "notification"
        );


    notification.innerText =
        message;


    notification.classList.add(
        "show"
    );


    setTimeout(
        function() {

            notification.classList.remove(
                "show"
            );

        },
        2000
    );

}


/* ==================================================
   KEMBALI
================================================== */

function kembali() {

    window.history.back();

}


/* ==================================================
   KLIK DI LUAR KERANJANG
================================================== */

document
    .getElementById("cartModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {

                closeCart();

            }

        }
    );


/* ==================================================
   LOAD AWAL
================================================== */

updateCart();