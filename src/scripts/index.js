
const gitHubUser = 'LuisCar09'
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


const getProjects = async () => {
    const response = await fetch(`https://api.github.com/users/${gitHubUser}/repos`)
    const data = await response.json()
    console.log(data);
    
    // const deployedRepositories = data.map(dat => console.log(dat.homepage))
    // console.log(deployedRepositories);
    

}


window.addEventListener('load',getProjects)