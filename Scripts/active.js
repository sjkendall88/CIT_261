// This changes the active tag to the current page
var urlString, urlArray, pageHREF, menu, i, currentURL;
urlString = document.location.href;
urlArray = urlString.split('/');
pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
    menu = document.querySelectorAll('ul#menuNav li a');
    console.log(menu);
    for (i = 0; i < menu.length; i++) {
        currentURL = (menu[i].getAttribute('href'));
        menu[i].className = '';
        if (currentURL === pageHREF) {
            menu[i].className = 'active';
        }
    }
}
