export const changeActiveSectionPosition = (index) => {
  switch (index) {
    case 0:
      window.scrollTo({
        top: document.getElementById("home").offsetTop,
        behavior: "smooth",
      });
      break;
    case 1:
      window.scrollTo({
        top: document.getElementById("about").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    case 2:
      window.scrollTo({
        top: document.getElementById("services").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    case 3:
      window.scrollTo({
        top: document.getElementById("skills").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    case 4:
      window.scrollTo({
        top: document.getElementById("experiences").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    case 5:
      window.scrollTo({
        top: document.getElementById("skills").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    case 6:
      window.scrollTo({
        top: document.getElementById("skills").offsetTop - 52,
        behavior: "smooth",
      });
      break;
    default:
      break;
  }
};
