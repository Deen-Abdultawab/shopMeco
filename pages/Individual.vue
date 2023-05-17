<template>
  <div>
    <Navbar class="mobile-nav"/>
    <div class="container">
      <div class="left-col">
        <div class="logo">
          <a href="/"><img src="../assets/images/Mask group.png" alt=""></a>
        </div>

        <div class="quote">
            <img src="../assets/images/Group 3721.png" alt="">
        </div>
      </div>
      
      <div class="right-col first">
        <!-- <navbar class="mobile-nav"/> -->
        <div class="top-right">
          <div class="btn-back">
            <a href="/started" style="display:flex; align-items: center;">
            <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
          </a>
          </div>
          <div class="step">
            <h4>STEP 01/03</h4>
            <h6>Personal Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
            <h1>Register Individual Account</h1>
            <p>Your details are required to set up your account and get you going.</p>
          </div>

          <div class="one">
            <form action="">

              <div class="form-input">
                <label for="name" >
                  Your fullname<span>*</span>
                </label> 
                <br>
                <input type="text" placeholder="Tolulope Ololade" id="name" required>
              </div>

              <div class="form-input">
                <label for="mail" >
                  Email address<span>*</span>
                </label> 
                <br>
                <input type="email" placeholder="Enter email address" id="mail" required>
              </div>

              <div class="form-input">
                <label for="password">
                  Create Password<span>*</span>
                </label> 
                <br>
                <div class="password-field">
                  <input type="password" placeholder="Enter password" id="password" required>
                <button class="placeholder-span">Show</button>
                </div>

                <div class="formy">
                  <div>
                      <input type="checkbox" name="" id="" class="checkbox"> <span>I agree to <a href="#">terms & conditions</a>
                        </span> 
                  </div>

                  <div>
                    <a href="/">Forget Password?</a>
                  </div>
                </div>
              </div>    

              <button class=" btn btn1">Login</button>

              <div class="or">
                  <div class="line"></div>
                  <div class="text">OR</div>
                  <div class="line"></div>
              </div>

              <button class="btn btn2">
                <img src="../assets/images/Group 3707.png" alt="">
              </button>
            </form>

          </div>

        </div>
      </div>


        <!-- Residency info  -->

      <div class="right-col second">
        <!-- <navbar class="mobile-nav"/> -->

        <div class="top-right">
          <div class="btn-back">
            <a href="/started" style="display:flex; align-items: center;">
            <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
          </a>
          </div>
          <div class="step">
            <h4>STEP 02/03</h4>
            <h6>Residency Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
             <h1>Complete Your Profile</h1>
            <p>Your details are required to set up your account and get you going.</p>
          </div>

          <div class="one">
            <form action="">

              <div class="form-input">
                <label for="number" >
                  Your phone number
                </label> 
                <br>
                <input type="number" placeholder="Enter your phone number" id="number" required>
              </div>

              <div class="form-input">
                <label for="residence" >
                  State of residence
                </label> 
                <br>
                <select name="residence" id="residence">
                  <option value="">- - Select - -</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                </select>        
              </div>

              <div class="form-input">
                <label for="address">
                  Your address
                </label> 
                <br>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Enter your address"></textarea>
              </div> 

              <div class="bottom-right">
                <h4>Need to complete profile later? <a href="#">Click Here</a></h4>
              </div>  

              <button class=" btn btn1">Save & Continue</button>

              <div class="bottom">
                <img src="../assets/images/Group 3720.png" alt="">
              </div>
            </form>
          </div>

        </div>
      </div>


      <!-- service info  -->

       <div class="right-col third">
        <div class="top-right">
          <div class="btn-back">
            <a href="/started" style="display:flex; align-items: center;">
            <img src="../assets/images/icon.png" alt="" style="width:20px; height:20px; margin-right: 10px;"> back
          </a>
          </div>
          <div class="step">
            <h4>STEP 02/03</h4>
            <h6>Residency Info.</h6>
          </div>
        </div>

        <div class="center-form">

          <div class="log">
            <h1>Almost Done!</h1>
            <p>Your details are required to set up your account and get you going.</p>
          </div>

          <div class="one">
            <form action="">

              <div class="form-input">
                <label for="car" >
                  Your phone number
                </label> 
                <br>
                <input type="text" placeholder="Mercedez Benz" id="car" required>
              </div>

              <div class="form-input">
                <label for="model" >
                  Car Model
                </label> 
                <br>
                <select name="model" id="model">
                  <option value="">-- Select --</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                </select>
                       
              </div>

              <div class="form-input">
                <label for="service" >
                  Required Service(s)
                </label> 
                <br>
                <select name="service" id="service">
                  <option value="">-- Select --</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                  <option value="">1998</option>
                </select>
                <div class="service">
                  <span>Bodywork, airconditioning, automechanic</span>
                </div>
                       
              </div>

               

              <div class="bottom-right">
                <h4>Need to complete profile later? <a href="#">Click Here</a></h4>
              </div>  

              <button class=" btn btn1">Save & Continue</button>

              <div class="bottom">
                <img src="../assets/images/Group 3720.png" alt="">
              </div>
            </form>
          </div>

        </div>
      </div>
        <!-- end of service info  -->
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: { Navbar }
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

  body {
    width: 100%;
  }

  img {
    display: block;
    object-fit: cover;
    margin: 0;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    color: #1F1F1F;
    margin-bottom: 10px;
    width: 100%;
  }

  p {
    width: 100%;
    margin: 0;
  }

  a{
    color:  #5007E0;
  }

  h4{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #7C7C7C;
    width: 100%;
  }

  .mobile-nav {
    display: none;
    width: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: 1.2fr 1.5fr;
    min-height: 100vh;
    max-width: 100vw;
          
  }

  .left-col, .right-col {
    display: grid;
    width: 100%;
    height: 100%;
  }

  .left-col {
    background: url('../assets/images/bg2.png');
    background-position: center;
    background-size: cover;
    padding: 2.5rem;
    padding-bottom: 4rem;
    gap: 2rem;
  }

  .left-col div, .right-col div {
    width: 100%;
  }

  .quote img, .bottom img {
    width: auto;
    margin: 0 auto;
    /* border: 1px solid red; */
  }

  .right-col{
    padding: 5rem 2.5rem 10rem;
    gap: 5rem;     
  }

  
  .top-right {
    display: block;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    /* padding: 0 0.5rem; */
    /* border: 1px solid red; */
  }

  a{
    color:  #5007E0;
    }
    .step{
      
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #7C7C7C;
        text-align: right;
    }

    .step h6{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: #7C7C7C;
    }
    .step h4{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #5007E0;
    }

  .center-form {
    max-width: 550px;
    padding-left: 5rem;
  }

  .log p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #7C7C7C;
    padding-bottom: 55px;
  }

  .log h1 {
    font-size: 36px;
  }

  .form-input {
    margin-bottom: 2rem;
  }

  .password-field {
    position: relative;
  }

  label{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 31px;
    color: #7C7C7C;
    /* padding-bottom: 20px; */
  }

  label span {
    color: red;
  }

  .form-input > input, .password-field > input, select, textarea{
    border: 1px solid #7C7C7C;
    border-radius: 10px;
    width: 100%;
    padding: 15px 30px;
    margin-top: 8px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #5007E0; 
  }

  :is(input, select, textarea):focus {
    outline: #5007E0;
  }

  :is(input, select, textarea):hover{
    border: 1px solid #5007E0;
  }

  select {
    padding: 16.5px 30px;
  }

  .placeholder-span {
    position: absolute;
    left: 85%;
    top: 50%;
    transform: translateY( -50%);
    font-size: 15px;
    color: #5007E0;
    cursor: pointer;
  }

   .formy{
    width: 100%;
    display: flex;
    margin-top: 5px;
  }

  .formy div:last-child {
    text-align: right;
  }

  .checkbox {
    margin-right: 5px;
  }

  span a {
    text-decoration: underline;
    font-weight: 700;
  }

  .btn {
    width: 100%;
    padding: 1rem 2rem;
  }

  .btn1{
    background: #5007E0;
    border-radius: 10px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .btn2{
    background: #FFFFFF;
    border: 1px solid #B5B5B5;
    box-sizing: border-box;
    box-shadow: 0px 6px 50px rgba(74, 25, 172, 0.05);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

   .or{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 1rem;
  }


  .line{
      max-width: 192px;
      height: 0px;
      border: 1px solid #7C7C7c;
      flex: 1;
  }

  .text {
    flex-basis: 10%;
    text-align: center;
  }

  .first{
    display: block;
  }

  .second{
    display: none;
  }

  .third {
    display: none;
  }

  .bottom-right {
    width: 100%;
    text-align: right;
    margin: 1rem 0 0.5rem 0;
    font-size: 12px;
  }

  .bottom {
    margin-top: 2rem;
    width: 100%;
  }

  .service {
    color: #5007E0;
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
  }

   @media only screen and (max-width: 1200px) {
    .center-form {
      padding-left: 0rem;
    }
     
  }

  @media only screen and (max-width: 900px) {

    .container {
      grid-template-columns: 1fr;
    }

    .left-col {
      gap: 8.5rem;
      padding-bottom: 10rem;
    }

    .quote img {
      margin: auto;
    }

    .right-col {
      place-items: center;
    }

    .center-form {
      padding: 0;
    }
    
  }

  @media only screen and (max-width: 600px) {
    .left-col {
      display: none;
    }

    .right-col {
      padding-top: 2rem;
    }

    .mobile-nav {
      display: block;
    }

    .formy span {
    font-size: 13px;
  }
  }



   
</style>