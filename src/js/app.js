document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenu.addEventListener('click', navegcionResponsive);
}

function navegcionResponsive (){
    const navegacion = document.querySelector('.navegacion');
    navegacion.classList.toggle('mostrar');
    // if(navegacion.classList.contains('mostrar')){
     
    //     navegacion.classList.remove('mostrar');
    
    // }else{
    //     navegacion.classList.add('mostrar');
    // }

}