// 全てのfade-inクラスを取得
let fadeInElements = document.querySelectorAll('.fade-in');

for (let i = 0; i < fadeInElements.length; i++){

    window.addEventListener('scroll', function(){

        const rect = fadeInElements[i].getBoundingClientRect().top;
        const scroll = window.pageYOffset;
        const offset = rect + scroll;
        const windowHeight = window.innerHeight; 

        if(scroll > offset - windowHeight + 150){
          fadeInElements[i].classList.add('scroll-in');
        }
    });
}