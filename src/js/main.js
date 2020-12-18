import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

(() => {
    const header = document.getElementById("header");

    const stickyHeader = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const body = document.body;

            let lastScroll = 0;
            let sticky = header.offsetTop;

            function checkHeaderPosition() {
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }

            window.addEventListener("scroll", () => {
                const currentScroll = window.pageYOffset;

                if (currentScroll == 0 || currentScroll < 0) {
                    body.classList.remove("scroll-up");
                    body.classList.add("default-state");
                    return;
                }
                if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                    // down
                    body.classList.remove("scroll-up");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-down");
                } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                    // up
                    body.classList.remove("scroll-down");
                    body.classList.remove("default-state");
                    body.classList.add("scroll-up");
                }
                lastScroll = currentScroll;
            });

            window.onscroll = () => {
                checkHeaderPosition();
            };
        });
    };

    const langList = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const langList = document.getElementById("header__langListWrap");
            
            function toggleClass(){
                langList.classList.toggle("active");
                console.log("work");
            }

            langList.addEventListener("touchstart", toggleClass, false);
            langList.addEventListener("touchcancel", toggleClass, false);
        });
    };

    const showGalleryImages = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const galleryBtn = document.getElementById("gallery__btn");
            const galleryItems = document.getElementsByClassName("gallery__list_item");

            function showImages(){
                for (let i = 0, len = galleryItems.length; i < len; i++){
                    galleryItems[i].classList.add("visible");
                }
            }

            galleryBtn.addEventListener("click", showImages, false);
            galleryBtn.addEventListener("touchstart", showImages, false);
        });
    };

    stickyHeader();
    langList();
    showGalleryImages();
})();

