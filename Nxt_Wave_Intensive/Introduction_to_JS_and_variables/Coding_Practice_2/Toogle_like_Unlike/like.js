let puppy = document.getElementById('puppyImage');
let like = document.getElementById('likeIcon');
let lkbt = document.getElementById('likeButton');
let image = false;


function onClickLikeButton() {
    if (image === false) {
        puppy.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png';
        like.style.color = '#0967d2';
        lkbt.style.backgroundColor = '#0967d2';
        lkbt.style.color = '#ffffff';
        image = true;
    } else if (image === true) {
        puppy.src = 'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png';
        like.style.color = '#cbd2d9';
        lkbt.style.backgroundColor = '#cbd2d9';
        lkbt.style.color = '#9aa5b1';
        image = false;
    }
}
