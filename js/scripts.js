const observer = lozad();
observer.observe();
const abouts = [...document.querySelectorAll('.about')];
const aboutIco = [...document.querySelectorAll('.goTo')];
const roboSpan = [...document.querySelectorAll('.roboText span')];
const cursor = document.querySelector('.cursor');
const numberPeople = document.querySelector('.numberPeople span');
const mobileMenu = document.querySelector('#mobileMenu .menu');
const list = document.querySelector('.list');
const arrowLeft = document.querySelector('.arrow .arrowLeft');
const arrowRight = document.querySelector('.arrow .arrowRight');
const menuActive = document.querySelector('.menuGal .activeMenu');
const imagesGal = [...document.querySelectorAll('.imagesG .desktop img')];
const imagesGalm2 = [...document.querySelectorAll('.imagesG .mobile img')];
const topMenu = [...document.querySelectorAll('.menuTop a')];


const text = {
    one: 'SKLEP ORAZ SERWIS KOMPUTEROWY',
    two: ' W RADOMIU I KIELCACH',
    three: 'ZAPRASZAMY!',
};
let indexText = [0, 0, 0];

//O FIRMIE ICON
abouts.forEach((about, index) => {

    about.addEventListener('mouseover', () => {
        aboutIco[index].style.transform = 'translate(0px, -92px)';
    });
    about.addEventListener('mouseout', () => {
        aboutIco[index].style.transform = 'translate(0px, 0px)';
    });


});


//ROBO TEXT
if (innerWidth > 500) {
    const textTyping = setInterval(function () {
        if (indexText[0] < text.one.length) {
            roboSpan[0].textContent += text.one[indexText[0]];
            indexText[0]++;
        } else if (indexText[1] < text.two.length) {
            roboSpan[0].style.display = 'block';
            roboSpan[1].textContent += text.two[indexText[1]];
            indexText[1]++;
        } else if (indexText[2] < text.three.length) {
            roboSpan[1].style.display = 'block';
            cursor.style.color = '#d82a2a';
            roboSpan[2].textContent += text.three[indexText[2]];
            indexText[2]++;
        }
    }, 40);
}else{
    const textTyping = setInterval(function () {
        if (indexText[0] < text.one.length) {
            roboSpan[0].textContent += text.one[indexText[0]];
            indexText[0]++;
        } else if (indexText[1] < text.two.length) {
            roboSpan[0].style.display = 'block';
            roboSpan[1].textContent += text.two[indexText[1]];
            indexText[1]++;
        } else if (indexText[2] < text.three.length) {
            roboSpan[1].style.display = 'block';
            cursor.style.color = '#d82a2a';
            roboSpan[2].textContent += text.three[indexText[2]];
            indexText[2]++;
        }
    }, 1);
}

//NUMBER PEOPLE
const numberP = Math.floor(Math.random() * (15 - 5) + 5);
numberPeople.textContent = numberP;


//TOOLS
const tools = [...document.querySelectorAll('.tools div')];
const allTools = document.querySelector('.tools');
let flagTool = 0;
let active = 0;

allTools.addEventListener('click', () => {
    if (flagTool === 0) {
        tools[0].style.transform = 'rotate(45deg) translate(6px,-8px)';
        tools[1].style.transform = 'rotate(-45deg)';
        tools[2].style.opacity = '0';
        allTools.style.top = '5px';
        flagTool = 1;
    } else {
        tools[0].style.transform = 'rotate(0deg) translate(0px,0px)';
        tools[1].style.transform = 'rotate(-0deg)';
        tools[2].style.opacity = '1';
        allTools.style.top = '0px';
        flagTool = 0;
    }

    if (active === 0) {
        mobileMenu.style.transform = 'translate(0px, 0vh)';
        active = 1;
    } else {
        mobileMenu.style.transform = 'translate(0px, -120vh)';
        active = 0;
    }
});


list.addEventListener('click', () => {
    if (active === 0) {
        mobileMenu.style.transform = 'translate(0px, 0vh)';
        active = 1;

        tools[0].style.transform = 'rotate(45deg) translate(6px,-8px)';
        tools[1].style.transform = 'rotate(-45deg)';
        tools[2].style.opacity = '0';
        allTools.style.top = '5px';
        flagTool = 1;
    } else {
        mobileMenu.style.transform = 'translate(0px, -120vh)';
        active = 0;

        tools[0].style.transform = 'rotate(0deg) translate(0px,0px)';
        tools[1].style.transform = 'rotate(-0deg)';
        tools[2].style.opacity = '1';
        allTools.style.top = '0px';
        flagTool = 0;
    }
});

