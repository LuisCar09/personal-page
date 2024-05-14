
//Hacemos click en el menu, nos muestra y nos oculta la lista en el menu
$('.navbar-menu').on('click',function () {
    // $('.navbar-list--toogle').fadeIn(500,'linear')
    $('.navbar-list--toogle').addClass('moveLeft')
    console.log('click')
})

$('.close-navbar-second').on('click', ()=>{
    // $('.navbar-list--toogle').fadeOut(500,'linear')
    $('.navbar-list--toogle').removeClass('moveLeft')
})