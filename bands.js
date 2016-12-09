
 var get=document.getElementsByClassName("HeyListen")[0]

 function hear(){

   var tall = document.getElementsByClassName("treeHeight")[0].value
   var brick = document.getElementsByClassName("treeBuild")[0].value
   var rock = document.getElementsByClassName("treeBuild")[0].value

    tall=tall.trim()
    brick=brick.trim()
    rock=rock.trim()
    // console.log(tall)
    // console.log(brick)




    if(!isNaN(tall) && tall > 0 && brick.length === 1){
      for(r=1; r<=tall; r++){
        var onespace = " "
        var bump = rock+rock
        console.log((onespace.repeat(tall-r))+brick)
        brick= brick + bump

      }
    } else {
      alert("Sorry, it seems you've filled out the boxes wrong.  Try again.")
    }
  }


document.addEventListener("keyup", function (e) {
  if(e.code=="Enter"){

    // console.log("I hear you")
    hear()
  }
})
 get.addEventListener("click", hear, false)















 var bands = ["Huun Huur Tu", "The fighting jacks", "Amy Courts", "Goddamn Electric Bill", "High flight society"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = ???;

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  currentBand = ???;


  // Add the veggie names into the correct <div>
  currentVeggie = ???;

}
