<template>
  <div class="about">
    <img src="~/assets/x-mark.svg" alt="close about page" class="xmark" />
    <CountryTitle :name="country.name" />
    <hr class="hr" />
    <p>
      Peru’s culture is a set of beliefs, customs and way of life inherited from the native Incas, Spanish conquistadors
      and settlers. Immigrant groups such as Africans, Japanese, Chinese and Europeans have also contributed to the
      society, blend of cultures and ways in which Peruvians live. Whatever their ethnic background Peruvians agree on
      the importance of family and religion. In many cases generations of a family live together where the younger look
      after the elderly and help each other in difficult times.
    </p>
  </div>
</template>

<script>
import CountryTitle from '@/components/country-title'
export default {
  components: {
    CountryTitle,
  },
  computed: {
    country() {
      return this.$store.getters['countries/getCurrentCountry']
    },
  },
}
</script>

<style>
.about {
  color: white;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~assets/mountains-bg.png');
  background-size: cover;
  height: 100vh;
  display: grid;
  padding: 0 2rem;
}
.flag {
  max-width: 50px;
  margin-bottom: 20px;
}
.hr {
  height: 1px;
}
.xmark {
  justify-self: right;
}
.title {
  justify-self: center;
  display: grid;
  justify-items: center;
  grid-auto-rows: min-content;
}
h1 {
  font-size: 46px;
}
h2 {
  font-size: 26px;
  font-weight: 400;
}
p {
  line-height: 1.7;
}
</style>
