const changemode=()=>{
    document.body.classList.toggle("mydark")
    
}

  const loadcoupon = () =>{
     document.getElementById("coupon").style.display="block";
     document.getElementById("op").style.opacity=0.4;
  }

  const closecoupon = () =>{
     document.getElementById("coupon").style.display="none";
     document.getElementById("op").style.opacity=1;
  }