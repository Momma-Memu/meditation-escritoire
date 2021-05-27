
document.addEventListener("DOMContentLoaded", async(e) => {
    const homeButton = document.querySelector('.header-home-button');
    if(homeButton){
        homeButton.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
    
});