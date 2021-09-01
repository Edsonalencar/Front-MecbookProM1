
// select bar

function active(i){
    const element = document.querySelectorAll('.menu-toggle a')
    console.log(element)

    for(let e = 0; e < element.length; e++){
        element[e].classList.remove('active')
    }

   element[i].classList.add('active')
}

// Nav Bar

function navBar() {
    const navList = document.querySelector('.nav-list');
    const toggleBar = document.querySelector('.menu-toggle') 
    navList.classList.toggle('active')
    toggleBar.classList.toggle('active')
}