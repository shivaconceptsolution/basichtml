var flag=false;
const myPromise = new Promise(
    function(myResolve, myReject) {

    setTimeout(function() {
        if (flag) {
         myResolve("Wecome in SCS !!");
     }
     else {
         myReject("Sorry !!");
     }}, 3000);
  
  });
  
  myPromise.then(function(value) {
  
    console.log(value);
  
  }).catch(function(value) {console.log(value);});