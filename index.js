const ul = document.querySelector(".ul");
const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
alert("hi")
btn.addEventListener("click" , () => {
  let li = document.createElement("li");
  li.innerHTML = `${inp.value}`;
  if(inp.value !== ""){
    ul.appendChild(li);
    inp.value = "";
  }else{
    console.log("kys")
  }
  li.addEventListener("dblclick", () => {
    li.style.textDecoration = "line-through";
  });
});
