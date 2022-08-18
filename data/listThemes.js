const listThemes = [
    {
        type: 'Chủ đề',
        themes: [
            {
                name: 'Zing Music Awards',
                image: './assets/img/modalThemes/modalTheme1/theme1.jpg'
            },
            {
                name: 'Tháp Eiffel',
                image: './assets/img/modalThemes/modalTheme1/theme2.jpg'
            },
        ]
    },
    {
        type: 'Nghệ Sĩ',
        themes: [
            {
                name: 'Rosé',
                image: './assets/img/modalThemes/modalTheme2/theme1.jpg'
            },
            {
                name: 'IU',
                image: './assets/img/modalThemes/modalTheme2/theme2.jpg'
            },
            {
                name: 'Ji Chang Wook',
                image: './assets/img/modalThemes/modalTheme2/theme3.jpg'
            },
            {
                name: 'Lisa',
                image: './assets/img/modalThemes/modalTheme2/theme4.jpg'
            },
            {
                name: 'Jennie Kim',
                image: './assets/img/modalThemes/modalTheme2/theme5.jpg'
            },
            {
                name: 'Jisoo',
                image: './assets/img/modalThemes/modalTheme2/theme6.jpg'
            },
        ]
    },
    {
        type: 'Màu Tối',
        themes: [
            {
                name: 'Tối',
                image: './assets/img/modalThemes/modalTheme3/theme1.jpg'
            },
            {
                name: 'Tím',
                image: './assets/img/modalThemes/modalTheme3/theme2.jpg'
            },
            {
                name: 'Xanh Đậm',
                image: './assets/img/modalThemes/modalTheme3/theme3.jpg'
            },
            {
                name: 'Xanh Biển',
                image: './assets/img/modalThemes/modalTheme3/theme4.jpg'
            },
            {
                name: 'Xanh Lá',
                image: './assets/img/modalThemes/modalTheme3/theme5.jpg'
            },
            {
                name: 'Nâu',
                image: './assets/img/modalThemes/modalTheme3/theme6.jpg'
            },
            {
                name: 'Hồng',
                image: './assets/img/modalThemes/modalTheme3/theme7.jpg'
            },
            {
                name: 'Đỏ',
                image: './assets/img/modalThemes/modalTheme3/theme8.jpg'
            },
        ]
    },
    {
        type: 'Màu Sáng',
        themes: [
            {
                name: 'Sáng',
                image: './assets/img/modalThemes/modalTheme4/theme1.jpg'
            },
            {
                name: 'Xám',
                image: './assets/img/modalThemes/modalTheme4/theme2.jpg'
            },
            {
                name: 'Xanh Nhạt',
                image: './assets/img/modalThemes/modalTheme4/theme3.jpg'
            },
            {
                name: 'Hồng Cánh Sen',
                image: './assets/img/modalThemes/modalTheme4/theme4.jpg'
            },
        ]
    },
]


const THEME_LIST_STORAGE_KEY = 'VIK_THEME_LIST';

localStorage.setItem(THEME_LIST_STORAGE_KEY, JSON.stringify(listThemes))