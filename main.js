 function doFunction() {
     var button = document.getElementById("button").value;
        var link = Math.floor(Math.random() * 8);

     if (link == 0){
        link = "https://abcya.com"
     };
     if (link == 1){
        link = "https://airforce.com/airmanchallenge"
     };
     if (link == 3){
        link = "https://iamawesome.com"
     };
     if (link == 4){
        link = "https://turbowarp.org/523967150/fullscreen?hqpen"
     };
     if (link == 5){
        link = "https://www.autodraw.com"
     };
     if (link == 6){
        link = "https://www.awesomeinc.org/core-value-training/webgl/"
     };
     if (link == 7){
        link == "hello"
     }
     

     
     document.getElementById("result").innerHTML = link;
 };
