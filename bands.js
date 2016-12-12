var bands = ["Huun Huur Tu", "The fighting jacks", "Amy Courts", "Goddamn Electric Bill", "High flight society"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

var cband = []
var veg = []
// function bandList() {
//   for (var t = 0; t <= bands.length; t++) {
//     if(t===0){
//       cband = "<ul>" + "<li>"+bands[t] + "</li>";
//     }else if(t!==bands.length && t!==0){
//       cband += "<li>" + bands[t] + "</li>";
//     }else if(t===bands.length){
//       cband += "</ul>";
//       document.getElementById("bands").innerHTML = cband;
//     }
//   }
// }

function bandList() {
  for (var t = 0; t <= bands.length; t++) {
    if(t<bands.length){
      cband += "<li>" + bands[t] + "</li>";
    }else{
      document.getElementById("bands").innerHTML = cband;
    }
  }
}


function vegList() {
  for (var t = 0; t <= vegetables.length; t++) {
    if(t<vegetables.length){
      veg += "<li>" + vegetables[t] + "</li>";
    }else{
      document.getElementById("vegetables").innerHTML = veg;
    }
  }
}

bandList();
vegList();
