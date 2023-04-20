<template>
  <div class="about">
    <header-bar />

    <main>
      <section class="mobile-links">
        <button>
          <p>overview</p>
        </button>
        <button>
          <p>structure</p>
        </button>
        <button>
          <p>surface</p>
        </button>
      </section>

      <div class="grid">
        <div class="planet-img">
          <img
            :src="require('../assets/planets/' + changePlanet.images.planet)"
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
          <div class="planet-links">
            <button>
              <p><span>01</span>overview</p>
            </button>

            <button>
              <p><span>02</span>internal structure</p>
            </button>
            <button>
              <p><span>03</span>surface geology</p>
            </button>
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
import HeaderBar from '@/components/Header.vue';
import data from '/data.json';
export default {
  name: 'PlanetView',
  components: {
    HeaderBar,
  },
  data() {
    return {
      planets: data,
    };
  },
  computed: {
    changePlanet() {
      return this.planets.find((n) => n.name == this.$route.params.name);
    },
  },
};
</script>

<style scoped>
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
  margin: 7rem auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.planet-img {
  margin: 0 0 0 8rem;
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

button {
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  border: 1px solid var(--clr-dark-grey);
  margin: 1rem 0;
  display: flex;
  align-items: center;
  padding: 0.7rem 0 0.7rem 1.5rem;
}

button p {
  font-size: 16px;
  color: var(--clr-white);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2.5px;
}

button span {
  color: var(--clr-light-grey);
  margin: 0 2rem 0 0;
}

button:hover {
  background-color: var(--mercure);
}

.planet-metrics {
  display: flex;
  justify-content: space-between;
  padding: 3rem 0 0 0;
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
}
@media screen and (max-width: 768px) {
  .grid,
  .planet-metrics {
    max-width: 97%;
  }
}

@media screen and (max-width: 735px) {
  button p {
    font-size: 14px;
  }

  button span {
    margin: 0 0.7rem 0 0;
  }
  button {
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

  .mobile-links button {
    border: none;
    padding: 0.7rem 0;
    display: block;
    position: relative;
  }

  .mobile-links button p {
    color: var(--clr-light-grey);
    font-weight: 400;
    font-size: 14px;
  }

  .mobile-links button::before {
    content: '';
    height: 3px;
    width: 100%;
    left: 0;
    right: 0;
    bottom: -20px;
    background-color: var(--clr-mercure);
    position: absolute;
    opacity: 0;
    transition: 0.3s;
  }

  .mobile-links button:hover {
    color: var(--clr-white);
  }

  .mobile-links button:hover::before {
    opacity: 1;
  }

  .grid,
  .planet-metrics {
    max-width: 90%;
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
</style>
