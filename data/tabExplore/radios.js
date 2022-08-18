var listRadios = [
    {
        name: "Xone Radio",
        viewers: "476",
        image: "./assets/img/tabExplore/radios/radio1.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach1.jpg",
    },
    {
        name: "On Air",
        viewers: "143",
        image: "./assets/img/tabExplore/radios/radio2.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach2.jpg",
    },
    {
        name: "Chạm",
        viewers: "323",
        image: "./assets/img/tabExplore/radios/radio3.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach3.jpg",
    },
    {
        name: "Acoustic",
        viewers: "665",
        image: "./assets/img/tabExplore/radios/radio4.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach4.jpg",
    },
    {
        name: "Rap Việt",
        viewers: "257",
        image: "./assets/img/tabExplore/radios/radio5.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach5.jpg",
    },

    {
        name: "US-UK",
        viewers: "116",
        image: "./assets/img/tabExplore/radios/radio6.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach6.jpg",
    },
    {
        name: "K-POP",
        viewers: "80",
        image: "./assets/img/tabExplore/radios/radio7.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach7.jpg",
    },
    {
        name: "V-POP",
        viewers: "50",
        image: "./assets/img/tabExplore/radios/radio8.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach8.jpg",
    },
    {
        name: "Bolero",
        viewers: "59",
        image: "./assets/img/tabExplore/radios/radio9.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach9.jpg",
    },
    {
        name: "The One Radio",
        viewers: "44",
        image: "./assets/img/tabExplore/radios/radio10.jpg",
        logo: "./assets/img/tabExplore/radios/attachs/attach10.jpg",
    },
];

const RADIO_STORAGE_KEY = 'VIK_RADIO';

localStorage.setItem(RADIO_STORAGE_KEY, JSON.stringify(listRadios));
