<template>
  <div class="navbar" id="nav">
    <router-link class="brand" to="/">
      <h3>Coba To Do</h3>
    </router-link>
    <nav>
      <router-link :to="{ name: 'todo-list' }">List</router-link>
      <router-link :to="{ name: 'todo-create' }">Create</router-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #ccc;
  display: flex;
  max-width: 600px;
  width: 100%;
  margin: 30px auto 15px auto;
  .brand {
    flex-basis: 50%;
    display: inline-block;
    font-size: 24px;
    h3 {
      color: #1978e4;
      margin: 15px 0;
    }
  }
  nav {
    flex-basis: 50%;
    text-align: right;
    a {
      margin: 25px 10px;
      display: inline-block;
      color: #999;
      &.active {
        color: #1978e4;
      }
    }
  }
}
</style>
