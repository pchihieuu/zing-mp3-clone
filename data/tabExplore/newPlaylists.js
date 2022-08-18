var listNewPlaylist = [
    {
        name: "Chưa Bao Giờ Em Quên",
        singer: ["Hương Ly"],
        order: "1",
        time: "01.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist1.jpg"
    },
    {
        name: "Có Một Tình Yêu Gọi Là Chia Tay",
        singer: ["Tăng Phúc", "Trương Thảo Nhi"],
        order: "2",
        time: "06.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist2.jpg"
    },
    {
        name: "vâng anh đi đi (liu riu version)",
        singer: ["Bích Phương"],
        order: "3",
        time: "07.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist3.jpg"
    },
    {
        name: "Vậy Là Ta Mất Nhau",
        singer: ["Khải Đăng"],
        order: "4",
        time: "04.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist4.jpg"
    },
    {
        name: "Bao Lâu Ta Lại Yêu Một Người",
        singer: ["Doãn Hiếu", "B."],
        order: "5",
        time: "02.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist5.jpg"
    },
    {
        name: "Anh Biết Em Không Tin",
        singer: ["Kidz"],
        order: "6",
        time: "07.10.2021",
        image: "./assets/img/tabExplore/newPlaylists/newPlaylist6.jpg"
    },
];

const NEW_PLAYLIST_STORAGE_KEY = 'VIK_NEW_PLAYLIST';

localStorage.setItem(NEW_PLAYLIST_STORAGE_KEY, JSON.stringify(listNewPlaylist));
