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
