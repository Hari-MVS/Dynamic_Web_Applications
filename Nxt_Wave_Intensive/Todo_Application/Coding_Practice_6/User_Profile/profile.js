let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let pc = document.getElementById('profileContainer');

let img = document.createElement('img');
img.src = profileDetails['imgSrc'];

let txt = document.createElement('h1');
txt.textContent = profileDetails['name'];
let ag = document.createElement('p');
ag.textContent = 'Age : ' + profileDetails['age'];

let imcon = document.getElementById('imgContainer');

imcon.appendChild(img);
pc.appendChild(txt);
pc.appendChild(ag);
pc.classList.add('text-center', 'd-flex', 'flex-column', 'justify-content-center')
pc.style.fontStyle = 'Roboto';
