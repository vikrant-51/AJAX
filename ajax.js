console.log("Hey!");

let fruitBtn = document.getElementById("fruitBtn");
fruitBtn.addEventListener("click", showFruits);

function showFruits() {
  console.log("You have clicked the fetchbtn");
  //Instantiate an xhr object
  let xhr = new XMLHttpRequest();

  //open the object
  //  xhr.open("GET", "viki.txt", true);
  xhr.open("GET", "https://github.com/vikrant-51/Notes-Making/blob/main/fruits.json", true);

  //what to do when response is ready
  xhr.onload = function() {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
        let fruits = document.getElementById("fruits");
        str = "";
        for(let i = 0; i< obj.fruits.length; i++){
            str += `<li>${obj.fruits[i]}</li>`; 
        }
        fruits.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  //send the request
  xhr.send();
    console.log("We are done featching fruits")
}

let vegeBtn = document.getElementById("vegeBtn");
vegeBtn.addEventListener("click", showVegetables);

function showVegetables() {
  console.log("You have clicked the vegebtn");
  //Instantiate an xhr object
  let xhr = new XMLHttpRequest();

  //open the object
  //  xhr.open("GET", "viki.txt", true);
  xhr.open("GET", "https://github.com/vikrant-51/Notes-Making/blob/main/vegetables.json", true);

  //what to do when response is ready
  xhr.onload = function() {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
        let vegetables = document.getElementById("vegetables");
        str = "";
        for(let i = 0; i< obj.vegetables.length; i++){
            str += `<li>${obj.vegetables[i]}</li>`; 
        }
        vegetables.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  //send the request
  xhr.send();
    console.log("We are done featching fruits")
}
