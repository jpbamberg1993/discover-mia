<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
:root {
  --black: #030303;
  --pink: #e984b5;
}

@font-face {
  font-family: 'Caviar Dreams';
  src: url('~static/fonts/CaviarDreams.ttf');
}

html {
  font-family: 'Caviar Dreams', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: var(--black);
}

a {
  color: white;
  text-decoration: none;
}

img {
  max-width: 100vw;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.bg-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~assets/mountains-bg.png');
  background-size: cover;
  height: 100vh;
  display: grid;
}
</style>
