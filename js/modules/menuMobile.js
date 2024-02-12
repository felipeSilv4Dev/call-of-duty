const menuMobile = () => {
  const container = document.getElementById("menuContainer");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  const addActive = ({ currentTarget }) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (currentTarget.id === "menuContainer") {
      menu.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.style.overflow = menu.classList.contains("active")
        ? "hidden"
        : "initial";
    }
  };

  container.addEventListener("pointerdown", addActive);
};

export default menuMobile;
