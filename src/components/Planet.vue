<template>
  <div>
    <main>
      <section class="mobile-links">
        <div class="planet-changer-mobile">
          <p class="overview" @click="planetSwaper($event)">overview</p>
        </div>
        <div class="planet-changer-mobile">
          <p class="structure" @click="planetSwaper($event)">structure</p>
        </div>
        <div class="planet-changer-mobile">
          <p class="geology" @click="planetSwaper($event)">surface</p>
        </div>
      </section>

      <div class="grid">
        <div class="planet-img" ref="planetsPhone">
          <img
            v-show="showPlanet == 1"
            :src="require('../assets/planets/' + changePlanet.images.planet)"
            :alt="changePlanet.name"
            class="animate__animated animate__fadeInLeft"
          />
          <img
            v-show="showPlanet == 2"
            :src="require('../assets/planets/' + changePlanet.images.internal)"
            :alt="changePlanet.name"
            class="animate__animated animate__fadeInLeft"
          />
          <img
            class="planet-thumbnail animate__animated animate__fadeIn animate__delay-1s"
            v-show="showThumbnail"
            :src="require('../assets/planets/' + changePlanet.images.geology)"
            :alt="changePlanet.name"
          />
        </div>

        <div class="planet-infos">
          <div class="planet-texts">
            <h2>{{ changePlanet.name }}</h2>
            <p class="planet-description">
              {{ changePlanet.overview.content }}
            </p>
            <p class="planet-source">
              Source: <a :href="changePlanet.overview.source" target="_blank">Wikipedia</a>
              <img src="../assets/icon-source.svg" alt="#" />
            </p>
          </div>
          <div class="planet-links" ref="planetsPc" @click="planetSwaper($event)">
            <div class="planet-changer">
              <p class="overview" :class="{ active: p1 }"><span>01</span>overview</p>
            </div>
            <div class="planet-changer">
              <p class="structure" :class="{ active: p2 }"><span>02</span>internal structure</p>
            </div>
            <div class="planet-changer">
              <p class="geology" :class="{ active: p3 }"><span>03</span>surface geology</p>
            </div>
          </div>
        </div>
      </div>
      <section class="planet-metrics">
        <div class="metric">
          <p>rotation time</p>
          <h3>{{ changePlanet.rotation }}</h3>
        </div>
        <div class="metric">
          <p>revolution time</p>
          <h3>{{ changePlanet.revolution }}</h3>
        </div>
        <div class="metric">
          <p>radius</p>
          <h3>{{ changePlanet.radius }}</h3>
        </div>
        <div class="metric">
          <p>average temp</p>
          <h3>{{ changePlanet.temperature }}</h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import data from '/data.json';
export default {
  name: 'PlanetPage',
  data() {
    return {
      colorTheme: null,
      planets: data,
      changePlanet: null,
      showPlanet: 1,
      showThumbnail: false,
      isAnimate: false,
      positions: {
        bottom: null,
        left: null,
      },
      // Toggle 'active' class for planets overviews links
      p1: true,
      p2: false,
      p3: false,
    };
  },
  created() {
    this.changePlanet = this.planets.find((n) => n.name == this.$route.name);
    this.colorTheme = this.planets.find((n) => n.name == this.$route.name).color;
    console.log(this.positions);
  },
  methods: {
    planetSwaper(e) {
      const el = e.target.classList;
      this.showThumbnail = false;
      this.removeClass();
      if (el == 'structure') {
        this.showPlanet = 2;
        this.p2 = true;
        this.isAnimate = true;
      } else if (el == 'geology') {
        this.showThumbnail = true;
        this.showPlanet = 1;
        this.p3 = true;
        this.isAnimate = true;
      } else {
        this.showPlanet = 1;
        this.p1 = true;
        this.isAnimate = true;
      }
    },
    removeClass() {
      this.p1 = false;
      this.p2 = false;
      this.p3 = false;
    },
  },
};
</script>

<style scoped>
.animate__animated.animate__fadeInLeft {
  --animate-duration: 1.5s;
}

main {
  --clr-theme: v-bind('colorTheme');
}
.mobile-links {
  display: none;
}

h2,
h3,
h4 {
  font-weight: 500;
  text-transform: uppercase;
  color: var(--clr-white);
}

h2 {
  font-size: var(--h1-size);
  line-height: var(--h1-line);
  margin: 0 0 2rem 0;
}

