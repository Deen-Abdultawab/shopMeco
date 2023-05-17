<template>
 <div>
  <header>
    <div class="navbars">
      <DesktopNav />
      <Navbar class="mobile-nav"/>
    </div>
    <div class="main-container">
    <div>  
       <div class="body">
          <div class="about-article">
            <h1>Our Story</h1>
            <p>
              Give your car the right service it needs with a unique automechanic 
              shop that links you with the best, competent and effective tecnicians.
            </p>
    
            <a href="/started"><button class="btn3">Get Started</button></a>
          </div>
          <div class="about-img">
            <div class="img-box1">
              <img src="../assets/images/Rectangle27.png" alt="" class="overlay1">
              <img src="../assets/images/man.png" alt="" class="img1">
            </div>
    
            <div class="img-box2">
              <div>
                <img src="../assets/images/Rectangle 27 (1).png" alt="" class="overlay2">
                <img src="../assets/images/woman.png" alt=""  class="img2">
              </div>
            </div>
        </div>
      </div>
    </div>
   </div>
  </header>
  <Mission/>
  <Technisians/>
  <Footer/>
 </div>
</template>

<script>
import DesktopNav from '~/components/DesktopNav.vue';
import Navbar from '@/components/Navbar.vue'

export default {
  components: { DesktopNav, Navbar }
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap');
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
      
  *, 
  ::before, 
  ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  .mobile-nav {
    display: none;
  }

  header {
    background: url(../assets/images/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  .main-container{
    padding: 0 70px;
    padding-top: 15px;
    margin-bottom: 100px;
  }


   .btn3{
    background: #FFB74C;
    border-radius: 30px 0px 30px 30px;
    width: 212px;
    height: 60px;
    margin-top: 30px;
    align-items: center;
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    transition: all 0.3s linear;
  }

  .btn3:hover {
    background: #865203;
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

 .body{
    padding-top: 90px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 3rem;
    position: relative;
  }

  .img-box1, .img-box2 {
    position: relative;
  }

  .img-box1 img, .img-box2 img {
    max-width: 100%;
  }

  .about-img {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  .about-article {
    padding-top: 4rem;
  }

  .overlay1, .overlay2 {
    position: absolute;
    max-width: 100%;
  }

   .img2 {
    margin-left: 1rem;
    margin-top: 15rem;
  }

  .overlay1 {
    z-index: 99;
    top: -1.3rem;
    left: -1.3rem;
  }

  .overlay2 {
    z-index: 99;
    right: 0;
    top: 13rem;
    left: -1.3rem;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 63px;
    color: #FFFFFF;
    /* width: 729px; */
  }

   .body p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #DAD2EA;
    width: 100%;
    padding-top: 20px;
  }

  @media only screen and (max-width: 1000px){
  .main-container {
    padding: 15px 50px 0;
  }

}

  @media only screen and (max-width: 900px) {

    header {
      background: url(../assets/images/bg2.png);
      max-height: 700px;
      margin-bottom: 200px;
    }
    .mobile-nav {
      display: block;
    }

    .body {
      gap: 2rem;
      grid-template-columns: 1fr;
      place-items: center;
    }

    .about-article {
      text-align: center;
      margin-bottom: 3.5rem;
    }

    .about-img {
      gap: 2rem;
    }

    .img2 {
      margin-top: 0;
    }

    .overlay2 {
      top: -1.3rem;
    }

  }

    @media only screen and (max-width: 600px) {
      .body {
      padding-top: 30px;
    }

    .main-container {
      padding: 0 30px;
    }
  }
    
</style>