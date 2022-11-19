let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};

let titleele = document.getElementById('main-title');
titleele.textContent = recipeObj.title;


let imgel = document.getElementById("img");
imgel.setAttribute("src", recipeObj.imgSrc);


let ulpr = document.getElementById('ulpr');
for (let i of recipeObj.ingredients) {
    let lisle = document.createElement('li');
    lisle.textContent = i;
    lisle.style.color = 'white';
    ulpr.appendChild(lisle);
}
