<template>
 <div class="contact-page">
  <header>

    <div class="navbars">
      <navbar class="mobile-nav"/>
      <DesktopNav />

    </div>
    <div class="main-container">
      <div>
          <div class="body">
            <div class="contact-article">
              <h1>Contact Us</h1>
              <p>
                Have more questions or enquires? Send us a message and we’ll get back to you as soon as possible.
              </p>

              <button class="btn3">Get Started</button>
            </div>
          
            <form action="" class="contact-form">
              <h3 >Send us a message</h3>
              <div style="margin-bottom: 30px">
                <label for="name">Your name</label>
                <br>
                <input type="text">
              </div>
              <div style="margin-bottom: 30px">
                <label for="name">Your email</label> <br>
                <input type="text">
              </div>
              <div>
                <label for="name">Your Message</label> <br>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>

              <button>Submit</button>
            </form>

      </div>
    </div>

 
  </div>
  </header>
   <Footer/>
 </div>
</template>

<script>
import DesktopNav from '~/components/DesktopNav.vue';

export default {
  components: { DesktopNav }
  
}
</script>
form button{
  width: 490px;
  height: 60px;
  background: #FFB74C;
  box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.09);
  border-radius: 30px 0px 30px 30px;
  color: #fff;
  margin-top: 40px;
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  display: block;
}
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;600;700;800&family=Licorice&display=swap');
@import url('http://fonts.cdnfonts.com/css/sofia-pro');

  * {
    box-sizing: border-box;
  }

  .contact-page {
    display: grid;
    grid-template-rows: 1fr auto;
  }

  header {
    background: url(../assets/images/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  .mobile-nav {
    display: none;
  }

  .main-container{
    padding: 0 70px;
    padding-top: 15px;
    margin-bottom: 250px;
  }

   .btn3{
    background: #FFB74C;
    border-radius: 30px 0px 30px 30px;
    width: 212px;
    height: 60px;
    margin-top: 16px;
    align-items: center;
    color: #fff;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 21px;
    transition: all 0.3s linear;
  }

  .body{
    padding-top: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: center;
    gap: 4rem;
    position: relative;
  }

  .contact-article {
    padding-top: 4rem;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 52px;
    line-height: 63px;
    color: #FFFFFF;
  }

  label {
    text-transform: capitalize;
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
 .body img{
    width: 275px;
    height: 404px;
  }
 
  form{
    background: #FFFFFF;
    box-shadow: 0px 12px 60px rgba(99, 45, 206, 0.5);
    border-radius: 20px;
    width: 100%;
    height: 704px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    margin-bottom: 4rem; 
  }
  
  form > div {
    width: 100%;
  }

  h3{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    color: #26046A;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  input{
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 55px;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }

  input:hover {
    border-color: #5007E0;
  }

  input:focus {
    outline: none;
    border-color: #5007E0;
  }

  label{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #7C7C7C;
    margin-bottom: 10px;
  }

  textarea{
    background: #FFFFFF;
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    height: 160px;
  }

  form button{
    width: 100%;
    height: 60px;
    background: #FFB74C;
    box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.09);
    border-radius: 30px 0px 30px 30px;
    color: #fff;
    margin-top: 40px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 25px;
    transition: all 0.3s linear;
  }

  form button:hover, .btn3:hover {
    background: #865203;
  }

  @media only screen and (max-width: 1000px){
  .main-container {
    padding: 15px 50px 0;
  }

}

  @media only screen and (max-width: 900px) {

    header {
       background: url(../assets/images/bg2.png);
    }

    .mobile-nav {
      display: block;
    }

    .body {
      gap: 2rem;
    }
  }

  @media only screen and (max-width: 800px) {
    .body {
      grid-template-columns: 1fr;
    }

    .main-container {
      height: 900px;
      margin-bottom: 400px;
    }

    .contact-article, .contact-form {
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-article {
      text-align: center;
      margin-bottom: 3rem;
    }
    
  }

  @media only screen and (max-width: 600px) {
    .body {
      padding-top: 30px;
    }
    .main-container {
      margin-bottom: 450px;
    }
  }
    
</style>