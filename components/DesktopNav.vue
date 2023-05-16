<template>
    <nav class="nav">
        <div class="logo">
            <img src="../assets/images/Mask group.png" alt="">
        </div>
        <ul>
            <li ><a href="/">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="contact">Contact</a></li>
        </ul>

        <div>
            <a href="/login"><button class="btn">Sign in</button></a>
            <a href="/started"><button class="btn2">Sign Up</button></a>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    *, 
    ::before, 
    ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
    }

    a {
        color: white;
        transition: all 0.3s linear;
    }

    a:hover, .btn:hover{
        color: #FFB74C;
    }

    .btn2{
    background: #FFB74C;
    border-radius: 20px 0px 20px 20px;
    width: 135px;
    height: 45px;
    align-items: center;
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
  }

  ul{
    display: flex;
    justify-content: space-between;
    color: #fff;
  }

  li{
    padding-left: 32px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
  }

  .btn{
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    padding-right: 33px;
    transition: all 0.3s linear;
  }

  .btn2 {
    transition: all 0.3s linear;
  }

  .btn2:hover {
    background: #865203;
  }

  @media only screen and (max-width: 900px){
    .nav {
      display: none;
    }
  }
</style>