var listFavArtist = [
    {
        explication: "Từ thư viện của bạn",
        name: "Chi Dân",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist1/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist1.jpg",
    },
    {
        explication: "Vì bạn nghe nhiều",
        name: "Binz",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist2/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist2.jpg",
    },
    {
        explication: "Từ thư viện của bạn",
        name: "Sơn Tùng M-TP",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist3/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist3.jpg",
    },
    {
        explication: "Có thể bạn thích",
        name: "Hương Ly",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist4/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist4.jpg",
    },
    {
        explication: "Bạn đã quan tâm",
        name: "AMEE",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist5/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist5.jpg",
    },
    {
        explication: "Vì bạn nghe nhiều",
        name: "Bích Phương",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist6/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist6.jpg",
    },
    {
        explication: "Vì bạn yêu thích",
        name: "Han Sara",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist7/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist7.jpg",
    },
    {
        explication: "Bạn nghe gần đây",
        name: "SOOBIN",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song3.png",
            "./assets/img/tabExplore/favArtists/artistSongs/artist8/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist8.jpg",
    },
    {
        explication: "Có thể bạn thích",
        name: "Tlinh",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist9/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist9.jpg",
    },
    {
        explication: "Vì bạn yêu thích",
        name: "Mamamoo",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist10/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist10.jpg",
    },
    {
        explication: "Bạn nghe gần đây",
        name: "Mr. Siro",
        songs: [
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song1.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song2.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song3.jpg",
            "./assets/img/tabExplore/favArtists/artistSongs/artist11/song4.jpg",
        ],
        image: "./assets/img/tabExplore/favArtists/artist11.jpg",
    },
];


const FAVORITE_ARTIST_STORAGE_KEY = 'VIK_FAVORITE_ARTIST';

localStorage.setItem(FAVORITE_ARTIST_STORAGE_KEY, JSON.stringify(listFavArtist));
