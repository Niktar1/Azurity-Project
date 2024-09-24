// TABS
// Const for buttons and items
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

// Function hide tabs & remove active class from buttons
function hideTabs() {
   tabsItems.forEach(item => item.classList.add("hide"));
   tabsBtns.forEach(item => item.classList.remove("active"));
};

// Function shows geven tab number and make righ button active
function showTab(index) {
   tabsItems[index].classList.remove("hide");
   tabsBtns[index].classList.add("active")
};

hideTabs();
showTab(0);


tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
   hideTabs();
   showTab(index);
}));

// Anchors
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
   anc.addEventListener("click", function(event) {
      event.preventDefault();
      
      const id = anc.getAttribute("href");
      const element = document.querySelector(id);

      window.scroll({
         top: element.offsetTop - 80,
         behavior: 'smooth'
      });
   })
});
