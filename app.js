let apple = document.querySelector(`nav .apple`)

apple.addEventListener('click', sidebarOpen);

function sidebarOpen() {
   let sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("activeSideBar")
}