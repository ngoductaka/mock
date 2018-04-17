
function sumFibs(num) {
  if(num <2 ) return num;
  else{
    var a=1,
    b=1,next=0,
    total=2;
    
    while(next+a<=num){
      next=a+b;
      if(next%2==1)  total += next;
      a=b;
      b=next
    }
  }
  console.log(total)
  return total;
}
