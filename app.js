const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", () => {
 // console.log(sidebar.classList)
 const hasSidebar = sidebar.classList.contains("show-sidebar");
 if(hasSidebar) {
  sidebar.classList.remove("show-sidebar");
 }else {
  sidebar.classList.add("show-sidebar");
 }
 // sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
 sidebar.classList.remove("show-sidebar");
});