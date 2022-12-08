const dropdown = document.getElementById("dropDown");

dropdown.firstElementChild.addEventListener("click",()=>{
  dropdown.classList.toggle("open");
})
window.addEventListener("resize", ()=>{
  dropdown.classList.remove("open");
})