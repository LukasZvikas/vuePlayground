<template>
  <div class="profile__recommended-list h-100 row d-flex flex-direction-column mb-5">
    <movie-list-item v-for="(movie, index) in recommended" :key="index" :movie="movie"/>
  </div>
</template>
<script>
import fetchFactory from "../../utilities/fetch";
import { mapGetters } from "vuex";
import MovieListItem from "../../components/MovieListItem";

export default {
  components: {
    MovieListItem
  },
  props: {
    movie_id: Number
  },
  data() {
    return {
      recommended: []
    };
  },
  created() {
    const usersFavorites = this.getUserData.favorites;
    const randomId = this.createRandomSuggestion(usersFavorites);
    this.getRecommendedMovies(usersFavorites[randomId] || 500);
  },
  computed: {
    ...mapGetters(["getUserData"])
  },
  methods: {
    createRandomSuggestion(arr) {
      return Math.abs(Math.floor(Math.random() * arr.length - 1));
    },
    async getRecommendedMovies(movie_id) {
      const urlPath = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations`;

      const response = await fetchFactory({ urlPath, toApi: true });

      this.recommended = response.results.slice(0, 4);
    }
  }
};
</script>

<style lang="scss">
.profile__recommended-list {
  height: 12rem;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
}
</style>
