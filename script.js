// Menu Active State

let menu = document.getElementsByClassName("menu-header");

function changeMenu() {
    event.target.style.backgroundColor = "#ffffff8c";
    event.target.style.borderRadius = "20px";
    event.target.style.paddingTop = "10px";
    event.target.style.paddingBottom = "10px";
};

function changeMenuBack() {
    event.target.style.backgroundColor = "";
    event.target.style.borderRadius = "";
};

function assign1(element) {
    element.onmouseover = changeMenu;
    element.onmouseout = changeMenuBack;
};

for (let i = 0; i<menu.length ; i++) {
    assign1(menu[i])
};

// Footer Menu Active State

let footerList = document.getElementsByClassName("footer-list");

function changeFooterList() {
    event.target.style.color = "white";
};

function changeFooterListBack() {
    event.target.style.color = "";
};

function assign(element) {
    element.onmouseover = changeFooterList;
    element.onmouseout = changeFooterListBack;
};

for (let i = 0; i<footerList.length ; i++) {
    assign(footerList[i])
};

// Social Icons Active State

let social = document.getElementsByClassName("social-icon");

function changeSocialIcons() {
    event.target.style.filter = "contrast(0) brightness(200%)";
}

function changeSocialIconsBack() {
    event.target.style.filter = "";
}

function assign(element) {
    element.onmouseover = changeSocialIcons;
    element.onmouseout = changeSocialIconsBack;
}

for (let i = 0; i<social.length ; i++) {
    assign(social[i])
}

