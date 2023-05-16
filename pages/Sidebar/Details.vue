<template>
   <div class="all">
    <div class="search">
        <input type="text" placeholder="Search or type"> 
        <div><img src="../Sidebar/images/Ellipse 2239.png" alt=""></div>
        
        </div>

        <div >
            <h3>Service Provider details</h3>

            <div class="cont">
            <img src="../Sidebar/images/Rectangle 5775.png" alt="" class="cont2">
            <div>
                    <div >
                <div class="car">
                    <div>
                            <h2>Car Cleaning</h2>
                    <h4>CleanMech</h4>
                    </div>
                    <div>
                    <p>Auto-wash</p>
                </div>

                
                </div>
                <div class="next">
                    <img src="../Sidebar/images/Group 1000004168.png" alt="">
                    <p>273 reviews</p>
                </div>

                <div class="desc">
                    <h1>Description</h1>
                    <p>Give your car the right service it needs with a unique automechanic 
                    shop that links you with the best, competent and effective tecnicians.</p>
                </div>
                <div style="margin-top:30px; margin-left:20px;">
                    <button class="btn1" @click="book = true">BOOK NOW</button>
                    <button class="btn2" @click="review = true">REVIEW</button>
                </div>
            </div>

                    
            </div>
                
            </div>

               
        </div>
         <div class="bottom">
                    <h3>Provider’s Location</h3>
                    <div class="content">
                            <div>
                                <div style="display:flex; align-items: center; margin-top: 40px;">
                                <div style="margin-right: 30px;">
                                    <img src="../Sidebar/images/Icon.png" alt="">
                                </div>
                                <div>
                                    <h5>Address</h5>
                                <p>Mechanic Village
No 22, Bolaji Mc Anthony way, opposite Law School, Ikeja, Lagos State.</p>
                                </div>
                                
                                </div>

                                 <div>
                                <div style="display:flex; align-items: center; margin-top: 40px;">
                                <div style="margin-right: 30px;">
                                    <img src="../Sidebar/images/Icon.png" alt="">
                                </div>
                                <div>
                                    <h5>Opening hours</h5>
                                 <p>Monday-Friday</p>
                                 <p>8:00 AM-6:00 PM</p>
                                </div>
                                
                                </div>
                                </div>
                            
                            </div>
                            <div class="map"><img src="../Sidebar/images/Group 3747.png" alt=""></div>
                    </div>
                </div>

                <!-- <detail-carousel class="car"/> -->

                            <!-- modal popup  -->
                            <div v-if="review" class="check">
                                     <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

             <div class="flex justify-between">
                <p>Review</p>
             <button @click="review = false">X</button>
             </div>

             <h5>How would you rate your experience with CleanMech?</h5>
             <div>
                <img src="../Sidebar/images/Group 1000004186.png" alt="">
             </div>

             <h6>Your Review</h6>
             <textarea name="" id="" cols="30" rows="10"></textarea>
             <button class="btn">send</button>
            </div>
          </div>
        </div>
      </transition>
                            </div>

                            <!-- book now carousel  -->

                                <div v-if="book" class="book">
                                     <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container book">

             <div class="flex justify-between">
                <p>Payment</p>
                
             <button @click="book = false">X</button>
             </div>

             <h4>
                Enter your card details to complete the service rendered.</h4>
             <div>
                <h5>Your total is <span style="color: #5007E0">#2,500.00</span></h5>
             </div>

             <form action="">
                <div>
                <h6>Card Number</h6>
             <input type="number" placeholder="XXXX XXXX XXXX XXXX">
             </div>
              <div>
                <h6>Card Name</h6>
             <input type="number" placeholder="XXXX XXXX XXXX XXXX">
             </div>

              <div class="card">
                <div>
                        <h6>Card Number</h6>
             <input type="date" placeholder="MM/YYY">
                </div>

                 <div>
                        <h6>Card Number</h6>
             <input type="number" placeholder="XXX" length = 3>
                </div>
             </div>
              <button class="btn">Pay</button>
             </form>
            
            </div>
          </div>
        </div>
      </transition>
                            </div>

                            
                       

                    
       
    </div>
</template>

        <script>
        export default {
            data() {
                return {
                    review: false,
                    book: false
                }
            },

            
        }
        </script>

<style scoped>

        .review{
            display: none;
        }
    input{
  width: 660px;
  height: 47px;
  background: #FFFFFF;
  border: 1px solid #D5CCFF;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 10px;
}
.search{
  display: flex;
  justify-content: space-between;
  padding: 30px 72px;
}
.all{

  width: 80vw;
  height: auto;
}
h3{
    width: 1420px;
    height: 51px;
    background: #FDFDFF;
    box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.06);
    border-radius: 8px;
    padding: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-left: 60px;
}
.cont{
    width: 1420px;
    height: 380px;
    background: #FFFFFF;
    box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.06);
    border-radius: 10px;
    margin-left: 60px;
    margin-top: 20px;
    padding: 30px;
    display: flex;
}
.cont2{
    margin-right: 5em;
}

.car{
    display: flex;
    justify-content: space-between;
    width: 45vw;
    padding: 0 20px;
}
.car p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #FFB74C;
}
.next {
    display: flex;
    padding-left: 20px;
    align-items: center;
}
.next p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #7C7C7C;
    padding-left: 19.14px;
}
h4{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 22px;
        color: #7C7C7C;
        padding-top: 6px;
        padding-bottom: 30px;
}
h2{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        color: #000000;
}
.desc p{
        font-family: 'Sofia Pro';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #7C7C7C;
        width: 704px;
}
.desc h1{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #000000;
    padding-bottom: 15px;

}
.desc{
    padding-left: 19.14px;
    margin-top: 32px;
}
.btn1{
    width: 253px;
    height: 50px;
    background: #5007E0;
    border-radius: 7.57143px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    color: #FFFFFF;
    margin-right: 60px;
}
.btn2{
    background: #FFFFFF;
    border: 1px solid #5007E0;
    box-sizing: border-box;
    border-radius: 7.57143px;
    width: 253px;
    height: 50px;
}
.bottom{
    margin-top: 20px;
    width: 1037px;
    height: 109px;
    
   
}
.map{
    background: url('../Sidebar/images/Rectangle 5784.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 319px;
    
}
.map img{
    position: relative;
    left: 6rem;
    top: 10rem;
    
}
.content{
    display: flex;
    justify-content: space-between;
     width: 1420px;
    margin-left: 60px;
    margin-top: 20px;
    padding: 30px;
    background: #FFFFFF;
    box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.06);
    border-radius: 15px;
}
h5{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
    color: #1F1F1F;
}

.content p{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7C7C7C;
    mix-blend-mode: normal;
    width: 400px;
    padding-top: 10px;
}

textarea{
    width: 454px;
    height: 165px;
    border: 1px solid #D4CCFF;
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 10px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 494px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-mask .btn{
    width: 193px;
    height: 50px;
    background: #5007E0;
    border-radius: 7.57143px;
    color: #FFFFFF;
    margin-top: 30px;
}
.modal-mask p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #1F1F1F;
}

.book h5{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 20px;
}
.book h4{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    color: #7C7C7C;
}
.book input{
    width: 454px;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #B5B5B5;
    border-radius: 10px;
    margin: 10px 0 30px 0;
}
.book{
    width: 760px;
    height: 625px;
}
.card{
    display: grid;
    grid-template-columns: 2fr 1fr;
}
</style>