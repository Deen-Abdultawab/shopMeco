<template>
    <div class="all">
    <div class="search">
        <input type="text" placeholder="Search or type"> 
        <div><img src="../Sidebar/images/Ellipse 2239.png" alt=""></div>
        
        </div>
       
       <!-- body  -->
       <div>
        <h2>Hello Yewande,</h2>
        <p>Let’s get you started.</p>
       </div>

       <side-carousel/>
       <HomeService/>
    </div>
</template>


<script>
// import HomeService from "~/components/HomeService.vue"
export default {
  
}
</script>

<style>

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
  margin-bottom: 30px;
}
.all{

  width: 80vw;
  padding: 30px 72px;
}
h2{
    width: 209px;
    height: 34px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #350B89;
}
p{
    width: 222px;
    height: 27px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    color: #7C7C7C;
}
</style>