const menuMobile = () => {
  const container = document.getElementById("menuContainer");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  const addActive = ({ currentTarget }) => {
    if (currentTarget.id === "menuContainer") {
      menu.classList.toggle("active");
      nav.classList.toggle("active");
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Rolagem suave
      });
      document.body.style.overflowY = menu.classList.contains("active")
        ? "hidden"
        : "initial";
    }
  };

  container.addEventListener("click", addActive);
};

export default menuMobile;
