<template>
  <div>
    <h1 class="firsty">Hear out what people say about us</h1>
        <ssr-carousel :slides-per-page='1' loop center show-dots show-arrows >
  <slide :index='1'>
    <div class="flex">
      <div class="slide-img">
        <img src="../assets/images/Rectangle 27.png" alt="" class="overlay">
        <img src="../assets/images/Rectangle 25.png" alt="" class="img">
      </div>
      <div class="slide-article">
        <p>
          Give your car the right service it needs with a unique automechanic shop that links you with the best,
          competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, 
          competent and effective tecnicians.
         </p>
      </div>
    </div>
  </slide>

  <slide :index='2'>
    <div class="flex">
      <div class="slide-img">
        <img src="../assets/images/Rectangle 27.png" alt="" class="overlay">
        <img src="../assets/images/Rectangle 25.png" alt="" class="img">
      </div>
      <div class="slide-article">
        <p>
          Give your car the right service it needs with a unique automechanic shop that links you with the best,
          competent and effective tecnicians.your car the right service it needs with a unique automechanic shop that links you with the best, 
          competent and effective tecnicians.
         </p>
      </div>
    </div>
  </slide>
  
  
</ssr-carousel>
    </div>
</template>
 
<script>
  import SsrCarousel from 'vue-ssr-carousel'
  import SsrCarouselCss from 'vue-ssr-carousel/index.css'
 
  export default {
    name: 'MyComponent',
    components: { SsrCarousel },
     buildModules: [ 'vue-ssr-carousel/nuxt' ]
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

img {
  display: block;
  object-fit: cover;
  width: 100%;
}

slide{ 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  padding: 0 60px;
}

.flex {
  display: grid;
  grid-template-columns: 300px 1fr;
  place-items: center;
  gap: 3rem;
}

.slide-img {
  display: grid;
  max-width: 100%;
  position: relative;
}

p {
  font-family: 'Sofia Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #7C7C7C;
}

.img {
  margin-top: 2rem;
}

.overlay{
  position: absolute;
  z-index: 99;
  left: 2rem;
}
.firsty{
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #350B89;
  width: 90vw;
  max-width: 930px;
  margin: 0 auto;
  margin-bottom: 4rem;
  
}

@media only screen and (max-width: 900px) {
  slide {
    padding: 0 30px;
  }

  p {
    font-size: 22px;
  }
}

@media only screen and (max-width: 700px) {

  .firsty{
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 20px;
    line-height: 38px;
  }

  .flex{
    grid-template-columns: 1fr;
  }

  p{
    text-align: left;
    height: auto;
    font-size: 20px;
    padding-top: 10px;
  }

   slide {
    padding: 0 60px;
  }

}
</style>

    

