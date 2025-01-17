// console.log(document.body)

// example1: Accessing DOM Elements then change above text after clicking the button
// document.querySelector("");
// # for id and . for classes
// let x = document.getElementById("changeTextButton");
// console.log(x);
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // if you click multiple times then it'll change from hello world to original text and visa versa loop wise
    // let x = document.getElementById("myParagraph");
    // if (x.innerHTML === "This is a paragraph. Click the button to change me!") {
    //   x.innerHTML = "Hello World!";
    // } else {
    //   x.innerHTML = "This is a paragraph. Click the button to change me!";
    // }
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Text Changed!";
  });

// Example 2: Traversing the DOM
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    // console.log(citieslist.firstElementChild);
    // console.log(citieslist.firstElementChild.classList);
    if (citieslist.firstElementChild.classList.contains("highlight")) {
      citieslist.firstElementChild.classList.remove("highlight");
    } else {
      citieslist.firstElementChild.classList.add("highlight");
    }
  });
// what if i wanna select second or mth child in js dom, write same code for that also:
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citieslist = document.getElementById("citiesList");
    if (citieslist.children[2].classList.contains("highlight")) {
      citieslist.children[2].classList.remove("highlight");
    } else {
      citieslist.children[2].classList.add("highlight");
    }
  });

// example 3: Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  // .textContent is used to change text content alternatively we can use .innerHTML like this: coffeeType.innerHTML = "Espresso";
  // also you can add css to your elements, by using style
  if (coffeeType.style.backgroundColor === "red") {
    // for clearing all of this shit:
    coffeeType.style = "";
  } else {
    coffeeType.style.backgroundColor = "red";
    coffeeType.style.color = "pink";
    coffeeType.style.border = "1px solid black";
    coffeeType.style.borderRadius = "5px";
    coffeeType.style.padding = "2px";
  }
});

// example 4: first create array of 10 items, then Creating and Inserting Elements in the DOM, random item generator, from ul's li
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Item " + Math.floor(Math.random() * 100);
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5: Removing above DOM Elements, there's concept of double click: dblclick
document
  .getElementById("removeLastTask")
  .addEventListener("dblclick", function () {
    let taskList = document.getElementById("shoppingList");
    taskList.lastElementChild.remove();
  });

// example 6: Event Handling in the DOM with hover on button and remove those text when we remove mouse from button
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    document.getElementById("clickMeButton").textContent = "Mouse Over";
    document.getElementById("clickMeButton").style.color = "red";
    document.getElementById("clickMeButton").style.padding = "2px";
    document.getElementById("clickMeButton").style.borderRadius = "5px";
    // alert("Mouse Over");
  });
document
  .getElementById("clickMeButton")
  .addEventListener("mouseout", function () {
    document.getElementById("clickMeButton").textContent = "Click Me!";
    document.getElementById("clickMeButton").style.color = "";
    document.getElementById("clickMeButton").style.padding = "";
    document.getElementById("clickMeButton").style.borderRadius = "";
    // alert("Mouse Out");
  });

// example 7: Event Delegation: how to select any item in the list by clicking on it, if you use getelementbyid/class then all of them will be selected
document.getElementById("teaList").addEventListener("click", function (event) {
  // if (event.target && event.target.matches(".teaItem")) {
  if (event.target) {
    alert(`You selected ${event.target.textContent}`);
  }
});

// example 8: Form Handling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //this will prevent the form from submitting, which is default behavior of the form
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackInput").value = "";
    // if you want to grab label which has same id then to grab it use this: let label = document.getElementById("feedbackForm").querySelector("label");
    let label = document.getElementById("feedbackForm").querySelector("label");
    // let label = document.querySelector("label[for='feedbackInput']");
    label.textContent = "Thanks for feedback!";
    // after submitting the form, we wanna change placeholder
    document.getElementById("feedbackInput").placeholder =
      "feedback submitted!";
    // now grab paragraph and then display it: first view html file
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `feedback is: ${feedback}`;
  });

// example 9: DOM Content Loading: do fun stuff when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM loaded";
});

// example 10: CSS class Manipulation
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight"); // toggle is used to add or remove class
    // before that we used if else but now we can use toggle
  });
