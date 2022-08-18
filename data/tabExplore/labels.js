
var listLabel = [
    {
        image: "./assets/img/tabExplore/labels/label1.jpg"
    },
    {
        image: "./assets/img/tabExplore/labels/label2.jpg"
    },
    {
        image: "./assets/img/tabExplore/labels/label3.jpg"
    },
];

const LABEL_STORAGE_KEY = 'VIK_LABEL';

localStorage.setItem(LABEL_STORAGE_KEY, JSON.stringify(listLabel));
