import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

(() => {
    // global variables
    // const tablet = "(min-width: 767px)";
    const overlay = document.getElementById("overlay"),
        headerMenuBtn = document.getElementById("header__menu_btn-mob"),
        headerButtonClose = document.getElementById("header__mobBtn-close"),
        header = document.getElementById("header"),
        headerNav = document.getElementById("header__nav"),
        galleryBtn = document.getElementById("gallery__btn"),
        galleryItems = document.getElementsByClassName("gallery__list_item");

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

            function toggleClass() {
                langList.classList.toggle("active");
                console.log("work");
            }

            langList.addEventListener("touchstart", toggleClass, false);
            langList.addEventListener("touchcancel", toggleClass, false);
        });
    };

    const setGalleryVisible = () => {
        document.addEventListener("DOMContentLoaded", function () {
            let visibleSlides;

            if (window.matchMedia("(min-width: 767px)").matches) {
                visibleSlides = 5;
            }
            if (window.matchMedia("(min-width: 1440px)").matches) {
                visibleSlides = 7;
            }

            for (let i = 0; i <= visibleSlides; i++) {
                galleryItems[i].classList.add("visible");
                console.log(visibleSlides + "visibleSlides");
                console.log(i);
                console.log(galleryItems);
            }
        });
    };

    const showGalleryImages = () => {
        document.addEventListener("DOMContentLoaded", function () {
            function showImages() {
                if (galleryBtn.classList.contains("show")) {
                    for (let i = 4, len = galleryItems.length; i < len; i++) {
                        galleryItems[i].classList.add("visible");
                    }

                    galleryBtn.innerHTML = "Скрыть фото";
                    galleryBtn.classList.remove("show");

                } else {
                    for (let i = 4, len = galleryItems.length; i < len; i++) {
                        galleryItems[i].classList.remove("visible");
                    }
                    galleryBtn.innerHTML = "больше фото";
                    galleryBtn.classList.add("show");
                }
            }

            galleryBtn.addEventListener("click", showImages, false);
            galleryBtn.addEventListener("touchstart", showImages, false);
        });
    };

    const Slider = () => {
        document.addEventListener("DOMContentLoaded", function () {
            /* eslint-disable no-unused-vars */
            const mySwiper = new Swiper(".swiper-container", {
                loop: false,
                speed: 1000,
                grabCursor: true,
                mousewheelControl: true,
                slidesPerView: "auto",
                keyboardControl: true,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    }
                }
            });
            /* eslint-enable no-unused-vars */
        });
    };

    const showMobileMenu = () => {
        document.addEventListener("DOMContentLoaded", function () {
            function toggleMobileMenu() {
                header.classList.toggle("active");
                headerNav.classList.toggle("active");
                headerMenuBtn.classList.toggle("active");
                headerButtonClose.classList.toggle("active");
                overlay.classList.toggle("active");
            }

            headerMenuBtn.addEventListener("click", toggleMobileMenu, false);
            headerButtonClose.addEventListener("click", toggleMobileMenu, false);
            overlay.addEventListener("click", () => {
                if (header.classList.contains("active")) {
                    toggleMobileMenu();
                    overlay.classList.remove("active");
                }
            });
        });
    };

    const initializeSmoothlyScroll = () => {
        document.addEventListener("DOMContentLoaded", function () {
            const headerBtnAboutUs = document.getElementById("header__nav_aboutUs");
            const headerBtnGallery = document.getElementById("header__nav_gallery");
            const headerBtnInfoStats = document.getElementById("header__nav_infoStats");
            const headerBtnReviews = document.getElementById("header__nav_reviews");
            const headerBtnNews = document.getElementById("header__nav_news");
            const headerBtnFaq = document.getElementById("header__nav_faq");
            const headerBtnEvents = document.getElementById("header__nav_events");
            const introButtonScroll = document.getElementById("intro__button-scroll");

            const aboutUs = document.getElementById("aboutUs");
            const gallery = document.getElementById("gallery");
            const infoStats = document.getElementById("infoStats");
            const reviews = document.getElementById("reviews");
            const news = document.getElementById("news");
            const faq = document.getElementById("faq");
            const events = document.getElementById("events");

            // html section of site
            function toAboutUs() {
                aboutUs.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toGallery() {
                gallery.scrollIntoView({ block: "start", behavior: "smooth" });
                
            }

            function toInfoStats() {
                infoStats.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toReviews() {
                reviews.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toNews() {
                news.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toFaq() {
                faq.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function toEvents() {
                events.scrollIntoView({ block: "start", behavior: "smooth" });
            }

            function hideMenuOnMobileResolution() {
                header.classList.remove("active");
                headerNav.classList.remove("active");
                headerMenuBtn.classList.remove("active");
                overlay.classList.remove("active");
            }

            // scroll functions

            headerBtnAboutUs.addEventListener("click", () => {    
                toAboutUs();
                hideMenuOnMobileResolution();    
            });
            headerBtnGallery.addEventListener("click", () => {    
                toGallery();
                hideMenuOnMobileResolution();    
            });
            headerBtnInfoStats.addEventListener("click", () => {    
                toInfoStats();
                hideMenuOnMobileResolution();    
            });
            headerBtnReviews.addEventListener("click", () => {    
                toReviews();
                hideMenuOnMobileResolution();    
            });
            headerBtnNews.addEventListener("click", () => {    
                toNews();
                hideMenuOnMobileResolution();    
            });
            headerBtnFaq.addEventListener("click", () => {    
                toFaq();
                hideMenuOnMobileResolution();    
            });
            headerBtnEvents.addEventListener("click", () => {    
                toEvents();
                hideMenuOnMobileResolution();    
            });

            introButtonScroll.addEventListener("click", () => {    
                toAboutUs();
            });
            
            // adding eventListeners for buttons on click for smooth-scroll effect;
        });
    };

    const faq = () => {
        let faqItem = document.getElementsByClassName("faq__list_item");

        if (typeof (faqItem) != "undefined" && faqItem != null) {
            for (let i = 0; i < faqItem.length; i++) {
                faqItem[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                });
            }
        }
    };

    const multipleSlider = () => {
        document.addEventListener("DOMContentLoaded", function () {
            /* eslint-disable no-unused-vars */
            const mySwiper = new Swiper(".swiper-container-multiple", {
                loop: false,
                speed: 1000,
                grabCursor: true,
                mousewheelControl: true,
                keyboardControl: true,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: true
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 640px
                    767: {
                        slidesPerView: "auto",
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1600: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }
            });
            /* eslint-enable no-unused-vars */
        });
    };

    setGalleryVisible();
    initializeSmoothlyScroll();
    multipleSlider();
    stickyHeader();
    langList();
    showGalleryImages();
    Slider();
    faq();
    showMobileMenu();
})();

