'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'VIK_PLAYER';
const DURATION_STORAGE_KEY = 'VIK_DURATION';



const appContainers = Array.from($$('.app__container'));
const audio = $('#audio');
const authors = Array.from($$('.player__song-author'));
const albumLists = Array.from($$('.album--container'));
const albumScrollBtns = $$('.container__move-btn.move-btn--album');
const artistLists = Array.from($$('.artist--container'));
const artistScrollBtns = $$('.container__move-btn.move-btn--artist');
const brandLists = Array.from($$('.brand--container'));
const cdThumbs = Array.from($$('.player__song-thumb .thumb-img'));
const closeModalBtn = $('.modal__close-btn');
const containerTabs = $$('.container__tab');
const durationTimes = Array.from($$('.durationtime'));
const eventLists = Array.from($$('.event--container'))
const exploreSlideLists = Array.from($$('.explore__slide--container'));
const favArtistLists = Array.from($$('.fav-artist--container'))
const header = $('.header');
const headerNavTitles = $$('.tab-home .container__header-title');
const homeMVs = $$('.tab-home .mv--container .row__item.item--mv');
const labelContainers = Array.from($$('.tab--explore .label--container'));
const logOutOption = $('.app__header-options.options--log-out');
const logOutBtn = $('.option__log-out');
const modalTheme = $('.modal-theme');
const mvLists = Array.from($$('.mv--container'));
const mvScrollBtns = $$('.container__move-btn.move-btn--mv');
const navbarItems = Array.from($$('.content__navbar-item'));
const navSettingBtn = $('.header__nav-btn.btn--nav-setting');
const navSettingMenu = $('.setting__menu');
const navThemeBtn = $('.header__nav-btn.nav-btn--theme');
const nextBtns = Array.from($$('.btn-next'));
const newPlaylistLists = Array.from($$('.new-playlist--container'));
const newPlaylistMoveBtns = Array.from($$('.move-btn--new-playlist'))
const normalPlaylistLists = Array.from($$('.normal-playlist--section'))
const favArtistMoveBtns = Array.from($$('.move-btn--fav-artist'))
const playAllBtns = $$('.btn--play-all');
const player = $('.player');
const playerContainer = $('.player__container');
const playerInfos = Array.from($$('.player__song-info'));
const playerPopUp = $('.player .player__popup');
const playerPopUpFooter = $('.player .player__popup .player__popup-footer');
const popUpSongName = $('.player__popup-cd-info h2');
const popUpSongAuthor = $('.player__popup-cd-info h3');
const popUpCdThumb = $('.player__popup-cd-display .player__popup-cd-img');
const popUpCdDisplay = $('.player__popup-cd-display');
const postLists = Array.from($$('.story--container'));
const playlistLists = Array.from($$('.playlist--container'));
const playlistScrollBtns = $$('.container__move-btn.move-btn--playlist');
const playBtns = Array.from($$('.btn-toggle-play'));
const prevBtns = Array.from($$('.btn-prev'));
const progress = Array.from($$('.progress'));
const progressBlocks = Array.from($$('.progress-block'));
const progressTracks = Array.from($$('.progress__track.song--track .progress__track-update'));
const radioLists = Array.from($$('.radio--container'));
const randomBtns = Array.from($$('.btn-random'));
const exploreRadioMoveBtns = Array.from($$('.tab--explore .container__move-btn.move-btn--radio'))
const radioTabMoveBtns = Array.from($$('.tab--radio .container__move-btn.move-btn--radio'))
const repeatBtns = Array.from($$('.btn-repeat'));
const searchHistory = $('.header__search-history');
const sidebar = $('.app__sidebar');
const sidebarExpandBtn = $('.sidebar__expand-btn.btn--expand');
const sidebarNavItems = Array.from($$('.sidebar__nav .sidebar__nav-item'))
const sidebarShrinkBtn = $('.sidebar__expand-btn.btn--shrink');
const slideImgs = $$('.container__slide-item');
const sidebarSubnav = $('.sidebar__subnav');
const sidebarSubnavItems = Array.from($$('.sidebar__subnav .subnab--item'))
const singerSlideContainers = Array.from($$('.singer-slide--container'));
const songLists = Array.from($$('.playlist__list'));
const songAnimateTitles = Array.from($$('.player__title-animate'));
const specialPlaylistLists = Array.from($$('.special-playlist--section'))
const tabCharts = $('.app__container.tab--charts');
const themeContainer = $('.theme__container');
const trackTimes = Array.from($$('.tracktime'));
const volumes = Array.from($$('.volume__range'));
const volumeBtns = Array.from($$('.player__options-btn.volume.option-btn'))
const volumeTracks = Array.from($$('.progress__track.volume--track .progress__track-update'));
const volumeIcons = Array.from($$('.volume .btn--icon'));
const App = $('.app');