//SCROOL   
function scroll_to(selector) {
    $('html,body').animate({
        scrollTop: $(selector).offset().top - 120
    }, 1000);
    return false;
}
//ARROW GALLERY DESKTOP
let imageGal = 0;
let value = (imageGal * 66.66);
let valueImage = (imageGal * 85);
let flagImage = 0;

arrowLeft.addEventListener('click', function (e) {
    imageGal--;
    if (imageGal === -1) {
        imageGal = 3;
        flagImage = 1;
    }
    value = (imageGal * 66.66);
    menuActive.style.transform = `translate(${value}%,-50%)`;

    if (flagImage === 0) {
        imagesGal[imageGal + 1].style.transform = `translate(+85vw,0)`;
        imagesGal[imageGal].style.transform = `translate(1.2vw,0)`;
    } else {
        imagesGal[0].style.transform = `translate(-85vw,0)`;
        imagesGal[1].style.transform = `translate(-85vw,0)`;
        imagesGal[2].style.transform = `translate(-85vw,0)`;
        imagesGal[3].style.transform = `translate(1.2vw,0)`;
        flagImage = 0;
    }
});

arrowRight.addEventListener('click', function (e) {
    imageGal++;
    if (imageGal > 3) {
        imageGal = 0;
        flagImage = 1;
    }
    value = (imageGal * 66.66);
    menuActive.style.transform = `translate(${value}%,-50%)`;

    if (flagImage === 0) {
        imagesGal[imageGal - 1].style.transform = `translate(-85vw,0)`;
        imagesGal[imageGal].style.transform = `translate(1.2vw,0)`;
    } else if (flagImage === 1) {
        imagesGal[3].style.transform = `translate(+85vw,0)`;
        imagesGal[2].style.transform = `translate(+85vw,0)`;
        imagesGal[1].style.transform = `translate(+85vw,0)`;
        imagesGal[0].style.transform = `translate(1.2vw,0)`;
        flagImage = 0;
    }
});


//ARROW GALLERY MOBILE
let imageGalm = 0;
let valuem = (imageGalm * 66.66);
let valueImagem = (imageGalm * 85);
let flagImagem = 0;

arrowLeft.addEventListener('click', function (e) {
    imageGalm--;
    if (imageGalm === -1) {
        imageGalm = 3;
        flagImagem = 1;
    }
    valuem = (imageGalm * 66.66);
    menuActive.style.transform = `translate(${valuem}%,-50%)`;

    if (flagImagem === 0) {
        imagesGalm2[imageGalm + 1].style.transform = `translate(+85vw,0)`;
        imagesGalm2[imageGalm].style.transform = `translate(1.2vw,0)`;
    } else {
        imagesGalm2[0].style.transform = `translate(-85vw,0)`;
        imagesGalm2[1].style.transform = `translate(-85vw,0)`;
        imagesGalm2[2].style.transform = `translate(-85vw,0)`;
        imagesGalm2[3].style.transform = `translate(1.2vw,0)`;
        flagImagem = 0;
    }
});

arrowRight.addEventListener('click', function (e) {
    imageGalm++;
    if (imageGalm > 3) {
        imageGalm = 0;
        flagImagem = 1;
    }
    valuem = (imageGalm * 66.66);
    menuActive.style.transform = `translate(${valuem}%,-50%)`;

    if (flagImagem === 0) {
        imagesGalm2[imageGalm - 1].style.transform = `translate(-85vw,0)`;
        imagesGalm2[imageGalm].style.transform = `translate(1.2vw,0)`;
    } else if (flagImagem === 1) {
        imagesGalm2[3].style.transform = `translate(+85vw,0)`;
        imagesGalm2[2].style.transform = `translate(+85vw,0)`;
        imagesGalm2[1].style.transform = `translate(+85vw,0)`;
        imagesGalm2[0].style.transform = `translate(1.2vw,0)`;
        flagImagem = 0;
    }
});

//OFFLINE MAP
const offlineMaps = [...document.querySelectorAll('.map .offlineMap')];
const onlineMaps = [...document.querySelectorAll('.map iframe')];
const showMaps = [...document.querySelectorAll('.map .showMap')];


offlineMaps.forEach((offlineMap, index) => {
    offlineMap.addEventListener('click', () => {
        offlineMap.style.display = 'none';
        onlineMaps[index].style.display = 'initial';
    });

    offlineMap.addEventListener('mouseenter', () => {
        showMaps[index].style.transform = 'translate(0, 0vh)';
    });

    offlineMap.addEventListener('mouseleave', () => {
        showMaps[index].style.transform = 'translate(0, -41vh)';
    });
});