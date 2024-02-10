const menuMobile = () => {
  const container = document.getElementById("menuContainer");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  const addActive = ({ currentTarget }) => {
    if (currentTarget.id === "menuContainer") {
      menu.classList.toggle("active");
      nav.classList.toggle("active");
    }
  };

  container.addEventListener("click", addActive);
};

export default menuMobile;
