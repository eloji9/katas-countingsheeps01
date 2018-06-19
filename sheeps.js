var countSheep = function (num){
    return new Array(num).fill(0).map((e,i)=>`${i+1} sheep...`).join("");
  }