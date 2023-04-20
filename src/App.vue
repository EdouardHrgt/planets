<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&display=swap');
:root {
  --clr-white: hsl(0, 0%, 100%);
  --clr-black: hsl(240, 67%, 8%);
  --clr-dark-grey: hsl(240, 17%, 26%);
  --clr-light-grey: hsl(240, 6%, 54%);

  --clr-mercure: hsl(194, 48%, 49%);
  --clr-jupiter: hsl(2, 68%, 53%);
  --clr-earth: hsl(263, 67%, 51%);
  --clr-mars: hsl(263, 67%, 51%);
  --clr-neptune: hsl(222, 87%, 56%);
  --clr-saturn: hsl(17, 73%, 46%);
  --clr-uranus: hsl(169, 73%, 44%);
  --clr-venus: hsl(33, 82%, 64%);

  --h4-spacing: 1px;
  --h1-line: 103px;
}

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  box-sizing: border-box;
}



body {
  background-color: var(--clr-black);
  background-image: url('./assets/background-stars.svg');
}

#app {
  max-width: 1440px;
  min-height: 100vh;
  margin: auto;
}

h1,
h2 {
  font-family: 'Antonio', sans-serif;
}

h3,
h4,
a,
p {
  font-family: 'League Spartan', sans-serif;
}
</style>
