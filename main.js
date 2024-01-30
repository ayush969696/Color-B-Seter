const randomColor = function () {
  let hex = "0123456789ABCDEF"; 
  // HTML color code starts with # 
  let color = '#'; 
  
  // Generating 6 times as HTML color code  
 // consist of 6 letter or digits 
   for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; 
    // the multiplication by 16 is used to get a random index within the hexadecimal set "0123456789ABCDEF".
   }
  return color;
  }
  console.log(randomColor());

  let intervalid;
  const startChangingColor = () =>{
    if(!intervalid){
      intervalid = setInterval(changeBgcolor, 1000)
    }

    function changeBgcolor () {
     document.body.style.backgroundColor = randomColor();
    }
  }

  const stopChangingColor = () =>{
    clearInterval(intervalid)
    intervalid = null; // by doing this our code is more efficient 
  }


  document.querySelector('#start').addEventListener('click', startChangingColor)

  document.querySelector('#stop').addEventListener('click', stopChangingColor)

