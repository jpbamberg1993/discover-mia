export const state = () => ({
  all: [
    {
      id: 1,
      name: 'argentina',
      flag: '~/assets/argentina.svg',
    },
    {
      id: 2,
      name: 'cuba',
      flag: '../assets/cuba.svg',
    },
    {
      id: 3,
      name: 'peru',
      flag: '../assets/peru.svg',
    },
    {
      id: 4,
      name: 'italy',
      flag: '../assets/italy.svg',
    },
    {
      id: 6,
      name: 'france',
      flag: '../assets/france.svg',
    },
  ],
  currentCountryId: null,
})

export const mutations = {
  setCurrentCountryId(state, id) {
    state.currentCountryId = id
  },
}

export const actions = {
  setCurrentCountryId(context, id) {
    context.commit('setCurrentCountryId', id)
  },
}

export const getters = {
  getCurrentCountry(state) {
    return state.all.find(country => country.id == state.currentCountryId)
  },
}
