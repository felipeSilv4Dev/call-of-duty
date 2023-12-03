// function initGalery() {
//   const imgP = document.getElementById("img-p");
//   const galery = document.querySelectorAll(".galery-p img");
//   const secun = document.querySelectorAll(".secun img");
//   if (imgP) {
//     imgP.classList.add("active");

//     function active() {
//       secun.forEach((item) => {
//         item.classList.remove("active");
//       });
//       this.classList.add("active");

//       galery.forEach((g) => {
//         if (g.classList.contains("active")) {
//           [g.src, this.src] = [this.src, g.src];
//         }
//       });
//     }

//     secun.forEach((i) => {
//       ["click"].forEach((eventos) => {
//         i.addEventListener(eventos, active);
//       });
//     });
//   }
// }

// initGalery();

// function initMenuMobile() {
//   const btn = document.getElementById("btn");
//   const menuList = document.querySelectorAll("#menu-list");
//   const menu = document.querySelector(".menu");
//   const home = document.querySelector(".home");

//   btn.innerText = "︻╦̵̵͇╤─";

//   if (btn) {
//     function activeMenu(event) {
//       if (event.target.id === "menu" || event.target.id === "home") {
//         menuList.forEach((i) => {
//           if (i.classList.contains("active")) {
//             i.classList.remove("active");
//           }
//         });
//         btn.classList.remove("active");
//       }
//       if (event.target.id == "btn") {
//         btn.classList.toggle("active");
//         menuList.forEach((item) => {
//           item.classList.toggle("active");
//         });
//       }
//       if (btn.classList.contains("active")) btn.innerText = "¤=[]:::::>";
//       else btn.innerText = "︻╦̵̵͇╤─";
//     }
//   }
//   ["click"].forEach((eventos) => {
//     menu.addEventListener(eventos, activeMenu);
//     home.addEventListener(eventos, activeMenu);
//   });
// }
// initMenuMobile();

// function initMarcasBg() {
//   const marcas = document.querySelectorAll(".marcas div ");
//   const img = document.querySelectorAll(".marcas img");
//   const h3 = document.querySelectorAll(".marcas h3");
//   const h3Id = document.querySelector(" #bg-2 h3");
//   const imgIdP = document.querySelector("#bg-2 .img-preta");
//   const imgIdB = document.querySelector("#bg-2 .img-branca");
//   const bgId = document.getElementById("bg-2");

//   h3Id.classList.add("bg-ativo");
//   imgIdP.classList.add("bg-ativo");
//   imgIdB.classList.add("bg-ativo");
//   bgId.classList.add("bg-ativo");
//   if (marcas) {
//     function bgAtivo(event) {
//       marcas.forEach((marca) => {
//         if (marca.classList.contains("bg-ativo")) {
//           marca.classList.remove("bg-ativo");
//         }
//       });
//       img.forEach((imagem) => {
//         if (imagem.classList.contains("bg-ativo")) {
//           imagem.classList.remove("bg-ativo");
//         }
//       });
//       h3.forEach((h) => {
//         if (h.classList.contains("bg-ativo")) {
//           h.classList.remove("bg-ativo");
//         }
//       });

//       event.currentTarget.classList.add("bg-ativo");
//       const id = event.currentTarget.id;
//       img.forEach((imagem) => {
//         if (imagem.id == id) {
//           imagem.classList.add("bg-ativo");
//         }
//       });
//       h3.forEach((h) => {
//         if (h.id == id) {
//           imagem.classList.add("bg-ativo");
//         }
//       });
//     }

//     ["click"].forEach((e) => {
//       marcas.forEach((marca) => {
//         marca.addEventListener(e, bgAtivo);
//       });
//     });
//   }
// }
// initMarcasBg();

// function initHeroesAtivo() {
//   const heroes = document.querySelectorAll(".heroes div");
//   const heroesBg = document.querySelectorAll(".heroes-bg *");

//   heroesBg.forEach((h) => {
//     if (h.id === "h-1") {
//       h.classList.add("ativo");
//     }
//   });
//   if (heroes) {
//     function ativoId(event) {
//       heroesBg.forEach((hBg) => {
//         if (hBg.classList.contains("ativo")) {
//           hBg.classList.remove("ativo");
//         }
//       });
//       event.currentTarget.classList.add("ativo");
//       const id = event.currentTarget.id;
//       heroesBg.forEach((filho) => {
//         if (filho.id === id) {
//           filho.classList.add("ativo");
//         }
//       });
//     }

//     heroes.forEach((div) => {
//       ["click"].forEach((eventos) => {
//         div.addEventListener(eventos, ativoId);
//       });
//     });
//   }
// }
// initHeroesAtivo();

// function initAnimaScroll() {
//   const scroll = document.querySelectorAll(".js-scroll");
//   const windowMetade = innerHeight * 0.75;
//   if (scroll) {
//     function animaScroll() {
//       scroll.forEach((scrolls) => {
//         const scrollsTop = scrolls.getBoundingClientRect().top;
//         const isScrolls = scrollsTop - windowMetade < 0;
//         if (isScrolls) {
//           scrolls.classList.add("animar");
//         }
//       });
//     }

//     animaScroll();

//     window.addEventListener("scroll", animaScroll);
//   }
// }
// initAnimaScroll();
