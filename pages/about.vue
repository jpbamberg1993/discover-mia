<template>
  <div class="about bg-img">
    <nuxt-link :to="{ name: 'interest' }" class="xmark">
      <img src="~/assets/x-mark.svg" alt="close about page" />
    </nuxt-link>
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

<style scoped>
.about {
  padding: 0 20px;
}
.hr {
  height: 1px;
}
.xmark {
  justify-self: right;
}
p {
  line-height: 1.7;
  color: white;
}
</style>
