<template>
<div id="app">
  <h1 class="h1">Create a Signature</h1>
  <h3 class="h2">Use one of the following ways to create your signature</h3>
    <div id="nav">
      <router-link to="/type"><b>Type</b></router-link>
      <router-link to="/upload">Upload</router-link>
      <router-link to="/draw">Draw</router-link>
      <hr style="width:50%" size="1" color= "#2CA7E2">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.h1
{
  color: #2CA7E2 ;
}
.h2
{
  color: #848384 ;
}
.s1{
  color: red;
}

#nav {
  padding: 40px;

  a {
    font-weight: bold;
    color: black;
    margin-right: 50px;

    text-decoration: none;

    &.router-link-exact-active {
      color: #2CA7E2;
      border-bottom:4px solid #2CA7E2;
      padding-bottom: 5px;
    }
  }
}
</style>
