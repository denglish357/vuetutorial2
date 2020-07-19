export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  // ANOTHER THING WE USE GETTERS FOR IS FILTERING
  getAllCats: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'cat'
    })
  }
}