p {
  color: var(--clr-tans-white);
  line-height: var(--body-line);
  font-size: var(--body-size);
  font-weight: 400;
}

.grid,
.planet-metrics {
  max-width: 1130px;
  margin: auto;
}

.grid {
  margin: 4.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.planet-img {
  margin: 0 0 2.5rem 7rem;
  position: relative;
}

.planet-thumbnail {
  max-width: 158px;
  position: absolute;
  bottom: -120px;
  left: 50%;
  /* bottom: v-bind('positions.bottom');
  left: v-bind('positions.left'); */
  transform: translate(-50%, 0);
}

.planet-description {
  max-width: 20em;
}

.planet-source {
  margin: 1.5rem 0 0 0;
  color: var(--clr-light-grey);
}

.planet-source a {
  color: var(--clr-tans-white);
  margin: 0 0.5rem;
  text-decoration: underline;
}

.planet-changer {
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  border: 1px solid var(--clr-dark-grey);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.planet-changer p {
  font-size: 16px;
  color: var(--clr-white);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
  width: 100%;
  padding: 0.7rem 0 0.7rem 1.5rem;
}

.planet-changer span {
  color: var(--clr-light-grey);
  margin: 0 2rem 0 0;
}

.planet-changer:hover {
  background-color: var(--clr-dark-grey);
}

.active {
  background-color: var(--clr-theme);
}

.planet-metrics {
  display: flex;
  justify-content: space-between;
  padding: 3rem 0 0 0;
  margin-top: 3rem;
}

.metric {
  border: 1px solid var(--clr-dark-grey);
  width: 255px;
  padding: 1rem 1.5rem;
}

.metric p {
  color: var(--clr-light-grey);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: var(--h4-spacing);
}

.metric h3 {
  font-size: 35px;
  margin: 0.8rem 0;
}

@media screen and (max-width: 1024px) {
  .grid,
  .planet-metrics {
    max-width: 95%;
  }
  .grid {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .planet-img {
    margin: 0 0 5rem 0;
  }
  .planet-infos {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .planet-description {
    max-width: 25em;
  }
  .planet-metrics {
    margin-top: 0;
  }
  .metric {
    width: 164px;
    padding: 1rem 0 1rem 1rem;
  }
  .metric p {
    font-size: 12px;
  }
  .metric h3 {
    font-size: 25px;
  }
  .planet-img {
    margin: 0 0 10rem 0;
  }
}
@media screen and (max-width: 768px) {
  .grid,
  .planet-metrics {
    max-width: 97%;
  }
}

@media screen and (max-width: 735px) {
  .planet-changer p {
    font-size: 14px;
  }

  .planet-changer span {
    margin: 0 0.7rem 0 0;
  }
  .planet-changer {
    padding: 0.7rem 0 0.7rem 1rem;
  }
  .planet-description {
    max-width: 22em;
  }
}

@media screen and (max-width: 660px) {
  .mobile-links {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--clr-dark-grey);
    border-top: 1px solid var(--clr-dark-grey);
  }

  .mobile-links .planet-changer-mobile {
    cursor: pointer;
    width: 100%;
    text-align: center;
    display: block;
    position: relative;
  }

  .mobile-links .planet-changer-mobile p {
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: var(--clr-light-grey);
    font-weight: 400;
    font-size: 14px;
    padding: 1.5rem 0;
  }

  .mobile-links .planet-changer-mobile::before {
    content: '';
    height: 3px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -3px;
    background-color: var(--clr-theme);
    position: absolute;
    opacity: 0;
    transition: 0.3s;
  }

  .mobile-links .planet-changer-mobile:hover {
    color: var(--clr-white);
  }

  .mobile-links .planet-changer-mobile:hover::before {
    opacity: 1;
  }

  .grid,
  .planet-metrics {
    max-width: 90%;
  }

  .planet-thumbnail {
    max-width: 158px;
    position: absolute;
    bottom: -100px;
    left: 50.5%;
    transform: translate(-50%, 0);
  }

  .planet-img {
    margin: 0 0 7.5rem 0;
  }

  .planet-links {
    display: none;
  }

  .planet-infos {
    justify-content: center;
  }

  .planet-texts {
    text-align: center;
  }

  .planet-metrics {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .metric {
    width: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@keyframes appearing {
  0% {
    left: 0;
    opacity: 1;
  }
  50% {
    left: -1000px;
  }
  100% {
    display: none;
  }
}
</style>
