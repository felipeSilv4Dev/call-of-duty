const menuMobile = () => {
  const buttonEl = document.querySelector(".mobile__button");
  const overlayEl = document.querySelector(".overlay");
  const body = document.querySelector("body");
  let observe = false;

  const handleClick = ({ target }) => {
    observe = !observe;

    if (
      target.classList.contains("mobile__button") ||
      target.classList.contains("overlay")
    ) {
      observe
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "initial");
      buttonEl.classList.toggle("active");
      overlayEl.classList.toggle("active");
    }
  };

  buttonEl.addEventListener("click", handleClick);
  overlayEl.addEventListener("click", handleClick);
};

export default menuMobile;
