<template>
  <div id="app">
    <Header />
    <BookList />
  </div>
</template>

<script>
import Header from './Header';
import BookList from './components/BookList';

export default {
  name: 'App',
  components: {
    Header,
    BookList,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
