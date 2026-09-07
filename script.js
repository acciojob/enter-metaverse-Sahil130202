//your JS code here. If required.
let fun = document.getElementById("status");
let but = document.getElementById("enterBtn");

but.addEventListener("click", function() {
    let h1 = document.createElement("h1");
    h1.innerText = "Entered Metaverse";

    fun.innerHTML = "";
    fun.appendChild(h1);
});