export const nodes = {
    preloader: document.querySelector('[data-prelaoder]'),
    gameContainer: document.querySelector('[data-game-container]'),
    choiseContainer: document.querySelector('[data-choise-container]'),
    imgHero: document.querySelector('[data-hero-img]'),
    nextBtn: document.querySelector('[data-next]'),
    previousBtn: document.querySelector('[data-previous]'),
    playBtn: document.querySelector('[data-play]'),
    hero: document.querySelector('[data-hero]'),
    progressBars: document.querySelectorAll('[data-progress-bar]'),
    healthProgress: document.querySelector('[data-health]'),
    drowsinessProgress: document.querySelector('[data-drowsiness]'),
    thirstProgress: document.querySelector('[data-thirst]'),
    cleanlinessProgress: document.querySelector('[data-cleanliness]'),
    hungerProgress: document.querySelector('[data-hunger]'),
    friendshipProgress: document.querySelector('[data-friendship]'),
    ageProgress: document.querySelector('[data-age]'),
    petText: document.querySelector('[data-age-text]'),
    notification: document.querySelector('[data-notification]'),
    cure: document.querySelector('[data-cure]'),
    sleep: document.querySelector('[data-sleep]'),
    drinking: document.querySelector('[data-drinking]'),
    clean: document.querySelector('[data-clean]'),
    feed: document.querySelector('[data-feed]')
}

export const mainVariable = {
    pet: undefined,
    heroName: undefined,
    desireTimer: undefined,
    canClick: true
}

export const heroesImg = [
    './images/cat-0.png',
    './images/chick-0.png',
    './images/leveret-0.png',
];

export const images = {
    'cat': [
        './images/cat-0.png',
        './images/cat-1.png',
        './images/cat-2.png',
        './images/cat-3.png',
        './images/cat-4.png',
        './images/cat-5.png'
    ],
    'chick': [
        './images/chick-0.png',
        './images/chick-1.png',
        './images/chick-2.png',
        './images/chick-3.png',
        './images/chick-4.png',
        './images/chick-5.png'
    ],
    'leveret': [
        './images/leveret-0.png',
        './images/leveret-1.png',
        './images/leveret-2.png',
        './images/leveret-3.png',
        './images/leveret-4.png',
        './images/leveret-5.png'
    ]
}