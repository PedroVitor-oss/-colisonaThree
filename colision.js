const colisionThree = {
  boxBox:(x,z,y,l,x2,z2,y2,l2)=>{
      if(// posição x
                    Math.floor(x)+l >= Math.floor(x2)-l2&&
                    Math.floor(x)-l <= Math.floor(x2)+l2
                    // posição z
                && Math.floor(z)+l >= Math.floor(z2)-l2&&
                 Math.floor(z)-l <= Math.floor(z2)+l2){
  return true
  }
}
