<template>
  <div>
    <Banner />
    <div class="bg-img">
      <CountryTitle :name="country.name" />
      <div class="activity-buttons">
        <img src="~/assets/history.svg" alt="History Button" class="history-button" />
        <nuxt-link :to="{ name: 'cuisine' }">
          <img src="~/assets/cuisine.svg" alt="Cuisine Button" />
        </nuxt-link>
        <img src="~/assets/activities.svg" alt="Activities Button" />
        <img src="~/assets/concerts.svg" alt="Concerts Button" />
        <img src="~/assets/landmark.svg" alt="Landmarks Button" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/banner'
import CountryTitle from '@/components/country-title'

export default {
  components: {
    Banner,
    CountryTitle,
  },
  computed: {
    country() {
      return this.$store.getters['countries/getCurrentCountry']
    },
  },
}
</script>

<style scoped>
.activity-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  margin-top: 30px;
  row-gap: 10px;
}
.bg-img {
  grid-auto-rows: min-content;
}
.history-button {
  grid-column: 1 / -1;
  justify-self: center;
}
</style>
