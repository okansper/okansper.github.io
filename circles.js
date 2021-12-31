$(document).ready(() => {
    make_ring();
});

function make_ring(){
    
let imgs = [
    {src: 'ring_pictures/cake1.jpg', alt: 'image alt text'},
    {src: 'ring_pictures/cake2.jpg', alt: 'image alt text'},
    {src: 'ring_pictures/hadidbooks.jpg', alt: 'image alt text'}
]
let n_imgs = imgs.length;
let has_mid = 1; /* 0 if there's no item in the middle, 1 otherwise */
let m = n_imgs - has_mid; /* how many are ON the circle */
let tan = Math.tan(Math.PI/m); /* tangent of half the base angle */

.container(style=`--m: ${m}; --tan: ${+tan.toFixed(2)}`)
    for(let i = 0; i < n_imgs; i++){
        a(href='#' style=i - has_mid >= 0 ? `--i: ${i}` : null)
        img(src=imgs[i].src alt=imgs[i].alt)
    }
        
    
}

