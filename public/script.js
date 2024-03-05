let rightImg = document.getElementById("rImg");
let rightTitle = document.getElementById("rTitle");
let rightBtn = document.getElementById("rBtn");

let leftImg = document.getElementById("lImg");
let leftTitle = document.getElementById("lTitle");
let leftBtn = document.getElementById("lBtn");

let imagesWrap = document.getElementById("images");
let images = document.getElementById("imgContainer");

let choices = [];
let i = 0;

function showChoice() {
	let choice = choices[i];
	let names = Object.keys(choice);
	
	leftTitle.innerText = names[0];
	leftImg.alt = names[0];
	leftImg.src = choice[names[0]].big;
	leftBtn.onclick = () => {
		choose(names[0]);
	}
	
	rightTitle.innerText = names[1];
	rightImg.alt = names[1];
	rightImg.src = choice[names[1]].big;
	rightBtn.onclick = () => {
		choose(names[1]);
	}
}

function choose(name) {
	let img = document.createElement("img");
	img.src = choices[i][name].pos;
	img.alt = name;
	images.appendChild(img);
	nextChoice();
}

function nextChoice() {
	i++;
	if(i < choices.length) showChoice();
	else showImage();
}

function showImage() {
	imagesWrap.classList.add("big");
	images.addEventListener("contextmenu", (event) => {
		event.preventDefault();
		html2canvas(images).then((canvas) => {
			var link = document.createElement('a');
			link.download = 'MyCivilization.png';
			link.href = canvas.toDataURL();
			link.click();
		});
	});
}


let xml = new XMLHttpRequest();
xml.open("get", "/choices.json");
xml.onload = () => {
	choices = JSON.parse(xml.responseText);
	images.innerHTML = "";
	showChoice();
};
xml.send();