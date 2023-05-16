<template>
    <div class="all">
    <div class="search">
        <input type="text" placeholder="Search or type"> 
        <div><img src="../Sidebar/images/Ellipse 2239.png" alt=""></div>
        
        </div>

        <div class="content">
        <div>
        <h1>Messages</h1>
        <input type="text" class="input">
        <div class="chat">
        <h2>Start a Chat</h2>
        </div>
        </div>
        <div class="second">
              <div class="line"></div>
            <div class="chat">
        <h2>No messages yet.</h2>
        
        </div>
        <input type="text" name="" id="" class="msg" placeholder="Type Something...">
        </div>

        </div>
       
    </div>
</template>

<style scoped>

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
}
.content{
    width: 90%;
    height: 843px;
    background: #FFFFFF;
    box-shadow: 0px 12px 45px rgba(74, 25, 172, 0.06);
    border-radius: 10px;
    margin-left: 70px;
    padding: 20px;
    display: flex;
}
h1{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #350B89;
}
.input{
  background: #F5F3FE;
  border: 1px solid #D4CCFF;
  box-sizing: border-box;
  border-radius: 8px;
  width: 479px;
  height: 46px;
  margin-top: 20px;
}
.second{
  background: #FFFFFF;
  border: 1px solid #E9E5FF;
  box-sizing: border-box;
  border-radius: 10px;
  width: 860px;
  height: 803px;
  margin-left: 60px;
}
h2{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #B5B5B5;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
}
.chat{
  justify-content: center;
  display: flex;
  height: 80%;
}
.line{
    border-bottom: 1px solid #E9E5FF;
    height: 90px;
}
.msg{
  background: #F5F3FF;
  border: 1px solid #D4CCFF;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 30px;
  width: 800px;
  height: 50px;
}
</style>