// صفحه زیر را طراحی کنید . Ex5
// خود ست کنید img آنها را روی تگ های dom عکس ها ساخته و توسط url در فایل جاوا اسکریپت خود آرایه ای از

let imgUrls = [
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
  "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
];


function addImg(image){
  let a = document.querySelectorAll("img");
  a.forEach(function(item , i){
    item.src = image[i];
  });
}
addImg(imgUrls);

