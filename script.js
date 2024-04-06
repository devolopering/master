const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('ul')
const search = document.querySelector('#search')
const searchBtn = document.querySelector('#search-btn')
const searchInput = document.querySelector('.input_search')



menuBtn.onclick = ()  =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()  =>{
    menuBtn.classList.remove('#menu-btn');
    navbar.classList.remove('active');
    search.classList.remove('#search');
    searchInput.classList.remove('shop');
    searchBtn.classList.remove('#search-btn');
    searchInput.classList.remove('shop');
}
search.onclick = ()  =>{
    search.classList.toggle('#search');
    searchInput.classList.toggle('shop');
}
searchBtn.onclick = ()  =>{
    search.classList.toggle('#search-btn');
    searchInput.classList.toggle('shop');
}