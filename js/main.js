const dropdown = document.getElementById("dropDown");

dropdown.firstElementChild.addEventListener("click",()=>{
  dropdown.classList.toggle("open");
})
window.addEventListener("resize", ()=>{
  dropdown.classList.remove("open");
})

const a = document.querySelectorAll("a");
a.forEach(
  (v)=>{
    v.addEventListener("click", function (e) {
      e.preventDefault();
      alert("遷移先が存在しません");
    });
  }
);

const b = document.querySelectorAll("button");
b.forEach(
  (v)=>{
    v.addEventListener("click", function (e) {
      e.preventDefault();
      alert("遷移先が存在しません");
    });
  }
);