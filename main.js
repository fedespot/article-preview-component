let buttonClick = document.querySelector('.button');
let socialIcons = document.querySelector('.social-icons');

buttonClick.addEventListener('click', function(){
    if(socialIcons.classList.contains('show')){
        socialIcons.classList.remove('show');
    }else{
    socialIcons.classList.add('show');}
})




