let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}
// Script untuk menambah dan menghapus kelas .sticky saat scroll
var header = document.querySelector('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    
    var sticky = document.querySelector('.sticky');
    
});

