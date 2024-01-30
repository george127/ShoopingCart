// ======= Sticky ========
let navBarScroll = document.querySelector(".navbar");
let sticky = navBarScroll.offsetTop;
window.addEventListener("scroll", () => {
if(window.pageYOffset > sticky){
    navBarScroll.classList.add("sticky");
}else{
    navBarScroll.classList.remove("sticky");
}
})
// ======= End Sticky ========

// ======= searchBar ========
const searchList = () => {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const productItems = document.querySelectorAll(".product-item");
    let foundMatch = false;

    productItems.forEach((item) => {
        const brand = item.dataset.category.toUpperCase();
        const shouldDisplay = brand.includes(filter);

        if (shouldDisplay) {
            foundMatch = true;
        }

        item.style.display = shouldDisplay ? "" : "none";
    });

    // Display a message if no matches are found
    const noMatchMessage = document.getElementById("noMatchMessage");

    if (!foundMatch) {
        noMatchMessage.textContent = "No matching products found.";
        noMatchMessage.style.display = "block";
    } else {
        noMatchMessage.style.display = "none";
    }
};

// Attach the function to the input event for real-time filtering
document.getElementById("searchInput").addEventListener("input", searchList);
// ======= End searchBar ========

// ===== drop =====
const dropbtn = document.querySelectorAll(".dropbtn");

dropbtn.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("expanded");
});
});

const dropbtn2 = document.querySelectorAll(".dropbtn2");

dropbtn2.forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
    event.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("expanded");
});
});
// ===== End drop =====

// ========== cart ===========
document.addEventListener("DOMContentLoaded", function () {
    const carbtn = document.getElementById("cart-btn");
    const cartCancel = document.getElementById("cart-cancel");
    const cart = document.getElementById("cart");
    let isOpen = false;

    function open() {
        cart.style.top = "0";
        cart.style.opacity = "1";
        cart.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        cart.style.top = "-100%";
        cart.style.opacity = "0";
        cart.style.visibility = "hidden";
        isOpen = false;
    }

    carbtn.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    cartCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End cart ===========


// ========== Search ===========
document.addEventListener("DOMContentLoaded", function () {
    const seacrchbtn = document.getElementById("search-btn");
    const searchCancel = document.getElementById("search-cancel");
    const search = document.getElementById("search");
    let isOpen = false;

    function open() {
        search.style.top = "0";
        search.style.opacity = "1";
        search.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        search.style.top = "-100%";
        search.style.opacity = "0";
        search.style.visibility = "hidden";
        isOpen = false;
    }

    seacrchbtn.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    searchCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End Search ===========

// ========== product One ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtn = document.getElementById("product-btn");
    const productCancel = document.getElementById("product-cancel");
    const productOne = document.getElementById("product-One");
    let isOpen = false;

    function open() {
        productOne.style.top = "0";
        productOne.style.opacity = "1";
        productOne.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productOne.style.top = "-100%";
        productOne.style.opacity = "0";
        productOne.style.visibility = "hidden";
        isOpen = false;
    }

    productBtn.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product One ===========

// ========== product Two ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtnTwo = document.getElementById("product-btnTwo");
    const productCancel = document.getElementById("product-cancelTwo");
    const productTwo = document.getElementById("product-Two");
    let isOpen = false;

    function open() {
        productTwo.style.top = "0";
        productTwo.style.opacity = "1";
        productTwo.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productTwo.style.top = "-100%";
        productTwo.style.opacity = "0";
        productTwo.style.visibility = "hidden";
        isOpen = false;
    }

    productBtnTwo.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product Two ===========

// ========== product Three ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtnThree = document.getElementById("product-btnThree");
    const productCancel = document.getElementById("product-cancelThree");
    const productThree = document.getElementById("product-Three");
    let isOpen = false;

    function open() {
        productThree.style.top = "0";
        productThree.style.opacity = "1";
        productThree.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productThree.style.top = "-100%";
        productThree.style.opacity = "0";
        productThree.style.visibility = "hidden";
        isOpen = false;
    }

    productBtnThree.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product Three ===========

// ========== product Four ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtnFour = document.getElementById("product-btnFour");
    const productCancel = document.getElementById("product-cancelFour");
    const productFour = document.getElementById("product-Four");
    let isOpen = false;

    function open() {
        productFour.style.top = "0";
        productFour.style.opacity = "1";
        productFour.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productFour.style.top = "-100%";
        productFour.style.opacity = "0";
        productFour.style.visibility = "hidden";
        isOpen = false;
    }

    productBtnFour.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product Four ===========

// ========== product Five ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtnFive = document.getElementById("product-btnFive");
    const productCancel = document.getElementById("product-cancelFive");
    const productFive = document.getElementById("product-Five");
    let isOpen = false;

    function open() {
        productFive.style.top = "0";
        productFive.style.opacity = "1";
        productFive.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productFive.style.top = "-100%";
        productFive.style.opacity = "0";
        productFive.style.visibility = "hidden";
        isOpen = false;
    }

    productBtnFive.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product Five ===========

// ========== product Five ===========
document.addEventListener("DOMContentLoaded", function () {
    const productBtnSix = document.getElementById("product-btnSix");
    const productCancel = document.getElementById("product-cancelSix");
    const productSix = document.getElementById("product-Six");
    let isOpen = false;

    function open() {
        productSix.style.top = "0";
        productSix.style.opacity = "1";
        productSix.style.visibility = "visible";
        isOpen = true;
    }

    function close() {
        productSix.style.top = "-100%";
        productSix.style.opacity = "0";
        productSix.style.visibility = "hidden";
        isOpen = false;
    }

    productBtnSix.addEventListener("click", function () {
        if (!isOpen) {
            open();
        }
    });

    productCancel.addEventListener("click", function () {
        if (isOpen) {
            close();
        }
    });
});
// ========== End product Six ===========

