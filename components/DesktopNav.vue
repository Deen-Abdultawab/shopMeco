<template>
  <nav class="nav">
    <div class="logo">
      <img src="../assets/images/Mask group.png" alt="" />
    </div>
    <ul class="nav-links">
      <li>
        <router-link :to="{ name: 'index' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </li>
    </ul>

    <div class="nav-btns">
      <a href="/login"><button class="btn">Sign in</button></a>
      <a href="/started"><button class="btn2">Sign Up</button></a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  z-index: 9999;
}

.nav-links a {
  transition: all 0.3s linear;
  color: #fff;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
}

.nav-links a:hover,
.btn:hover {
  color: #ffb74c;
}



.btn2 {
  background: #ffb74c;
  border-radius: 20px 0px 20px 20px;
  width: 135px;
  height: 45px;
  align-items: center;
  color: #fff;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
}

.btn {
  color: #fff;
  font-family: "Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  transition: all 0.3s linear;
}

.btn2 {
  transition: all 0.3s linear;
}

.btn2:hover {
  background: #865203;
}

.nav-links,
.nav-btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
}

@media only screen and (max-width: 900px) {
  .nav {
    display: none;
  }
}
</style>
