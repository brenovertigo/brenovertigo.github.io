const dropdownMenus = document.querySelectorAll("[data-dropdown]");

dropdownMenus.forEach((menu) => {
  menu.addEventListener("touchstart", handleClick);
  menu.addEventListener("click", handleClick);
});

function handleClick(event) {
  event.preventDefault();
  this.classlist.toggle("active");
}
