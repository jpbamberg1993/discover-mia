<template>
  <div class="cuisine">
    <div class="header">
      <div>
        <i class="arrow left"></i>
      </div>
      <img src="~/assets/logo.svg" alt="Discover Miami Logo" class="logo" />
      <h1 class="country-title">{{ country.name.toUpperCase() }}</h1>
    </div>
    <div class="sub-header">
      <img src="~assets/knife-fork.svg" alt="knife and fork icon" class="title-icon" />
      <h2 class="title-text">Cuisine</h2>
    </div>
    <div class="search-wrapper">
      <img src="~/assets/search-icon.svg" alt="search icon" class="search-icon" />
      <input type="search" placeholder="Search for restaurants" name="search" class="search-field" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    country() {
      return this.$store.getters['countries/getCurrentCountry']
    },
  },
}
</script>

<style scoped>
.cuisine {
  background: white;
  display: grid;
  grid-auto-rows: min-content;
  height: 100vh;
}
.logo {
  width: 100px;
}
.arrow {
  border: solid var(--pink);
  border-width: 2px 0 0 2px;
  display: inline-block;
  padding: 15px;
}
.left {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.country-title {
  color: var(--blue);
  font-size: 33px;
}
.header {
  background: var(--black);
  display: grid;
  grid-template-columns: 50px 1fr auto;
  align-items: center;
  padding: 0 20px;
}
.sub-header {
  background: var(--pink);
  box-shadow: 0 0 15px 3px var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-text {
  font-family: 'Misses';
  color: white;
  font-size: 37px;
}
.title-icon {
  max-width: 40px;
}
.search-wrapper {
  border: 1px solid var(--pink);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  height: 40px;
  margin: 40px 10px;
  padding: 7px 5px 3px;
}
.search-icon {
  width: 40px;
}
.search-field {
  border: none;
  flex: 1;
  margin-bottom: 3px;
}
::placeholder {
  color: var(--grey);
  font-size: 20px;
  font-family: 'Caviar Dreams';
}
input[type='search'] {
  font-size: 20px;
  outline: none;
}
</style>
