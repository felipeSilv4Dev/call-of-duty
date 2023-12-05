const menuMobile = () => {
  const buttonEl = document.querySelector(".mobile__button");
  const overlayEl = document.querySelector(".overlay");

  const handleClick = ({ target }) => {
    if (
      target.classList.contains("mobile__button") ||
      target.classList.contains("overlay")
    ) {
      buttonEl.classList.toggle("active");
      overlayEl.classList.toggle("active");
      buttonEl.classList.contains("active")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "initial");
    }
  };

  buttonEl.addEventListener("click", handleClick);
  overlayEl.addEventListener("click", handleClick);
};

export default menuMobile;
