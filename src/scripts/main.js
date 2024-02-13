import "../../node_modules/swiper/swiper-bundle.min.js";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiperClients = new Swiper(".swiper-clients", {
  modules: [Navigation, Pagination],
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      pagination: false,
    },
    370: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
  },
});
