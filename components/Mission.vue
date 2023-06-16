<template>
    <div>
        <div class="cover container">
          <h2>Our Mission & Vision</h2>
          <div class="all">
            <div style="" class="mission">
              <img src="../assets/images/Group 1000004166.png" alt="" class="mission-icon1">
              <p>
                Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
              </p>
              
            </div>
            <div class="mission" style="">
              <img src="../assets/images/Group 1000004166.png" alt="" class="mission-icon2">
              <p>
                Give your car the right service it needs with a unique automechanic shop that links you with the best, competent and effective tecnicians.
              </p>
              
            </div>
          </div>  
        </div>
        

   <div>
   <h4>We connect customers with expert technicians.</h4>
    <div class="control">
  
    <div class="iCountUp border-btm">
    <ICountUp
      :delay="delay"
      :endVal="endVal"
      :options="options"
      @ready="onReady"
      class=""
    />
    <p>registered technicians</p>
  </div>
  <!-- <div class="border-btm"></div> -->
     <div class="iCountUp border-btm">
    <ICountUp
      :delay="delay"
      :endVal="endValy"
      :options="options"
      @ready="andReady"
    />
    <p>registered companies</p>
  </div>
  <div class="iCountUp">
    <ICountUp
      :delay="delay"
      :endVal="endValue"
      :options="options"
      @ready="weReady"
    />
    <p>registered customers</p>
  </div>
       </div>
   </div>
    </div>
</template>

<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    components: {
      ICountUp
    },
    data() {
      return {
        delay: 1000,
        endVal: 50,
        endValy:30,
        endValue:70,
        options: {
        //   useEasing: true,
        //   useGrouping: true,
        //   separator: ',',
        //   decimal: '.',
        //   prefix: 'nb',
          suffix: '+'
        }
      };
    },
    methods: {
      onReady: function(instance, CountUp) {
        // const that = this;
        // instance.update(this.endVal);
        instance.update( this.endVal)
      },
      andReady: function(instance, CountUp) {
        // const that = this;
        // instance.update(this.endVal);
        instance.update( this.endValy)
      },
       weReady: function(instance, CountUp) {
        // const that = this;
        // instance.update(this.endVal);
        instance.update( this.endValue)
      },
    
      
    }
  };
</script>

<style scoped>

  .all{
    display:grid; 
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 2rem;
    padding: 1rem 2.8rem;
  }

  .mission{
    display:flex; 
    justify-content: center;
    gap: 1.5rem;
      
  }

  .all p {
    text-align: justify;
    text-justify: inter-word;
  }

  p{
    width: 100%;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #7C7C7C;
    margin: 0;
  }

  img{
    width: 65px;
    height: 65px;
  }

  .cover{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
      margin: auto;
    max-width: 1200px;
    margin-top: 50px;    
  }
    
  .cover h2{
    height: 39px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #350B89;
    margin-bottom: 32px;
  }

  .iCountUp {
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 35px;
    color: #350B89;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 3rem 0;
  }

  .iCountUp p{
    height: 35px;
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    text-align: center;
    color: #5007E0;
    padding-top: 17px;
    text-transform: capitalize;
  }

  .control{
    background:#F5F3FF url('../assets/images/mask1.png');
    background-repeat: no-repeat;
    background-position: right;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin-top: 40px;
    padding: 2rem ;
  }

  .control img{
    width: 126px;
    height: 128px;
  }

  h4{
    font-family: 'Sofia Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 35px;
    color: #7C7C7C;
    text-align: center;
    margin-top: 110px;
  }

  @media only screen and (max-width: 900px) {
    .all{
      grid-template-columns: 1fr;
      gap: 3rem;
      padding: 1rem 1.4rem;
    }

    .all .mission-icon2 {
      order: 2;
    }

    h4 {
      margin: 50px auto 90px;
      padding: 1rem;
    }

    .control {
      flex-direction: column;
      gap: 0;
    }

    .border-btm {
      padding-bottom: 4rem;
      width: 100%;
      border-bottom: 1px solid #fff;
      border-image: linear-gradient(to right, #F5F3FF, #26046A,#F5F3FF );
      border-image-slice: 1;
    }      

    .cover {
      margin-top: 0;
    }
  }

    @media only screen and (max-width: 600px) {
      .mission {
        align-items: center;
        
      }
       
     .mission p{
        font-size: 1.1rem;
      } 

      .cover h2 {
        font-size: 1.63rem;
      }
      
      .all {
        padding: 2px;
        
      }

      .iCountUp p {
        font-size: 1.2rem;
      }

      h4 {
        margin: 50px auto;
      }

    }
</style>