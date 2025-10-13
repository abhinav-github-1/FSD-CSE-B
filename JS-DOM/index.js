const image=document.createElement("img");
image.src="https://i.pinimg.com/1200x/35/84/bc/3584bc3d895ab842b4d1333651f810ae.jpg";
image.width="150";
image.height="150";
const h4=document.createElement("h4");
h4.innerText="Price:125/-"
const child=document.createElement("div");
child.className="card";
child.appendChild(image);
child.appendChild(h4);
const parent=document.getElementById("root");
parent.appendChild(child);