<template>
  <div class="header">
    <header>
      <div class="logo-menu">
        <h1>the planets</h1>
        <svg
          @click="isOpen = !isOpen"
          class="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
        >
          <g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g>
        </svg>
      </div>

      <nav>
        <ol class="header-list">
          <li v-for="planet in links" :key="planet.name">
            <router-link :to="{ name: 'planet', params: { name: planet.name } }">{{
              planet.name
            }}</router-link>
          </li>
        </ol>

        <ol class="header-list-mobile" v-if="isOpen">
          <li v-for="planet in links" :key="planet.name">
            <div class="link-ball" :style="{ backgroundColor: planet.color }"></div>
            <router-link :to="{ name: 'planet', params: { name: planet.name } }">{{
              planet.name
            }}</router-link>
            <img class="chevron" src="../assets/icon-chevron.svg" alt="chevron icon" />
          </li>
        </ol>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      links: [
        { name: 'mercury', color: 'hsl(194, 48%, 49%)' },
        { name: 'venus', color: 'hsl(33, 82%, 64%)' },
        { name: 'earth', color: 'hsl(263, 67%, 51%)' },
        { name: 'mars', color: 'hsl(10, 63%, 51%)' },
        { name: 'jupiter', color: 'hsl(2, 68%, 53%)' },
        { name: 'saturn', color: 'hsl(17, 73%, 46%)' },
        { name: 'uranus', color: 'hsl(169, 73%, 44%)' },
        { name: 'neptune', color: 'hsl(222, 87%, 56%)' },
      ],
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
header {
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 0 2rem;
  border-bottom: 1px solid var(--clr-dark-grey);
  position: relative;
}

h1 {
  color: var(--clr-white);
  font-size: 28px;
  line-height: var(--h1-line);
  text-transform: uppercase;
  font-weight: 500;
}

.hamburger {
  display: none;
  cursor: pointer;
}

ol {
  display: flex;
}

.header-list-mobile {
  display: none;
}

ol li {
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.link-ball {
  min-width: 20px;
  min-height: 20px;
  border-radius: 50%;
  display: none;
}

ol li a {
  color: hsla(0, 0%, 100%, 0.8);
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: var(--h4-spacing);
  position: relative;
  transition: 0.3s;
}

ol li a::before {
  content: '';
  height: 3px;
  width: 100%;
  top: -43px;
  background-color: var(--clr-mercure);
  position: absolute;
  opacity: 0;
  transition: 0.3s;
}

ol li a:hover {
  color: var(--clr-white);
}
ol li a:hover::before {
  opacity: 1;
}

@media screen and (max-width: 1024px) {
  header {
    justify-content: center;
    padding: 0 0 2rem 0;
    flex-direction: column;
  }

  ol li a::before {
    top: unset;
    bottom: -15px;
  }
}

@media screen and (max-width: 768px) {
  .header-list li {
    padding: 0 0.7rem;
  }
}

@media screen and (max-width: 660px) {
  header {
    padding: 0;
    border: none;
    align-items: baseline;
  }

  .logo-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  .hamburger,
  .chevron {
    display: block;
  }

  nav {
    width: calc(100% - 4rem);
    margin: auto;
  }

  .header-list {
    display: none;
  }

  .header-list-mobile {
    display: flex;
    flex-direction: column;
  }

  .header-list-mobile li {
    border-top: 1px solid var(--clr-dark-grey);
    padding: 0;
    position: relative;
  }

  .header-list-mobile li a {
    padding: 2rem 0;
    width: 100%;
  }

  ol li a:hover::before {
    opacity: 0;
  }

  .link-ball {
    display: block;
  }

  .chevron {
    position: absolute;
    right: 1rem;
  }
}
</style>
