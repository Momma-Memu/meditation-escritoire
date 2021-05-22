
document.addEventListener("DOMContentLoaded", async(e) => {

    const homeButton = document.querySelector('.header-home-button');
    console.log('goodbye moon')
    if(homeButton){
        homeButton.addEventListener('click', () => {
            window.location.replace('/')
        });
    }
    
});