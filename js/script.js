function initGalery() {
  const imgP = document.getElementById("img-p");
  const galery = document.querySelectorAll(".galery-p img");
  const secun = document.querySelectorAll(".secun img");
  if (imgP) {
    imgP.classList.add("active");

    function active() {
      secun.forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");

      galery.forEach((g) => {
        if (g.classList.contains("active")) {
          [g.src, this.src] = [this.src, g.src];
        }
      });
    }

    secun.forEach((i) => {
      ["click"].forEach((eventos) => {
        i.addEventListener(eventos, active);
      });
    });
  }
}

initGalery();

function menuMobile() {
  const btn = document.getElementById("btn");
  const menuList = document.querySelectorAll("#menu-list");
  const menu = document.querySelector(".menu");
  const home = document.querySelector(".home");

  btn.innerText = "︻╦̵̵͇╤─";

  if (btn) {
    function activeMenu(event) {
      console.log(event.target.id);
      console.log(event.target);
      if (event.target.id === "menu" || event.target.id === "home") {
        menuList.forEach((i) => {
          if (i.classList.contains("active")) {
            i.classList.remove("active");
          }
        });
        btn.classList.remove("active");
      }
      if (event.target.id == "btn") {
        btn.classList.toggle("active");
        menuList.forEach((item) => {
          item.classList.toggle("active");
        });
      }
      if (btn.classList.contains("active")) btn.innerText = "¤=[]:::::>";
      else btn.innerText = "︻╦̵̵͇╤─";
    }
  }
  menu.addEventListener("click", activeMenu);
  home.addEventListener("click", activeMenu);
}
menuMobile();
