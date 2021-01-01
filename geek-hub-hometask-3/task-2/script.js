import { nodes, mainVariable, heroesImg, images } from "./variables.js";

(function () {
  // shutting down nodes preloader
  let shuttingDownTimer = setTimeout(() => {
    nodes.preloader.classList.remove('visibility');
    clearTimeout(shuttingDownTimer);
  }, 3000);

  // displaying choise container after preload
  function showingConatiner() {
    let displayingTimer = setTimeout(() => {
      nodes.choiseContainer.classList.remove('hidden');
      nodes.choiseContainer.classList.add('emerge');
      clearTimeout(displayingTimer);
    }, 2500);
  }

  // smooth transition to transparency and visibility
  function showingAnimation(node) {
    node.classList.remove('emerge');
    node.classList.add('to-hide');
    let transitionTimer = setTimeout(() => {
      node.classList.remove('to-hide');
      node.classList.add('emerge');
      clearTimeout(transitionTimer);
    }, 500);
  }

  // selecting hero
  function changingHero(e) {
    if (mainVariable.canClick) {
      mainVariable.canClick = false;
      if (e.target.innerHTML === 'Next') {
        const currentImg = nodes.imgHero.getAttribute('src');
        for (let i = 0; i  < heroesImg.length; i++) {
          if (currentImg === heroesImg[i]) {
            if (i < heroesImg.length - 1) {
              showingAnimation(nodes.imgHero);
              let toNextTimer = setTimeout(() => {
                nodes.imgHero.setAttribute('src', heroesImg[i + 1]);
                clearTimeout(toNextTimer);
              }, 500);
            } else {
              showingAnimation(nodes.imgHero);
              let toNextTimer = setTimeout(() => {
                nodes.imgHero.setAttribute('src', heroesImg[0]);
                clearTimeout(toNextTimer);
              }, 500);
            }
          }
        }
      }
      else {
        const currentImg = nodes.imgHero.getAttribute('src');
        for (let i = 0; i  < heroesImg.length; i++) {
          if (currentImg === heroesImg[i]) {
            if (i === 0) {
              showingAnimation(nodes.imgHero);
              let toPrevTimer = setTimeout(() => {
                nodes.imgHero.setAttribute('src', heroesImg[heroesImg.length - 1]);
                clearTimeout(toPrevTimer);
              }, 500);
            } else {
              showingAnimation(nodes.imgHero);
              let toPrevTimer = setTimeout(() => {
                nodes.imgHero.setAttribute('src', heroesImg[i - 1]);
                clearTimeout(toPrevTimer);
              }, 500);
            }
          }
        }
      }
      let onClickTimer = setTimeout(() => {
        mainVariable.canClick = true;
        clearTimeout(onClickTimer);
      }, 1000);
    }
  }

  class Pet {
    constructor(name) {
      this.name = name;
        this.health = 100;
        this.drowsiness = 100;
        this.thirst = 100;
        this.cleanliness = 100;
        this.hunger = 100;
        this.friendship = 100;
        this.age = 0;
        this.days = 0;
    }
    gameOver(message) {
        nodes.progressBars.forEach((node) => node.style.display = 'none');
        nodes.notification.textContent = message;
        nodes.notification.classList.remove('hidden');
        clearInterval(mainVariable.desireTimer);
    }
    growUp () {
        if (this.days < 100) {
            this.days = this.days + 4;
            nodes.ageProgress.style.width = `${this.days}%`;
        } else {
          this.days = 0;
          this.age++;
          let imageTimer = setTimeout(() => {
            nodes.hero.setAttribute('src', images[this.name][this.age]);
            clearTimeout(imageTimer);
          }, 500);
          // changing image every one year/evolution
          if (this.age < images[this.name].length-1) {
            showingAnimation(nodes.hero);
            nodes.petText.textContent = this.age;
          } else {
            showingAnimation(nodes.hero);
            showingAnimation(nodes.notification);
            let winTimer = setTimeout(() => {
              this.gameOver('Great, you raised your pet!');
              clearTimeout(winTimer);
            }, 500);
          }
        }
    }
    sicken () {
        if (this.health > 0) {
            this.health = this.health - 2;
            nodes.healthProgress.style.width = `${this.health}%`;
        }
    }
    cure () {
      if (this.health < 100) {
          this.health = this.health + 2;
          nodes.healthProgress.style.width = `${this.health}%`;
      }
    }
    fatigue () {
        if (this.drowsiness > 0) {
            this.drowsiness = this.drowsiness - 2;
            nodes.drowsinessProgress.style.width = `${this.drowsiness}%`;
        }
    }
    sleep () {
      if (this.drowsiness < 100) {
          this.drowsiness = this.drowsiness + 2;
          nodes.drowsinessProgress.style.width = `${this.drowsiness}%`;
      }
    }
    wantToDrink () {
        if (this.thirst > 0) {
            this.thirst = this.thirst - 4;
            nodes.thirstProgress.style.width = `${this.thirst}%`;
        }
    }
    drinking () {
      if (this.thirst < 100) {
          this.thirst = this.thirst + 4;
          nodes.thirstProgress.style.width = `${this.thirst}%`;
      }
    }
    getsDirty () {
        if (this.cleanliness > 0) {
            this.cleanliness = this.cleanliness - 2;
            nodes.cleanlinessProgress.style.width = `${this.cleanliness}%`;
        }
    }
    clean () {
      if (this.cleanliness < 100) {
          this.cleanliness = this.cleanliness + 2;
          nodes.cleanlinessProgress.style.width = `${this.cleanliness}%`;
      }
    }
    wantsToEat () {
        if (this.hunger > 0) {
            this.hunger = this.hunger - 4;
            nodes.hungerProgress.style.width = `${this.hunger}%`;
        }
    }
    feed () {
      if (this.hunger < 100) {
          this.hunger = this.hunger + 4;
          nodes.hungerProgress.style.width = `${this.hunger}%`;
      }
    }
    deterioration () {
        if (this.friendship > 0) {
            if (this.health === 0
                || this.drowsiness === 0
                || this.cleanliness === 0
                || this.hunger === 0
                || this.thirst === 0
            ) {
                this.friendship = this.friendship - 10;
                nodes.friendshipProgress.style.width = `${this.friendship}%`;
            }
        } else {
          nodes.notification.classList.add('emerge');
            this.gameOver('Your pet is gone from you!');
        }
    }
  }

  function handlerCure() {
    mainVariable.pet.cure();
  }

  function handlerSleep() {
    mainVariable.pet.sleep();
  }

  function handlerDrinking() {
    mainVariable.pet.drinking();
  }

  function handlerClean() {
    mainVariable.pet.clean();
  }

  function handlerFeed() {
    mainVariable.pet.feed();
  }

  function revivalHero() {  
    mainVariable.pet = new Pet(mainVariable.heroName);
    mainVariable.desireTimer = setInterval(() => {
      mainVariable.pet.growUp();
      mainVariable.pet.sicken();
      mainVariable.pet.fatigue();
      mainVariable.pet.wantToDrink();
      mainVariable.pet.getsDirty();
      mainVariable.pet.wantsToEat ()
      mainVariable.pet.deterioration();
    }, 1000);
  }

  // start new game with chose Hero
  function startingGame () {
    if (mainVariable.canClick) {
      mainVariable.canClick = false;
      nodes.choiseContainer.classList.remove('emerge');
      nodes.choiseContainer.classList.add('to-hide');
      let visibleTimer = setTimeout(() => {
        nodes.choiseContainer.classList.remove('to-hide');
        nodes.choiseContainer.classList.add('hidden');
        nodes.preloader.classList.add('visibility');
        clearTimeout(visibleTimer);
      }, 500);
      const imageHeroLink = nodes.imgHero.getAttribute('src');
      mainVariable.heroName = imageHeroLink.split('./images/')[1].split('-0.png')[0];
      nodes.hero.setAttribute('src', imageHeroLink);
      let hiddenTimer = setTimeout(() => {
        nodes.gameContainer.classList.remove('hidden');
        nodes.gameContainer.classList.add('emerge');
        clearTimeout(hiddenTimer);
      }, 2500);
      revivalHero();
    }
  }

  // adding event listener
  nodes.nextBtn.addEventListener('click', changingHero);
  nodes.previousBtn.addEventListener('click', changingHero);
  nodes.playBtn.addEventListener('click', startingGame);
  nodes.cure.addEventListener('click', handlerCure);
  nodes.sleep.addEventListener('click', handlerSleep);
  nodes.drinking.addEventListener('click', handlerDrinking);
  nodes.clean.addEventListener('click', handlerClean);
  nodes.feed.addEventListener('click', handlerFeed);
  window.addEventListener('load', showingConatiner);
}());