const app = {
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isSeeking: false,
    isChangeVolume: false,
    scrollToRight: [true, true, true, true, true, true, true, true, true, true], //use when click move btn
    currentScreen: [],
    currentIndex: 0,
    currentPlaylist: 0, //choose playlist
    themeList: 0, //Theme list index (have > 1 lists)
    currentTheme: 0, //Current theme index in theme list
    indexArray: [], //Use for random song
    slideIndexs: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //Index of Each tab  (playlist, album, mv, artist)
    slideSelectors: [
        '.tab-home .playlist--container .row__item.item--playlist',
        '.tab-home .album--container .row__item.item--album',
        '.tab-home .mv--container .row__item.item--mv',
        '.tab-home .artist--container .row__item.item--artist',
        '.tab--explore .radio--container .row__item.item--radio',
        '.tab--explore .singer-slide--container .singer__slide-item',
        '.tab--explore .new-playlist--container .row__item.item--new-playlist',
        '.tab--explore .fav-artist--container .row__item.item--fav-artist',
        '.tab--radio .radio--container .row__item.item--radio',
        '.tab--following .singer-slide--container .singer__slide-item',
    ],
    slideTitleWidth: 0, //Width of player title on footer
    
    songPlaylists: JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY) || '[]'),

    playlists: JSON.parse(localStorage.getItem(PLAYLIST_STORAGE_KEY) || '[]'),

    albums: JSON.parse(localStorage.getItem(ALBUM_STORAGE_KEY) || '[]'),

    mvs: JSON.parse(localStorage.getItem(MV_STORAGE_KEY) || '[]'),

    artists: JSON.parse(localStorage.getItem(ARTIST_STORAGE_KEY) || '[]'),

    exploreSlides: JSON.parse(localStorage.getItem(EXPLORE_SLIDE_STORAGE_KEY) || '[]'),

    radios: JSON.parse(localStorage.getItem(RADIO_STORAGE_KEY) || '[]'),

    labels: JSON.parse(localStorage.getItem(LABEL_STORAGE_KEY) || '[]'),

    singerSlides: JSON.parse(localStorage.getItem(SINGER_SLIDE_STORAGE_KEY) || '[]'),

    events: JSON.parse(localStorage.getItem(EVENT_STORAGE_KEY) || '[]'),

    newPlaylists: JSON.parse(localStorage.getItem(NEW_PLAYLIST_STORAGE_KEY) || '[]'),

    favArtists: JSON.parse(localStorage.getItem(FAVORITE_ARTIST_STORAGE_KEY) || '[]'),

    brands: JSON.parse(localStorage.getItem(BRAND_STORAGE_KEY) || '[]'),

    specialPlaylists: JSON.parse(localStorage.getItem(SPECIAL_PLAYLIST_STORAGE_KEY) || '[]'),

    normalPlaylists: JSON.parse(localStorage.getItem(NORMAL_PLAYLIST_STORAGE_KEY) || '[]'),

    listSongCharts: JSON.parse(localStorage.getItem(SONG_CHARTS_STORAGE_KEY) || '[]'),

    posts: JSON.parse(localStorage.getItem(POST_STORAGE_KEY) || '[]'),

    durationList: JSON.parse(localStorage.getItem(DURATION_STORAGE_KEY) || `[
        ["04:30","03:18","04:33","04:20","03:24","06:05","03:55","03:22","03:44","03:08","04:15","03:53","04:07","04:13","04:42","04:08","03:17","04:05","03:11","04:16","04:04"],
        ["04:02","02:57","03:21","14:50","03:57","04:21","04:45","03:06","04:46","05:02","04:24","04:27","08:26","04:48","03:01","03:25","04:24","03:19","03:43","03:34"],
        ["03:16","03:21","02:38","03:28","03:48","03:32","03:04","03:37","03:31","03:11","03:28","03:17","02:37","03:28","03:16","05:32"],
        ["03:25","04:45","03:14","04:15","02:54","02:51","02:01","04:28","03:23","04:04","02:45","03:57","03:21","02:28","02:34","04:03","03:56"]
    ]`),

    themeLists: JSON.parse(localStorage.getItem(THEME_LIST_STORAGE_KEY) || '[]'), // List theme image to render to view

    themes: JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) || '[]'), //List theme to apply background

    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) || '{}'),


    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },

    

    html([first, ...string], ...values) {
        return values.reduce(
            (acc, cur) => acc.concat(cur, string.shift())
            , [first]
        )
        .filter(x => x && x !== true || x === 0)
        .join('')       
    },
    
    renderSong() {
        this.songs = this.songPlaylists[this.currentPlaylist]
        songLists.forEach((songList, songIndex) => {
            songList.innerHTML = app.html`${app.songs.map(function(song, index) {
                return app.html`
                    <div class="playlist__list-song media ${app.currentIndex === index ? 'active' : ''}" data-index="${index}">
                        <div class="playlist__song-info media__left">
                            ${songIndex === 1 && app.html`
                                <div class="playlist__song-check">
                                    <input type="checkbox" name="" id="playlist__check-${index}" class="mr-10" style="display: none">
                                    <label for="playlist__check-${index}"></label>
                                </div>
                                <i class="bi bi-music-note-beamed mr-10"></i>
                            `}
                            <div class="playlist__song-thumb media__thumb mr-10" style="background: url('${song.image}') no-repeat center center / cover">
                                <div class="thumb--animate">
                                    <div class="thumb--animate-img" style="background: url('./assets/img/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain">
                                    </div>
                                </div>
                                <div class="play-song--actions">
                                    <div class="control-btn btn-toggle-play btn--play-song">
                                        <i class="bi bi-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="playlist__song-body media__info">
                                <span class="playlist__song-title info__title">${song.name}</span>
                                <p class="playlist__song-author info__author">
                                    ${song.singer.map((singer,index) => {
                                        return app.html`
                                        <a href="#" class="is-ghost">${singer}</a>${index < song.singer.length - 1 && ', '}
                                        `
                                    })}
                                </p>
                            </div>
                        </div>
                        <span class="playlist__song-time media__content">${app.durationList[app.currentPlaylist][index]}</span>
                        <div class="playlist__song-option ${songIndex === 1 && "song--tab"} media__right">
                            <div class="playlist__song-btn btn--mic option-btn hide-on-mobile">
                                <i class="btn--icon song__icon bi bi-mic-fill"></i>
                            </div>
                            <div class="playlist__song-btn song-btn--heart option-btn hide-on-mobile">
                                <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                            </div>
                            <div class="playlist__song-btn option-btn ${songIndex === 0 && 'hide-on-tablet'}">
                                <i class="btn--icon bi bi-three-dots"></i>
                            </div>
                        </div>
                    </div>
                `
            })}`
        })
    },

    renderPlaylist() {
        playlistLists.forEach((playlistList, playlistIndex) => {
            playlistList.innerHTML = app.html`
                <div class="col l-2-4 m-3 c-4 ${playlistIndex === 1 && 'mb-30'}">
                    <div class="row__item  playlist--create item--playlist">
                        <div class="row__item-container flex--center item-create--properties">
                            <i class="bi bi-plus-lg album__create-icon"></i>
                            <span class="album__create-annotate text-center">Tạo playlist mới</span>
                        </div>
                    </div>
                </div>
                ${app.playlists.map((playlist, index) => {
                    return app.html`
                        <div class="col l-2-4 m-3 c-4 ${playlistIndex === 1 && 'mb-30'}">
                            <div class="row__item item--playlist">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${playlist.image}') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="action-btn btn--heart">
                                                <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                            </div>
                                            <div class="btn--play-playlist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill"></i>
                                                </div>
                                            </div>
                                            <div class="action-btn">
                                                <i class="btn--icon bi bi-three-dots"></i>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="row__item-info">
                                        <a href="#" class="row__info-name is-twoline">${playlist.name}</a>
                                        <h3 class="row__info-creator">${playlist.creator}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}`
        })
    },

    renderAlbum() {
        albumLists.forEach((albumList, albumIndex) => {
            albumList.innerHTML = app.html`
                ${app.albums.map((album,index) => {
                    return app.html`
                        <div class="col l-2-4 m-3 c-4 ${albumIndex === 1 && 'mb-30'}">
                            <div class="row__item item--album">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${album.image}') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="action-btn btn--heart">
                                                <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                            </div>
                                            <div class="btn--play-playlist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill icon-play"></i>
                                                </div>
                                            </div>
                                            <div class="action-btn">
                                                <i class="btn--icon bi bi-three-dots"></i>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="row__item-info">
                                        <a href="#" class="row__info-name is-twoline">${album.name}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderMV() {
        mvLists.forEach((mvList, mvIndex) => {
            mvList.innerHTML = app.html`
                ${app.mvs.map((mv, index) => {
                    return app.html`
                        <div class="col l-4 m-6 c-12 ${mvIndex === 1 && 'mb-30'}">
                            <div class="row__item item--mv">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--mv" style="background: url('${mv.image}') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="action-btn mv-btn--close">
                                                <i class="bi bi-x-lg btn--icon"></i>
                                            </div>
                                            <div class="btn--play-playlist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill icon-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                        <div class="mv__time">${mv.time}</div>
                                    </div>
                                    <div class="row__item-info media">
                                        <div class="media__left">
                                            <div class="media__thumb is-rounded mr-10" style="background: url('${mv.authorAvatar}') no-repeat center center / cover"></div>
                                            <div class="media__info">
                                                <span class="info__title is-active is-twoline">${mv.name}</span>
                                                <p class="info__author">
                                                    ${mv.author.map((author, index) => {
                                                        return app.html`
                                                            <a href="#" class="is-ghost">${author}</a>${index < mv.author.length -1 && ', '}
                                                        `
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderArtist() {
        artistLists.forEach((artistList, artistIndex) => {
            artistList.innerHTML = app.html`
                ${app.artists.map((artist, index) => {
                    return app.html`
                        <div class="col l-2-4 m-3 c-6 ${artistIndex === 1 && 'mb-30'}">
                            <div class="row__item item--artist">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display is-rounded">
                                        <div class="row__item-img img--square is-rounded" style="background: url('${artist.image}') no-repeat center center / contain"></div>
                                        <div class="row__item-actions">
                                            <div class="btn--play-playlist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill icon-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="row__item-info media artist--info">
                                        <div class="media__left">
                                            <div href="#" class="row__info-name is-ghost mt-15 lh-19 text-center">
                                                ${artist.name}
                                                <i class="bi bi-star-fill row__info-icon">
                                                    <div class="icon-overlay"></div>
                                                </i>
                                            </div>
                                            <h3 class="row__info-creator text-center">${artist.followers} quan tâm</h3>
                                        </div>
                                    </div>
                                    <div class="row__item-btn">
                                        <button class="button is-small button-primary">
                                            <i class="bi bi-check2"></i>
                                            <span>&nbsp;Đã quan tâm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderModalTheme() {
        themeContainer.innerHTML = app.html`
            ${this.themeLists.map((themeList, themeIndex)=> {
                return app.html`
                    <div class="row sm-gutter theme__list">
                        <div class="col l-12 m-12 c-12">
                            <div class="theme__container-info">
                                <h3 class="theme__info-name">${themeList.type}</h3>
                            </div>
                        </div>
                        ${themeList.themes.map((theme, index) => {
                            return app.html`
                                <div class="col l-2 m-4 c-6 mb-20">
                                    <div class="theme__container-item" data-index="${index}">
                                        <div class="theme__item-display row__item-display br-5">
                                            <div class="theme__item-img row__item-img" style="background: url('${theme.image}') no-repeat center center / cover"></div>
                                            <div class="overlay"></div>
                                            <div class="theme__item-actions row__item-actions">
                                                <button class="button theme__actions-btn btn--apply-theme button-primary">
                                                    <span class="theme__btn-title">Áp dụng</span>
                                                </button>
                                                <button class="button theme__actions-btn btn--preview hide-on-mobile">
                                                    <span class="theme__btn-title">Xem trước</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="theme__item-info">
                                            <div class="theme__item-name">${theme.name}</div>
                                        </div>
                                    </div>
                                </div>
                            `
                        })}
                    </div>
                `
            })}
        
        `
    },

    renderExploreSlide() {
        exploreSlideLists.forEach((exploreSlideList, slideIndex) => {
            exploreSlideList.innerHTML = app.html`
                <div class="explore__slide-move">
                    <div class="slide__move-btn btn--prev">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="slide__move-btn btn--next">
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
                ${this.exploreSlides.map((exploreSlide, index) => {
                    return app.html`
                        <div 
                            class="col l-4 m-4 c-6 explore__slide-item 
                            ${index === 0 && 'first next'} 
                            ${index === 1 && 'second'} 
                            ${index === 2 && 'third'}
                            ${index === 3 && 'fourth'}
                            ${index > 3 && index < app.exploreSlides.length - 1 && 'fifth'}
                            ${index === app.exploreSlides.length - 1 && 'sixth prev'}
                        ">
                            <div class="row__item-display">
                                <div class="explore__slide-img row__item-img img--rec" style="background: url('${exploreSlide.image}') no-repeat center center / cover"></div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderRadios() {
        radioLists.forEach((radioContainer, radioIndex) => {
            radioContainer.innerHTML = app.html`
                ${this.radios.map((radio, index) => {
                    return app.html`
                        <div class="col l-1-7 m-2-4 c-3">
                            <div class="row__item item--radio">
                                <div class="row__item-container flex--top-left">
                                    <div class="item--has-attach">
                                        <svg class="svg row__item-frame" fill="transparent" width="100%" height="100%" viewBox="0 0 100 100">
                                            <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" stroke-width="2.5"></circle>
                                            <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50" r="48.75" stroke-width="2.5" stroke-dasharray="306.3052837250048" stroke-dashoffset="${Math.random() * 306}" style="transition: stroke-dashoffset 850ms ease-in-out 0s;"></circle>
                                        </svg>
                                        <div class="row__item-display is-rounded">
                                            <div class="row__item-img img--square is-rounded" style="background: url('${radio.image}') no-repeat center center / contain"></div>
                                            <div class="row__item-actions hide-on-mobile">
                                                <div class="btn--play-playlist">
                                                    <div class="control-btn btn-toggle-play">
                                                        <i class="bi bi-play-fill icon-play"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="overlay"></div>
                                        </div>
                                        <div class="radio__label">LIVE</div>
                                        <div class="radio__logo is-rounded">
                                            <div class="radio__logo-img" style="background: url('${radio.logo}') no-repeat center center / cover"></div>
                                        </div>
                                    </div>
                                    <div class="row__item-info media radio--info">
                                        <div class="media__left">
                                            <div class="media__info text-center">
                                                <span class="info__title is-active is-oneline">${radio.name}</span>
                                                <h3 class="row__info-creator text-center">${radio.viewers} đang nghe</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderLabels() {
        labelContainers.forEach((labelContainer, labelIndex) => {
            labelContainer.innerHTML = app.html`
                ${this.labels.map((label, index) => {
                    return app.html`
                        <div class="col l-4 m-4 c-6 mb-30">
                            <div class="row__item item--label">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--label" style="background: url('${label.image}') no-repeat center center / cover"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderSingerSlide() {
        singerSlideContainers.forEach((singerSlideContainer, slideIndex) => {
            singerSlideContainer.innerHTML = app.html`
                <div class="singer__slide-move hide-on-mobile">
                    <div class="slide__move-btn btn--prev button--disabled">
                        <i class="bi bi-chevron-left"></i>
                    </div>
                    <div class="slide__move-btn btn--next">
                        <i class="bi bi-chevron-right"></i>
                    </div>
                </div>
                ${this.singerSlides.map((singerSlide, index) => {
                    return app.html`
                        <div class="col l-2-4 m-3 c-4 row-item singer__slide-item">
                            <div class="row__item-display">
                                <div class="singer__slide-img img--singer-slide" style="background: url('${singerSlide.image}') no-repeat center center / cover"></div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderEvent() {
        eventLists.forEach((eventList, eventIndex) => {
            eventList.innerHTML = app.html`
                ${this.events.map((event, index) => {
                    return app.html`
                        <div class="col l-4 m-6 c-12">
                            <div class="row__item item--event">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--mv" style="background: url('${event.image}') no-repeat center center / cover"></div>
                                        <div class="blur"></div>
                                        <div class="row__item-display-content">
                                            <div class="display__content-label">Sự Kiện</div>
                                            <h3 class="display__content-title">${event.name}</h3>
                                            <p class="display__content-time">${event.time}</p>
                                        </div>
                                    </div>
                                    <div class="row__item-info media">
                                        <div class="media__left">
                                            <div class="media__info">
                                                <span class="info__title event--title is-active">Lượt chúc mừng</span>
                                                <div class="info__avatar">
                                                    ${event.fans.map(fan => {
                                                        return app.html`
                                                            <div class="info__avatar-item">
                                                                <div class="info__avatar-img" style="background: url('${fan}') no-repeat center center / cover"></div>
                                                            </div>
                                                        `
                                                    })}
                                                    <div class="info__avatar-item">
                                                        <p class="info__avatar-text">+${event.fanAmount}</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="media__content">
                                            <button class="button button-primary event__button">
                                                <span>${event.action}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderNewPlaylist() {
        newPlaylistLists.forEach((newPlaylistList, playlistIndex) => {
            newPlaylistList.innerHTML = app.html`
                ${this.newPlaylists.map((newPlaylist, index) => {
                    return app.html`
                        <div class="col l-4 m-6 c-12">
                            <div class="row__item item--new-playlist">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${newPlaylist.image}') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="btn--play-new-playlist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                    </div>
                                    <div class="row__item-info new-playlist--info">
                                        <a href="#" class="row__info-name is-twoline">${newPlaylist.name}</a>
                                        <h3 class="row__info-creator">
                                            ${newPlaylist.singer.map((singer, index) => {
                                                return app.html`
                                                    <a href="#" class="is-ghost">${singer}</a>${index < newPlaylist.singer.length - 1 && ','}
                                                `
                                            })}
                                            
                                        </h3>
                                        <div class="row__item-detail">
                                            <div class="info__detail-order">#${newPlaylist.order}</div>
                                            <div class="info__detail-time">${newPlaylist.time}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
                
                <div class="col l-4 m-6 c-12">
                    <div class="row__item item--new-playlist">
                        <div class="row__item-container new-song--empty flex--top-left">
                            <span>Xem tất cả</span>
                        </div>
                    </div>
                </div>
            `
        })
    },

    renderFavArtist() {
        favArtistLists.forEach((favArtistList, artistIndex) => {
            favArtistList.innerHTML = app.html`
                ${this.favArtists.map((favArtist, index) => {
                    return app.html`
                        <div class="col l-4 m-6 c-6">
                            <div class="row__item item--fav-artist">
                                <div class="row__item-container flex--top-left">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img img--square" style="background: url('${favArtist.image}') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="btn--fav-artist">
                                                <div class="control-btn btn-toggle-play">
                                                    <i class="bi bi-play-fill icon-play"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="overlay"></div>
                                        <div class="blur"></div>
                                        <div class="row__item-display-content">
                                            <h3 class="display__content-explication is-oneline">${favArtist.explication}</h3>
                                            <p class="display__content-artist is-oneline">${favArtist.name}</p>
                                            <div class="display__content-list">
                                                ${favArtist.songs.map((song, index) => {
                                                    return app.html`
                                                        <div class="display__content-list-song">
                                                            <div class="display__content-song-img" style="background: url('${song}') no-repeat center center / cover"></div>
                                                        </div>
                                                    `
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },

    renderBrand() {
        brandLists.forEach((brandList, brandIndex) => {
            brandList.innerHTML = app.html`
                ${this.brands.map((brand, index) => {
                    return app.html`
                        <div class="col l-1-5 m-3 c-4 container__footer-brand-item mb-30">
                            <div class="footer__brand-container">
                                <div class="container__footer-brand-background img--rec"></div>
                                <img src="${brand.image}" alt="brand" class="container__footer-brand-img">
                            </div>
                        </div>
                    `
                })}
            `
        })
    },
    
    renderSpecialPlaylist() {
        specialPlaylistLists.forEach((specialPlaylistList, playlistListIndex) => {
            specialPlaylistList.innerHTML = app.html`
                <div class="col l-12 m-12 c-12 mb-16">
                    <div class="container__header special-playlist--header">
                        <div class="row__item-info media">
                            <div class="media__left">
                                <div class="row__item-display br-5">
                                    <div class="row__item-img img--square" style="background: url('${app.specialPlaylists[playlistListIndex].header.image}') no-repeat center center / cover"></div>
                                </div>
                                <div class="media__info special-playlist--info">
                                    <span class="info__explication">${app.specialPlaylists[playlistListIndex].header.explication}</span>
                                    <h3 class="info__topic-name is-active">${app.specialPlaylists[playlistListIndex].header.topicName}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col l-12 m-12 c-12">
                    <div class="row no-wrap special-playlist--container">
                        ${app.specialPlaylists[playlistListIndex].playlists.map((playlist, index) => {
                            return app.html`
                                <div class="col l-2-4 m-3 c-4">
                                    <div class="row__item item--playlist">
                                        <div class="row__item-container flex--top-left">
                                            <div class="row__item-display br-5">
                                                <div class="row__item-img img--square" style="background: url('${playlist.image}') no-repeat center center / cover"></div>
                                                <div class="row__item-actions">
                                                    <div class="action-btn btn--heart">
                                                        <i class="btn--icon icon--heart bi bi-heart-fill primary"></i>
                                                    </div>
                                                    <div class="btn--play-playlist">
                                                        <div class="control-btn btn-toggle-play">
                                                            <i class="bi bi-play-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="btn--icon bi bi-three-dots"></i>
                                                    </div>
                                                </div>
                                                <div class="overlay"></div>
                                            </div>
                                            <div class="row__item-info explore-playlist--info">
                                                <a href="#" class="row__info-name ${playlistListIndex < 2 && 'is-oneline' || 'is-twoline'}">${playlist.name}</a>
                                                <p class="info__artist">
                                                    ${playlist.artists.map((artist, artistIndex) => {
                                                        return app.html`
                                                            <a href="#" class="is-ghost">${artist}</a>${artistIndex < playlist.artists.length -1 && ', '}
                                                        `
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        })}
                    </div>
                </div>
            `
        })
    },

    renderNormalPlaylist() {
        normalPlaylistLists.forEach((normalPlaylistList, playlistListIndex) => {
            normalPlaylistList.innerHTML = app.html`
                ${playlistListIndex != 6 && app.html`
                    <div class="col l-12 m-12 c-12 mb-16">
                        <div class="container__header">
                            <a href="#" class="container__header-title">
                                <h3>${this.normalPlaylists[playlistListIndex].header}</h3>
                            </a>
                            <h3 class="container__header-subtitle">${this.normalPlaylists[playlistListIndex].header}</h3>
                        </div>
                    </div>
                `}
                <div class="col l-12 m-12 c-12">
                    <div class="row ${playlistListIndex !== 7 && 'no-wrap'} normal-playlist--container">
                        ${app.normalPlaylists[playlistListIndex].playlists.map((playlist, index) => {
                            return app.html`
                                <div class="col l-2-4 m-3 c-4 ${playlistListIndex === 7 && 'mb-30'}">
                                    <div class="row__item item--playlist">
                                        <div class="row__item-container flex--top-left">
                                            <div class="row__item-display br-5">
                                                <div class="row__item-img img--square" style="background: url('${playlist.image}') no-repeat center center / cover"></div>
                                                <div class="row__item-actions">
                                                    <div class="action-btn btn--heart">
                                                        <i class="btn--icon icon--heart bi bi-heart"></i>
                                                    </div>
                                                    <div class="btn--play-playlist">
                                                        <div class="control-btn btn-toggle-play">
                                                            <i class="bi bi-play-fill"></i>
                                                        </div>
                                                    </div>
                                                    <div class="action-btn">
                                                        <i class="btn--icon bi bi-three-dots"></i>
                                                    </div>
                                                </div>
                                                <div class="overlay"></div>
                                            </div>
                                            <div class="row__item-info explore-playlist--info">
                                                ${playlistListIndex != 3 && app.html`
                                                    <a href="#" class="row__info-name ${playlistListIndex != 5 && playlistListIndex != 7 && "is-oneline" || "is-twoline"}">${playlist.name}</a>
                                                `
                                                }
                                                ${playlistListIndex != 5 && app.html`
                                                    <p class="info__artist">
                                                        ${playlist.artists.map((artist, artistIndex) => {
                                                            return app.html`
                                                                <a href="#" class="${playlistListIndex != 1 && playlistListIndex != 2 && 'is-ghost' || 'is-description'}">${artist}</a>${artistIndex < playlist.artists.length -1 && ', '}
                                                            `
                                                        })}
                                                    </p>
                                                `}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `
                        })}
                    </div>
                </div>
            `
        })
    },

    renderTabCharts() {
        tabCharts.innerHTML = app.html`
            <div class="app__container-content">
                <div class="charts__container">
                    <div class="grid">
                        <div class="chart__container-header mb-40">
                            <h3 class="chart__header-name">#zingchart</h3>
                            <div class="chart__header-btn">
                                <i class="bi bi-play-fill chart__header-icon"></i>
                            </div>
                        </div>
                        <div class="row no-gutters chart--container mt-10 mb-20">
                            <div class=" col l-12 m-12 c-12">
                                <div class="container__playlist">
                                    <div class="playlist__list-charts overflow-visible">
                                        ${this.listSongCharts.map((song, songIndex) => {
                                            return app.html`
                                                <div class="playlist__list-song media ${songIndex > 9 && 'song--not-expand'}">
                                                    <div class="playlist__song-info media__left">
                                                        <div class="playlist__song-rank">
                                                            <div
                                                                class="playlist__rank-number 
                                                                ${songIndex === 0 &&'is-outline--blue'}
                                                                ${songIndex === 1 &&'is-outline--green'}
                                                                ${songIndex === 2 &&'is-outline--red'}
                                                                ${songIndex > 2 &&'is-outline--text'}
                                                            ">
                                                                ${song.rank}
                                                            </div>
                                                            <div class="playlist__rank-icon">
                                                                <i class="bi bi-dash-lg"></i>
                                                            </div>
                                                        </div>
                                                        <div class="playlist__song-thumb media__thumb mr-10" style="background: url('${song.image}') no-repeat center center / cover">
                                                            <div class="thumb--animate">
                                                                <div class="thumb--animate-img" style="background: url('./assets/img/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain">
                                                                </div>
                                                            </div>
                                                            <div class="play-song--actions">
                                                                <div class="control-btn btn-toggle-play">
                                                                    <i class="bi bi-play-fill"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="playlist__song-body media__info">
                                                            <span class="playlist__song-title info__title">${song.name}</span>
                                                            <p class="playlist__song-author info__author">
                                                                ${song.singers.map((singer, index) => {
                                                                    return app.html`
                                                                        <a href="#" class="is-ghost">${singer}</a>${index < song.singers.length - 1 && ', '}
                                                                    `
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <span class="playlist__song-time media__content">${song.time}</span>
                                                    <div class="playlist__song-option song--tab media__right hide-on-mobile">
                                                        <div class="playlist__song-btn btn--mic option-btn">
                                                            <i class="btn--icon song__icon bi bi-mic-fill"></i>
                                                        </div>
                                                        <div class="playlist__song-btn btn--heart option-btn">
                                                            <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                                                        </div>
                                                        <div class="playlist__song-btn option-btn">
                                                            <i class="btn--icon bi bi-three-dots"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            `
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="charts__expand">
                            <button class="button charts__expand-btn">Xem top 100</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    renderPost() {
        postLists.forEach((postList, postIndex) => {
            postList.innerHTML = app.html`
                ${this.posts[postIndex].map((post, index) => {
                    return app.html`
                        <div class="story__item mb-30">
                            <div class="story__item-container">
                                <div class="story__item-header">
                                    <div class="row__item-info media story__header-info">
                                        <div class="media__left">
                                            <div class="media__thumb is-rounded mr-10" style="background: url('${post.authorAvatar}') no-repeat center center / cover"></div>
                                            <div class="media__info">
                                                <div class="media__info-header">
                                                    <div class="info__title is-active is-oneline">${post.name}</div>
                                                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                                                    <span class="follow-btn">Quan tâm</span>
                                                </div>
                                                <p class="info__time">
                                                    <a href="#" class="is-active">${post.time}</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="story__header-content">
                                        <span>${post.content}</span>
                                    </div>
                                </div>
                                <div class="row__item-display br-5 story__item-display">
                                    <div 
                                        class=
                                        "
                                            story__item-img 
                                            ${postIndex === 0 && index < 2 && 'img--rec'}
                                            ${postIndex === 0 && index === 2 && 'img--rec-vertical'}
                                            ${postIndex === 0 && index === 3 && 'img--square'}
                                            ${postIndex === 0 && index === 4 && 'img--rec'}
                                            ${postIndex === 1 && index < 4 && 'img--square'}
                                            ${postIndex === 1 && index === 4 && 'img--rec'}
                                        " 
                                        style="background: url('${post.image}') no-repeat center center / cover">
                                    </div>
                                </div>
                                <div class="story__item-action">
                                    <div class="action-btn story-btn--heart">
                                        <i class="btn--icon icon--heart bi bi-heart"></i>
                                        <span class="action__number">${Math.floor(Math.random() * 1000)}</span>
                                    </div>
                                    <div class="action-btn story-btn--comment">
                                        <i class="btn--icon icon--comment bi bi-chat-dots"></i>
                                        <span class="action__number">${Math.floor(Math.random() * 100)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                })}
            `
        })
    },


    render : function() {
        // Render songs
        this.renderSong()

        // Render playlist
        this.renderPlaylist()

        // Render albums
        this.renderAlbum()
        
        // Render MV
        this.renderMV()

        //Render artist
        this.renderArtist()

        // Render Modal
        this.renderModalTheme()

        // Render explore slide
        this.renderExploreSlide()

        // Render Radio
        this.renderRadios()

        // Render Label
        this.renderLabels()

        // Render singerSlide
        this.renderSingerSlide()

        // Render event
        this.renderEvent()

        // Render new playlist
        this.renderNewPlaylist()

        // Render favorite artist
        this.renderFavArtist()

        // Render brand
        this.renderBrand()

        //Render special playlist
        this.renderSpecialPlaylist()

        // Render normal playlist
        this.renderNormalPlaylist()

        // Render tab charts
        this.renderTabCharts()

        //Render post
        this.renderPost()

        this.scrollToActiveSong();

    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },


    handleEvents: function() {
        const _this = this;
        const playBtns = Array.from($$('.btn-toggle-play.btn--play-song'));
        const listThemes = Array.from($$('.theme__container .theme__list'));
        const singerSlideMove = $('.tab--explore .singer-slide--container .singer__slide-move');
        const followingSingerSlideMove = $('.tab--following .singer-slide--container .singer__slide-move');
        const listSingersBtns = $$('.tab--explore .singer__slide-move .slide__move-btn');
        const followingListSingerBtns = $$('.tab--following .singer__slide-move .slide__move-btn');
        const slideMove = $('.explore__slide--container .explore__slide-move');
        const newPlaylistMove = $('.container__header-actions.new-playlist--move');
        const favArtistMove = $('.container__header-actions.fav-artist--move');
        const chartExpandBtn = $('.button.charts__expand-btn');
        const chartSongContainer = $('.row.chart--container');
        const storyActions = Array.from($$('.story__item-action'))


        // hide and visible shadow of subnav on sidebar
        sidebarSubnav.onscroll = (e) => {
            const scrollTop = sidebarSubnav.scrollY || sidebarSubnav.scrollTop
            if(scrollTop > 10) {
                sidebarSubnav.classList.add('has-mask')
            } else {
                sidebarSubnav.classList.remove('has-mask')
            }
        }


        // Set background for header when scroll
        appContainers.forEach(appContainer => {
            appContainer.onscroll = function() {
                const scrollTop = appContainer.scrollY || appContainer.scrollTop;
                if(scrollTop > 5) {
                    Object.assign(header.style, {
                        backgroundColor: 'var(--layout-bg)',
                        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.08)',
                    })
                } else {
                    Object.assign(header.style, {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    })
                }
            }
        })

        // Handle when click play
        playBtns.forEach(playBtn => {
            playBtn.onclick = function() {
                if(_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
        })

        // Handle when click play all
        playAllBtns.forEach(playAllBtn => {
            playAllBtn.onclick = function() {
                _this.currentIndex = 0;
                const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`)
                _this.loadCurrentSong();
                Array.from($$('.playlist__list-song.active')).forEach(songActive => {
                    songActive.classList.remove('active');
                })
                Array.from(songActives).forEach(songActive => {
                    songActive.classList.add('active');
                })
                _this.loadCurrentSong();
                _this.scrollToActiveSong();
                audio.play();
            }
        })

        // When the song is played
        audio.onplay = function() {
            const songActives = Array.from($$('.playlist__list-song.active'))
            _this.isPlaying = true;
            songActives.forEach(songActive => {
                songActive.classList.add('playing')
            })
            player.classList.add('playing');
            playerInfos.forEach(playerInfo => {
                playerInfo.classList.add('playing')
            })
            popUpCdThumbAnimate.play();
            _this.titleAnimate(songAnimateTitles[0]).play();
            _this.titleAnimate(songAnimateTitles[1]).play();
        }
        
        // When the song is paused
        audio.onpause = function() {
            const songActives = Array.from($$('.playlist__list-song.active'))
            _this.isPlaying = false;
            songActives.forEach(songActive => {
                songActive.classList.remove('playing')
            })
            player.classList.remove('playing');
            playerInfos.forEach(playerInfo => {
                playerInfo.classList.remove('playing')
            })
            popUpCdThumbAnimate.pause();
        }

        // Handle next song when audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
            } else {
                nextBtns[0].click();
            }
            audio.play();
        }


        // When the song progress changes
        audio.ontimeupdate = function(e) {
            if (audio.duration) {
                if(!_this.isSeeking) {
                    const listDurationTime = $('.playlist__list-song.active .playlist__song-time')
                    trackTimes.forEach(trackTime => {
                        trackTime.innerHTML = _this.audioCalTime(audio.currentTime);
                    })
                    progress.forEach(progressChild => {
                        progressChild.value = Math.round(audio.currentTime / audio.duration * 100);
                    })
                    progressTracks.forEach(progressTrack => {
                        progressTrack.style.width = Math.round(audio.currentTime / audio.duration * 100) + '%';
                    })
                    if(listDurationTime.innerText === '--/--' || listDurationTime.innerText === '') {
                        _this.durationList[_this.currentPlaylist].splice(_this.currentIndex, 1, _this.audioCalTime(audio.duration))
                        localStorage.setItem(DURATION_STORAGE_KEY, JSON.stringify(_this.durationList));
                        listDurationTime.innerHTML = _this.durationList[_this.currentPlaylist][_this.currentIndex];
                        durationTimes.forEach(durationTime => {
                            durationTime.innerHTML = _this.durationList[_this.currentPlaylist][_this.currentIndex];
                        })
                    }
                }
            } else {
                // Handling when seek
                progress.forEach(progressChild => {
                    progressChild.onchange = function(e) {
                        const seekTime = e.target.value * audio.duration / 100;
                        audio.currentTime = seekTime;
                    }
                })
            }
        }
        
        // Method 2 to seek
        function currentTime() {
            if(_this.isSeeking) {
                let seekTime;
                progress.forEach(progressChild => {
                    progressChild.oninput = (e) => {
                        seekTime = e.target.value * audio.duration / 100;
                        progressTracks.forEach(progressTrack => {
                            progressTrack.style.width = e.target.value + '%';
                        })
                        trackTimes.forEach(trackTime => {
                            trackTime.innerHTML = _this.audioCalTime(seekTime);
                        })
                    }
                })
            }
        }

        progress.forEach(progressChild => {
            progressChild.onmousemove = currentTime;
            progressChild.addEventListener('touchmove', currentTime);
        })


        function seekStart() {
            if(audio.duration) {
                _this.isSeeking = true;
            }
        }

        function seekEnd() {
            _this.isSeeking = false;
        }

        // progressBlock.addEventListener('touchstart', seekStart);
        progress.forEach(progressChild => {
            progressChild.onmousedown = seekStart;
            progressChild.ontouchstart = seekStart;
        })

        progress.forEach(progressChild => {
            progressChild.onmouseup = seekEnd;
            progressChild.ontouchend = seekEnd;
        })


        

        //  Handle CD spins / stops
        _this.smoothAnimation(popUpCdThumb)
        const popUpCdThumbAnimate = popUpCdThumb.animate([
            { transform: 'rotate(360deg)'}
        ], {

            duration: 15000, // 10000 seconds
            iterations: Infinity,
        })
        popUpCdThumbAnimate.pause()
        
        

        // When next song
        nextBtns.forEach(nextBtn => {
            nextBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.nextSong();
                }
                audio.play();
                _this.renderSong()
                // _this.scrollToActiveSong();
            }
        })

        // When prev song
        prevBtns.forEach(prevBtn => {
            prevBtn.onclick = function() {
                if(_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.prevSong();
                }
                audio.play();
                _this.renderSong()
                // _this.scrollToActiveSong();
            };
        })

        // Handling on / off random song
        randomBtns.forEach(randomBtn => {
            randomBtn.onclick = function() {
                _this.isRandom = !_this.isRandom;
                _this.setConfig('isRandom', _this.isRandom)
                randomBtns.forEach(randomBtn => {
                    randomBtn.classList.toggle('active', _this.isRandom)
                })
            }
        })

        // Single-parallel repeat processing
        repeatBtns.forEach(repeatBtn => {
            repeatBtn.onclick = function() {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig('isRepeat', _this.isRepeat)
                repeatBtns.forEach(repeatBtn => {
                    repeatBtn.classList.toggle('active', _this.isRepeat)
                })
            }
        })





        // Handle click on player
        player.onclick = (e) => {
            const authorNode = e.target.closest('.player__container .player__song-info.media .player__song-author.info__author')
            const actionNode = e.target.closest('.player__container .player__song-info.media .media__right')
            const controlNode = e.target.closest('.player__container .player__control-btn')
            const progressNode = e.target.closest('.player__container .progress-block')
            const optionNode = e.target.closest('.player__container .player__options-container')
            const popUpNode = e.target.closest('.player .player__popup')
            const popDownBtn = e.target.closest('.popup__action-btn.btn--pop-down')
            if(!player.classList.contains('open-popup') &&!actionNode &&!authorNode && !controlNode && !progressNode && !optionNode && !popUpNode) {
                player.classList.add('open-popup')
            }
            // Handle close pop-up window
            if(popUpNode) {
                if(popDownBtn) {
                    player.classList.remove('open-popup')
                }
            }
        }

        // Listen to playlist clicks
        songLists.forEach(songList => {
            songList.onclick = function(e) {
                const checkNode = e.target.closest('.playlist__list-song:not(.active) .playlist__song-check')
                const songNode = e.target.closest('.playlist__list-song:not(.active)');
                const optionNode = e.target.closest('.playlist__song-option')
                const heartIconBtn = e.target.closest('.song-btn--heart');
                const micIconBtn = e.target.closest('.btn--mic')

                if(songNode && !optionNode && !checkNode) {
                    // Handle when clicking on the song
                    if(songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`)
                        _this.loadCurrentSong();
                        Array.from($$('.playlist__list-song.active')).forEach(songActive => {
                            songActive.classList.remove('playing')
                            songActive.classList.remove('active');
                        })
                        Array.from(songActives).forEach(songActive => {
                            songActive.classList.add('active');
                        })
                        audio.play();
                    }
                }


                //Handle when click on song checkbox
                if(checkNode) {
                    checkNode.onclick = function(e) {
                        const inputCheck = e.target.closest('.playlist__song-check').querySelector('.mr-10')
                        e.target.closest('.playlist__list-song').classList.toggle('active', inputCheck.checked)
                    }
                }

    
                // Handle when clicking on the song option
                if(optionNode) {
                
                }
                // Handle when click on icons heart
                if(heartIconBtn) {
                    const heartIcon = heartIconBtn.firstElementChild
                    if(heartIcon.classList.contains('primary')) heartIcon.classList.replace('bi-heart-fill', 'bi-heart')
                    else heartIcon.classList.replace('bi-heart', 'bi-heart-fill')
                    heartIcon.classList.toggle('primary')
                }

                //Handle when click on icons micro
                if(micIconBtn) {
                    const micIcon = micIconBtn.firstElementChild
                    micIcon.classList.toggle('primary')
                }
            }
        })

        //Handle adjust volume change
        function changeVolume(index) {
            if(audio.volume * 100 != volumes[index].value) {
                audio.volume = volumes[index].value / 100;
                volumeTracks.forEach(volumeTrack => {
                    volumeTrack.style.width = volumes[index].value + '%';
                })
                _this.setConfig('currentVolume', volumes[index].value)
                if (!audio.volume) {
                    volumeIcons.forEach(volumeIcon => {
                        volumeIcon.classList.replace('bi-volume-up', 'bi-volume-mute');
                    })
                } else {
                    volumeIcons.forEach(volumeIcon => {
                        volumeIcon.classList.replace('bi-volume-mute', 'bi-volume-up')
                    })
                }
            }
        }

        volumeBtns.forEach((volumeBtn, index) => {
            volumeBtn.onclick = (e) => {
                let currentVolume;
                if(audio.volume > 0) {
                    currentVolume = 0;
                } else {
                    if(volumes[index].value > 0) {
                        currentVolume = volumes[index].value
                    } else {
                        currentVolume = 100;
                        volumes.forEach(volume => {
                            volume.value = 100;
                        })
                    }
                }
                audio.volume = currentVolume / 100;
                volumeTracks.forEach(volumeTrack => {
                    volumeTrack.style.width = currentVolume + '%';
                })
                _this.setConfig('currentVolume', currentVolume)
                if (!audio.volume) {
                    volumeIcons.forEach(volumeIcon => {
                        volumeIcon.classList.replace('bi-volume-up', 'bi-volume-mute');
                    })
                } else {
                    volumeIcons.forEach(volumeIcon => {
                        volumeIcon.classList.replace('bi-volume-mute', 'bi-volume-up')
                    })
                }
            }
        })

        
        volumes.forEach((volume, index) => {
            volume.onchange = function(e) {
                changeVolume(index);
            }
            volume.onmousedown = (e) => {
                _this.isChangeVolume = true;
            }
            volume.onmouseup = () => {
                _this.isChangeVolume = false;
            }
            volume.onmousemove = function(e) {
                if(_this.isChangeVolume === true) {
                    changeVolume(index);
                    e.stopPropagation();
                }
            }
            // Use addEventListener to fix the bug when the first loading
            volume.addEventListener('touchstart', function(e) {
                _this.isChangeVolume = true;
            })
            volume.addEventListener('touchend', function(e) {
                _this.isChangeVolume = false;
            })
            volume.addEventListener('touchmove', function(e) {
                if(_this.isChangeVolume === true) {
                    changeVolume(index);
                    e.stopPropagation();
                }
            })
        })


        //Handle slide show
        let imgIndex = 2;
        function slideShow() {
            const slideImgFirst = $('.container__slide-item.first')
            const slideImgSecond = $('.container__slide-item.second')
            const slideImgThird = slideImgs[imgIndex]
            const slideImgFourth = slideImgs[imgIndex === slideImgs.length -1 ?  0 : imgIndex + 1]
            slideImgFourth.classList.replace('fourth', 'third')
            slideImgThird.classList.replace('third', 'second')
            slideImgSecond.classList.replace('second', 'first')
            slideImgFirst.classList.replace('first', 'fourth')
            imgIndex++;
            if(imgIndex >= slideImgs.length) { //imgIndex: 0-7, slideImgs.length: 8
                imgIndex = 0;
            }
            setTimeout(slideShow, 2000)
        }

        slideShow();


        
        // Handle when click on navbar
        navbarItems.forEach((navbarItem, index) => {
            navbarItem.onclick = function() {
                $('.content__navbar-item.active').classList.remove('active')
                navbarItem.classList.add('active')
                
                $('.container__tab.active').classList.remove('active')
                containerTabs[index].classList.add('active')
            }
        })

        Array.from(headerNavTitles).forEach((headerNavTitle,index) => {
            headerNavTitle.onclick = (e) => {
                appContainers[0].scrollTop = 0
                $('.content__navbar-item.active').classList.remove('active')
                navbarItems[index + 1].classList.add('active')

                $('.container__tab.active').classList.remove('active')
                containerTabs[index + 1].classList.add('active')
            }
        })


        //***  Handle when click button move Album, Playlist, MV and Artist on tab HOME
        // Playlist
        
        playlistScrollBtns[0].onclick = function() {
            _this.showSlides(-5, 0, playlistLists[0], playlistScrollBtns)
        }

        playlistScrollBtns[1].onclick = function() {
            _this.showSlides(5, 0, playlistLists[0],playlistScrollBtns)
        }

        // Album
        albumScrollBtns[0].onclick = function() {
            _this.showSlides(-5, 1, albumLists[0],albumScrollBtns)
        }

        albumScrollBtns[1].onclick = function() {
            _this.showSlides(5, 1, albumLists[0],albumScrollBtns)
        }

        // MV
        mvScrollBtns[0].onclick = function() {
            _this.showSlides(-3, 2, mvLists[0],mvScrollBtns)
        }
        
        mvScrollBtns[1].onclick = function() {
            _this.showSlides(3, 2, mvLists[0],mvScrollBtns)
        }

        // Artist
        artistScrollBtns[0].onclick = function() {
            _this.showSlides(-5, 3, artistLists[0],artistScrollBtns)
        }

        artistScrollBtns[1].onclick = function() {
            _this.showSlides(5, 3, artistLists[0],artistScrollBtns)
        }

        // Explore radio
        exploreRadioMoveBtns[0].onclick = function() {
            _this.showSlides(-7, 4, radioLists[0], exploreRadioMoveBtns)
        }

        exploreRadioMoveBtns[1].onclick = function() {
            _this.showSlides(7, 4, radioLists[0], exploreRadioMoveBtns)
        }

        // Radio in tab Radio
        radioTabMoveBtns[0].onclick = function() {
            _this.showSlides(-7, 8, radioLists[1], radioTabMoveBtns)
        }

        radioTabMoveBtns[1].onclick = function() {
            _this.showSlides(7, 8, radioLists[1], radioTabMoveBtns)
        }


        
        // Handle when click on Playlist Item
        const playlistItems = $$('.tab-home .playlist--container .row__item.item--playlist:not(.playlist--create)')
        Array.from(playlistItems).forEach((playlist, index) => {
            playlist.onclick = (e) => {
                const playlistBtn = e.target.closest('.btn--play-playlist')
                _this.loadCurrentPlaylist(playlistBtn, index)
            }
        })

        const tabPlaylistItems = $$('.tab-playlist .playlist--container .row__item.item--playlist:not(.playlist--create)')
        Array.from(tabPlaylistItems).forEach((playlist, index) => {
            playlist.onclick = (e) => {
                const playlistBtn = e.target.closest('.btn--play-playlist')
                _this.loadCurrentPlaylist(playlistBtn, index)
            }
        })



        
        // Handle when click on icons heart
        const heartIconBtns = $$('.btn--heart');
        Array.from(heartIconBtns).forEach(heartIconBtn => {
            heartIconBtn.onclick = (e) => {
                const heartIcon = heartIconBtn.firstElementChild
                if(heartIcon.classList.contains('primary')) heartIcon.classList.replace('bi-heart-fill', 'bi-heart')
                else heartIcon.classList.replace('bi-heart', 'bi-heart-fill')
                heartIcon.classList.toggle('primary')
            }
        })

        //Open and close modal theme
        navThemeBtn.onclick = (e) => {
            modalTheme.classList.add('open')
        }

        modalTheme.onclick = (e) => {
            const themeContainer = e.target.closest('.modal-theme .modal-container')
            if(themeContainer) {
                e.stopPropagation()
            } else {
                modalTheme.classList.remove('open')
            }
        }
        closeModalBtn.onclick = (e) => {
            modalTheme.classList.remove('open')
        }


        // Handle change theme method
        listThemes.forEach((listTheme,themeIndex) => {
            listTheme.onclick = (e) => {
                const applyThemeBtn = e.target.closest('.theme__actions-btn.btn--apply-theme')
                const previewBtn = e.target.closest('.theme__actions-btn.btn--preview')
                const themeItem = e.target.closest('.theme__container-item')
                if(themeItem && (applyThemeBtn || previewBtn)) {
                    const currentTheme = Number(themeItem.dataset.index)
                    if(applyThemeBtn) {
                        _this.loadThemeBg(themeIndex, currentTheme)
                        _this.setConfig('themeList', themeIndex)
                        _this.setConfig('currentTheme', currentTheme)
                        closeModalBtn.onclick()
                    }
                    if(previewBtn) {
                        _this.loadThemeBg(themeIndex, currentTheme)
                    }
                }
            }
        })

        document.onclick = (e) => {
            navSettingMenu.classList.remove('open')
            logOutBtn.classList.remove('open')
        }

        // Handle when click on setting menu
        navSettingMenu.onclick = (e) => {
            e.stopPropagation();
        }

        //Handle when click log out button
        logOutBtn.onclick = (e) => {
            e.stopPropagation();
        }

        // Handle when click setting button
        navSettingBtn.onclick = (e) => {
            e.stopPropagation()
            navSettingMenu.classList.toggle('open')
        }

        // Handle when click on log out option
        logOutOption.onclick = (e) => {
            e.stopPropagation()
            logOutBtn.classList.toggle('open')
        }

        // Handle when click on header search history
        searchHistory.onmousedown = (e) => {
            e.preventDefault()
        }


        // Handle when click on expand sidebar button on tablet
        sidebarExpandBtn.onclick = (e) => {
            sidebar.classList.add('expand');
        }
        sidebarShrinkBtn.onclick = (e) => {
            sidebar.classList.remove('expand')
        }



        // Handle when click on sidebar items 
        sidebarNavItems.forEach((sidebarNavItem, index) => {
            sidebarNavItem.onclick = (e) => {
                Object.assign(header.style, {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                })
                $('.app__container.active').classList.remove('active')
                appContainers[index].classList.add('active')

                $('.sidebar__nav .sidebar__nav-item.active').classList.remove('active')
                sidebarNavItem.classList.add('active')
                appContainers[index].scrollTop = 0;
            }
        })

        // Handle when click on sidebar subnav
        sidebarSubnavItems.forEach(subnavItem => {
            subnavItem.onclick = (e) => {
                showNotificationToast('Xin lỗi ! Hiện tại website chưa được hoàn thiện người dùng vui lòng thông cảm ')
            }
        })


        // Handle when click on explore slide show move buttons
        function exploreSlideShow() {
            _this.nextSlide();
            let autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
            slideMove.onclick = (e) => {
                const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
                const nextBtn = e.target.closest('.slide__move-btn.btn--next')
                
                if(prevBtn) {
                    _this.prevSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
    
                if(nextBtn) {
                    _this.nextSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000)
                }
            }
           
        }
        
        exploreSlideShow()


        // Singer slide on explore tab
        function singerSlideShow(step, order, index, listBtns) {
            // Automatic slide
            if(_this.scrollToRight[order] === true) {
                _this.showSlides(step, order, singerSlideContainers[index], listBtns)
            } else {
                _this.showSlides(-step, order, singerSlideContainers[index], listBtns)
            }
            let singerSlideId = setTimeout(function() {
                singerSlideShow(step, order, index, listBtns)
            }, 4000)


            singerSlideContainers.forEach(singerSlideContainer => {
                singerSlideContainer.ontouchmove = (e) => {
                    clearTimeout(singerSlideId)
                    singerSlideId = setTimeout(function() {
                        singerSlideShow(step, order, index, listBtns)
                    }, 4000)
                }
            })
            // Handle when click on singer slide move buttons
            if(order === 5) {
                singerSlideMove.onclick = (e) => {
                    const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
                    const nextBtn = e.target.closest('.slide__move-btn.btn--next')
                    if(nextBtn) {
                        _this.showSlides(step, order, singerSlideContainers[index], listBtns)
                        clearTimeout(singerSlideId)
                        singerSlideId = setTimeout(function() {
                            singerSlideShow(step, order, index, listBtns)
                        }, 4000)
                    }
                    if(prevBtn) {
                        _this.showSlides(-step, order, singerSlideContainers[index], listBtns)
                        clearTimeout(singerSlideId)
                        singerSlideId = setTimeout(function() {
                            singerSlideShow(step, order, index, listBtns)
                        }, 4000)
                    }
                }
            }

            if(order === 9) {
                followingSingerSlideMove.onclick = (e) => {
                    const prevBtn = e.target.closest('.slide__move-btn.btn--prev')
                    const nextBtn = e.target.closest('.slide__move-btn.btn--next')
                    if(nextBtn) {
                        _this.showSlides(step, order, singerSlideContainers[index], listBtns)
                        clearTimeout(singerSlideId)
                        singerSlideId = setTimeout(function() {
                            singerSlideShow(step, order, index, listBtns)
                        }, 4000)
                    }
                    if(prevBtn) {
                        _this.showSlides(-step, order, singerSlideContainers[index], listBtns)
                        clearTimeout(singerSlideId)
                        singerSlideId = setTimeout(function() {
                            singerSlideShow(step, order, index, listBtns)
                        }, 4000)
                    }
                }
            }
        }

        // Depend on width of the screen
        if(App.offsetWidth >= 1024) {
            singerSlideShow(5, 5, 0, listSingersBtns)
            singerSlideShow(5, 9, 1, followingListSingerBtns)
        } else if(App.offsetWidth >= 740 && App.offsetWidth < 1024) {
            singerSlideShow(4, 5, 0, listSingersBtns)
            singerSlideShow(4, 9, 1, followingListSingerBtns)
        } else {
            singerSlideShow(3, 5, 0, listSingersBtns)
            singerSlideShow(3, 9, 1, followingListSingerBtns)
        }

        // New playlist slide
        function newPlaylistSlideShow(step) {
            // Automatic slide
            if(_this.scrollToRight[6] === true) {
                _this.showSlides(step, 6, newPlaylistLists[0], newPlaylistMoveBtns)
            } else {
                _this.showSlides(-step, 6, newPlaylistLists[0], newPlaylistMoveBtns)
            }
            let newPlaylistId = setTimeout(function() {
                newPlaylistSlideShow(step)
            }, 4000)

            newPlaylistLists.forEach(newPlaylistList => {
                newPlaylistList.ontouchmove = (e) => {
                    clearTimeout(newPlaylistId)
                    newPlaylistId = setTimeout(function() {
                        newPlaylistSlideShow(step)
                    }, 4000)
                }
            })

            // Handle when click on new playlist slide move buttons
            newPlaylistMove.onclick = (e) => {
                const prevBtn = e.target.closest('.move-btn--new-playlist.btn--prev')
                const nextBtn = e.target.closest('.move-btn--new-playlist.btn--next')
                if(nextBtn) {
                        _this.showSlides(step, 6, newPlaylistLists[0], newPlaylistMoveBtns)
                        clearTimeout(newPlaylistId)
                        newPlaylistId = setTimeout(function() {
                            newPlaylistSlideShow(step)
                        }, 4000)
                }
                if(prevBtn) {
                        _this.showSlides(-step, 6, newPlaylistLists[0], newPlaylistMoveBtns)
                        clearTimeout(newPlaylistId)
                        newPlaylistId = setTimeout(function() {
                            newPlaylistSlideShow(step)
                        }, 4000)
                }
            }
        }

        // Depend on width of the screen
        if(App.offsetWidth >= 1024) {
            newPlaylistSlideShow(3)
        } else if(App.offsetWidth >= 740 && App.offsetWidth < 1024) {
            newPlaylistSlideShow(2)
        } else {
            newPlaylistSlideShow(1)
        }

        // Favorite artist slide
        function favArtistSlideShow(step) {
            // Automatic slide
            if(_this.scrollToRight[7] === true) {
                _this.showSlides(step, 7, favArtistLists[0], favArtistMoveBtns)
            } else {
                _this.showSlides(-step, 7, favArtistLists[0], favArtistMoveBtns)
            }
            let favArtistId = setTimeout(function() {
                favArtistSlideShow(step)
            }, 4000)

            favArtistLists.forEach(favArtist => {
                favArtist.ontouchmove = (e) => {
                    clearTimeout(favArtistId)
                    favArtistId = setTimeout(function() {
                        favArtistSlideShow(step)
                    }, 4000)
                }
            })

            // Handle when click on new playlist slide move buttons
            favArtistMove.onclick = (e) => {
                const prevBtn = e.target.closest('.move-btn--fav-artist.btn--prev')
                const nextBtn = e.target.closest('.move-btn--fav-artist.btn--next')
                if(nextBtn) {
                        _this.showSlides(step, 7, favArtistLists[0], favArtistMoveBtns)
                        clearTimeout(favArtistId)
                        favArtistId = setTimeout(function() {
                            favArtistSlideShow(step)
                        }, 4000)
                }
                if(prevBtn) {
                        _this.showSlides(-step, 7, favArtistLists[0], favArtistMoveBtns)
                        clearTimeout(favArtistId)
                        favArtistId = setTimeout(function() {
                            favArtistSlideShow(step)
                        }, 5000)
                }
            }
        }

        // Depend on width of the screen
        if(App.offsetWidth >= 1024) {
            favArtistSlideShow(3)
        } else {
            favArtistSlideShow(2)
        }



        //****** Tab charts
        // Handle when click on expand btn
        chartExpandBtn.onclick = (e) => {
            chartSongContainer.classList.add('expand-song');
        }


        // ****** Tab following
        storyActions.forEach(storyAction => {
            storyAction.onclick = (e) => {
                const btnHeart = e.target.closest('.story-btn--heart .btn--icon.icon--heart')
                const btnComment = e.target.closest('.story-btn--comment .btn--icon.icon--comment')
                if(btnHeart) {
                    const numberNode = btnHeart.parentElement.querySelector('.action__number')
                    const numberLike = numberNode.innerText
                    if(btnHeart.classList.contains('primary')) {
                        btnHeart.classList.remove('primary')
                        btnHeart.classList.replace('bi-heart-fill', 'bi-heart')
                        numberNode.innerText = Number(numberLike) - 1
                    } else {
                        btnHeart.classList.add('primary')
                        btnHeart.classList.replace('bi-heart', 'bi-heart-fill')
                        numberNode.innerText = Number(numberLike) + 1
                    }
                }
                if(btnComment) {
                    showNotificationToast('Tính năng hiện tại chưa được cập nhật, bạn vui lòng thông cảm!')
                }
            }
        })


    },

    loadCurrentSongPlaylist (index) {
        this.songs = this.songPlaylists[index]
        this.currentIndex = 0
        this.loadCurrentSong();
        this.renderSong()
        audio.play()
    },

    loadCurrentPlaylist(playlistBtn, index) {
        if(playlistBtn) {
            if(index < 4) {
                this.currentPlaylist = index;
                this.loadCurrentSongPlaylist(this.currentPlaylist)
                this.setConfig('currentPlaylist', this.currentPlaylist)
                this.scrollToActiveSong();
            } else {
                showNotificationToast('Trang web hiện tại chưa hoàn thiện, bạn vui lòng chọn 4 playlist đã được cập nhật!')
            }
        }
    },
    

    loadCurrentSong: function() {
        songAnimateTitles.forEach(songAnimateTitle => {
            songAnimateTitle.innerHTML = app.html`
                    <div class="title__item">${this.currentSong.name}</div>
                    <div class="title__item">${this.currentSong.name}</div>
            `;
        })
        popUpSongName.innerText = this.currentSong.name
        authors.forEach(author => {
            author.innerHTML = app.html`
                ${this.currentSong.singer.map((singer, index) => {
                    return app.html`<a href="#" class="is-ghost">${singer}</a>${index < this.currentSong.singer.length - 1 && ', '}`
                })}
            
            `;
        })
        
        popUpSongAuthor.innerHTML = app.html`
            ${this.currentSong.singer.map((singer, index) => {
                return app.html`<a href="#" class="is-ghost">${singer}</a>${index < this.currentSong.singer.length - 1 && ', '}`
            })}
        `;

        this.setPlayerInfoWidth()
        popUpCdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        cdThumbs.forEach(cdThumb => {
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        })
        audio.src = `${this.currentSong.path}`;
        durationTimes.forEach(durationTime => {
            durationTime.innerHTML = this.durationList[this.currentPlaylist][this.currentIndex];          
        })
        this.setConfig('currentIndex', this.currentIndex);
    },

    setPlayerInfoWidth() {
        // const animateTitleItems = $$('.player__title-animate .title__item')
        const playerSongTitles = Array.from($$('.player__song-title.info__title'))
        playerSongTitles.forEach(playerSongTitle => {
            playerSongTitle.style.width = songAnimateTitles[0].offsetWidth / 2 + 'px'
        })
        this.slideTitleWidth = playerSongTitles[0].offsetWidth;
        
    },

    // Handle title runs/stops
    titleAnimate(title) {
        // Smooth Animation
        this.smoothAnimation(title)
        const titleAnimate = title.animate([
            {transform: 'translate(0px)'},
            {transform: `translateX(-${this.slideTitleWidth}px)`}
        ], {
            duration: 21 * this.slideTitleWidth,
            iterations: Infinity,
        })
        titleAnimate.pause()
        return titleAnimate
    },
    
    audioCalTime: function(time) {
        let minute;
        let second;
        if(time) {
            minute = Math.floor(time / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            second = Math.floor(time % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        } else {
            minute = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
            second = (0).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        }
        return `${minute}:${second}`;
    },

    smoothAnimation(element) {
            element.style.willChange = 'transform, opacity';
    },

    loadConfig: function() {
        this.isRandom = this.config.isRandom || false;
        this.isRepeat = this.config.isRepeat || false;
        this.currentIndex = this.config.currentIndex || 0;
        this.currentPlaylist = this.config.currentPlaylist || 0;
        this.themeList = this.config.themeList || 0;
        this.currentTheme = this.config.currentTheme || 0;
        this.loadThemeBg(this.themeList, this.currentTheme);
        audio.volume = this.config.currentVolume == 0 ? 0 : this.config.currentVolume / 100 || 1;
        if (!audio.volume) {
            volumeIcons.forEach(volumeIcon => {
                volumeIcon.classList.replace('bi-volume-up', 'bi-volume-mute');
            })
        }
        volumes.forEach(volume => {
            volume.value = this.config.currentVolume == 0 ? 0 : this.config.currentVolume || 100;
        })
        volumeTracks.forEach(volumeTrack => {
            volumeTrack.style.width = (this.config.currentVolume == 0 ? 0 : this.config.currentVolume || 100) + '%';
        })
        durationTimes.forEach(durationTime => {
            durationTime.textContent = this.audioCalTime(this.durationList[this.currentPlaylist][this.currentIndex]);
        })
        randomBtns.forEach(randomBtn => {
            randomBtn.classList.toggle('active', this.isRandom);
        })
        repeatBtns.forEach(repeatBtn => {
            repeatBtn.classList.toggle('active', this.isRepeat);
        })
    },

    loadThemeBg(themeListIndex, currentTheme) {
        const currentThemeColor = this.themes[themeListIndex][currentTheme].colors
        document.documentElement.style.setProperty('--bg-content-color', currentThemeColor.bgContentColor)
        document.documentElement.style.setProperty('--border-box', currentThemeColor.borderBox)
        document.documentElement.style.setProperty('--border-primary', currentThemeColor.borderPrimary)
        document.documentElement.style.setProperty('--layout-bg', currentThemeColor.layoutBg)
        document.documentElement.style.setProperty('--link-text-hover', currentThemeColor.linkTextHover)
        document.documentElement.style.setProperty('--modal-scrollbar', currentThemeColor.modalScrollbar)
        document.documentElement.style.setProperty('--player-bg', currentThemeColor.playerBg)
        document.documentElement.style.setProperty('--purple-primary', currentThemeColor.purplePrimary)
        document.documentElement.style.setProperty('--primary-bg', currentThemeColor.primaryBg)
        document.documentElement.style.setProperty('--sidebar-popup-bg', currentThemeColor.sidebarPopupBg)
        document.documentElement.style.setProperty('--text-color', currentThemeColor.textColor)
        document.documentElement.style.setProperty('--text-item-hover', currentThemeColor.textItemHover)
        document.documentElement.style.setProperty('--text-secondary', currentThemeColor.textSecondary)
        document.documentElement.style.setProperty('--navigation-text', currentThemeColor.navigationText)
        document.documentElement.style.setProperty('--placeholder-text', currentThemeColor.placeholderText)

        if(this.themes[themeListIndex][currentTheme].image) {
            App.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`;
            playerPopUp.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`;
            App.classList.add('has__theme-img')
        } else {
            App.style.backgroundImage = 'none';
            playerPopUp.style.backgroundImage = 'none';
            App.classList.remove('has__theme-img')
        }
        if(this.themes[themeListIndex][currentTheme].playerImage) {
            player.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`
            playerPopUpFooter.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`
        } else {
            player.style.backgroundImage = 'none'
            playerPopUpFooter.style.backgroundImage = 'none'
        }


    },

    setUpRender: function() {
        this.songs = this.songPlaylists[this.currentPlaylist]
        if(this.durationList[this.currentPlaylist].length === 0) {
            this.songs.forEach((song, index) => this.durationList[this.currentPlaylist].push('--/--'))
        }
    },

    prevSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide--container .explore__slide-item'))
        $('.explore__slide-item.next').classList.remove('next')
        $('.explore__slide-item.prev').classList.remove('prev')
        const firstSlide = $('.explore__slide-item.first')
        const secondSlide = $('.explore__slide-item.second')
        const thirdSlide = $('.explore__slide-item.third')
        const fourthSlide = $('.explore__slide-item.fourth')
        const sixthSlide = $('.explore__slide-item.sixth')
        const fifthSlideIndex = slideMoveItems.indexOf(sixthSlide) === 0 ? slideMoveItems.length - 1 : slideMoveItems.indexOf(sixthSlide) - 1;
        const fifthSlide =  slideMoveItems[fifthSlideIndex]

        firstSlide.classList.replace('first', 'second')
        secondSlide.classList.replace('second', 'third')
        thirdSlide.classList.add('prev')
        thirdSlide.classList.replace('third', 'fourth')
        fourthSlide.classList.replace('fourth', 'fifth')
        fifthSlide.classList.replace('fifth', 'sixth')
        sixthSlide.classList.add('next')
        sixthSlide.classList.replace('sixth', 'first')
    },

    nextSlide: function() {
        const slideMoveItems = Array.from($$('.explore__slide--container .explore__slide-item'))
        $('.explore__slide-item.next').classList.remove('next')
        $('.explore__slide-item.prev').classList.remove('prev')
        const firstSlide = $('.explore__slide-item.first')
        const secondSlide = $('.explore__slide-item.second')
        const thirdSlide = $('.explore__slide-item.third')
        const fourthSlide = $('.explore__slide-item.fourth')
        const sixthSlide = $('.explore__slide-item.sixth')
        const fifthSlideIndex = slideMoveItems.indexOf(fourthSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(fourthSlide) + 1;
        const fifthSlide =  slideMoveItems[fifthSlideIndex]

        firstSlide.classList.add('prev')
        firstSlide.classList.replace('first', 'sixth')
        secondSlide.classList.replace('second', 'first')
        thirdSlide.classList.replace('third', 'second')
        fourthSlide.classList.add('next')
        fourthSlide.classList.replace('fourth', 'third')
        fifthSlide.classList.replace('fifth', 'fourth')
        sixthSlide.classList.replace('sixth', 'fifth')
    },

    nextSong: function() {
        this.currentIndex++;
            if(this.currentIndex >= this.songs.length) {
                this.currentIndex = 0;
            }
        this.loadCurrentSong();
    },

    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },

    playRandomSong: function() {
        let newIndex
    
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex || this.indexArray.includes(newIndex))
        this.indexArray.push(newIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        if(this.indexArray.length === this.songs.length) {
            this.indexArray = [];
        }
    },

    scrollToActiveSong: function() {
        setTimeout(function() {
            Array.from($$('.playlist__list-song.active')).forEach(songActive => {
                songActive.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                })
            })
        }, 200)
    },

    getSlideIndex(step, slideOrder, listItems, listBtn) {
        this.slideIndexs[slideOrder] += step;
        if(this.slideIndexs[slideOrder] + step > listItems.length - 1) {
            this.slideIndexs[slideOrder] = listItems.length - 1;
            listBtn[1].classList.add('button--disabled')
            listBtn[0].classList.remove('button--disabled')
            this.scrollToRight[slideOrder] = false;
        } else if (this.slideIndexs[slideOrder] + step < 0) {
            this.slideIndexs[slideOrder] = 0;
            listBtn[0].classList.add('button--disabled')
            listBtn[1].classList.remove('button--disabled')
            this.scrollToRight[slideOrder] = true;
        } else {
            listBtn[0].classList.remove('button--disabled')
            listBtn[1].classList.remove('button--disabled')
        }
    },

    showSlides(step, slideOrder, listContainer, listBtn) {
        const listItems = $$(this.slideSelectors[slideOrder])
        this.getSlideIndex(step, slideOrder, listItems, listBtn)
        const currentIndex = Math.floor(this.slideIndexs[slideOrder] / Math.abs(step))
        // Scroll Into View
        listContainer.scrollLeft = listContainer.offsetWidth * currentIndex
 
    },

    // getSlideIndex(currentIndex, slideOrder, listItems, step) {
    //     if (currentIndex + step > listItems.length) {
    //         this.slideIndexs[slideOrder] = listItems.length;
    //         this.scrollToRight[slideOrder] = false;
    //     }
    //     if (currentIndex + step < 1) {
    //         this.slideIndexs[slideOrder] = 1;
    //         this.scrollToRight[slideOrder] = true;
    //     }
    //     return currentIndex
    // },

    // pickSlides(step, slideOrder, listBtns) {
    //     const listItems = $$(this.slideSelectors[slideOrder])

    //     const currentIndex = this.getSlideIndex(this.slideIndexs[slideOrder] += step, slideOrder, listItems, step);
    //     if (currentIndex + step > listItems.length) {
    //         listBtns[1].classList.add('button--disabled')
    //         listBtns[0].classList.remove('button--disabled')
    //     } else if (currentIndex + step < 1) {
    //         listBtns[0].classList.add('button--disabled')
    //         listBtns[1].classList.remove('button--disabled')
    //     } else {
    //         Array.from(listBtns).forEach(itemBtn => {
    //             itemBtn.classList.remove('button--disabled')
    //         })
    //     }
    //     // Scroll Into View
    //     if( this.scrollToRight[slideOrder] === true) {
    //         listItems[this.slideIndexs[slideOrder] - 1].scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'nearest',
    //             inline: 'start'
    //         })
    //     } else if (this.scrollToRight[slideOrder] === false) {
    //         listItems[this.slideIndexs[slideOrder] - 1].scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'nearest',
    //             inline: 'end'
    //         })
    //     }
    // },



    start: function() {
        // Setup duration time to render
        this.setUpRender()

        // Assign configuration from config to application
        this.loadConfig();
        
        // Define properties for the object
        this.defineProperties();
        
        // Render playlist
        this.render();

        // Load the first song information into the UI when running the app
        this.loadCurrentSong();
        
        // Listening / handling events (DOM events)
        this.handleEvents();
        
    }

}


app.start();