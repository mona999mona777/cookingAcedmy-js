/// <reference types="../@types/jquery" />
//(open & close) navside
$(".nav-open").on("click", function () {
  if (document.querySelector(".change-icon").classList.contains("fa-bars")) {
    $(".inner-navside").animate({ width: "toggle" }, 800);
    $(".change-icon").removeClass("fa-bars").addClass("fa-xmark");
    $(".first").removeClass("d-none").addClass("d-block");
    $(".first")
      .removeClass("d-none")
      .addClass("text-light")
      .animate({ bottom: "150px", left: "0" }, 200, function () {
        $(".second").removeClass("d-none").addClass("d-block");
        $(".second")
          .removeClass("d-none")
          .addClass("text-light")
          .animate({ bottom: "120px", left: "0" }, 200, function () {
            $(".third").removeClass("d-none").addClass("d-block");
            $(".third")
              .removeClass("d-none")
              .addClass("text-light")
              .animate({ bottom: "90px", left: "0" }, 200, function () {
                $(".fourth").removeClass("d-none").addClass("d-block");
                $(".fourth")
                  .removeClass("d-none")
                  .addClass("text-light")
                  .animate({ bottom: "60px", left: "0" }, 200, function () {
                    $(".fifth").removeClass("d-none").addClass("d-block");
                    $(".fifth")
                      .removeClass("d-none")
                      .addClass("text-light")
                      .animate({ bottom: "30px", left: "0" }, 200);
                  });
              });
          });
      });
  } else if (
    document.querySelector(".change-icon").classList.contains("fa-xmark")
  ) {
    $(".inner-navside").animate({ width: "toggle" }, 800);
    $(".change-icon").removeClass("fa-xmark").addClass("fa-bars");
    $(".first").animate({ bottom: "0", left: "-50px" }, 200, function () {
      $(".first").removeClass("d-block").addClass("d-none");
      $(".second").animate({ bottom: "0", left: "-50px" }, 200, function () {
        $(".second").removeClass("d-block").addClass("d-none");
        $(".third").animate({ bottom: "0", left: "-50px" }, 200, function () {
          $(".third").removeClass("d-block").addClass("d-none");
          $(".fourth").animate(
            { bottom: "0", left: "-50px" },
            200,
            function () {
              $(".fourth").removeClass("d-block").addClass("d-none");
              $(".fifth").animate(
                { bottom: "0", left: "-50px" },
                200,
                function () {
                  $(".fifth").removeClass("d-block").addClass("d-none");
                }
              );
            }
          );
        });
      });
    });
  }
});
$(".routing-item").on("click", function () {
  if (document.querySelector(".change-icon").classList.contains("fa-bars")) {
    $(".inner-navside").animate({ width: "toggle" }, 800);
    $(".change-icon").removeClass("fa-bars").addClass("fa-xmark");
    $(".first").removeClass("d-none").addClass("d-block");
    $(".first")
      .removeClass("d-none")
      .addClass("text-light")
      .animate({ bottom: "150px", left: "0" }, 200, function () {
        $(".second").removeClass("d-none").addClass("d-block");
        $(".second")
          .removeClass("d-none")
          .addClass("text-light")
          .animate({ bottom: "120px", left: "0" }, 200, function () {
            $(".third").removeClass("d-none").addClass("d-block");
            $(".third")
              .removeClass("d-none")
              .addClass("text-light")
              .animate({ bottom: "90px", left: "0" }, 200, function () {
                $(".fourth").removeClass("d-none").addClass("d-block");
                $(".fourth")
                  .removeClass("d-none")
                  .addClass("text-light")
                  .animate({ bottom: "60px", left: "0" }, 200, function () {
                    $(".fifth").removeClass("d-none").addClass("d-block");
                    $(".fifth")
                      .removeClass("d-none")
                      .addClass("text-light")
                      .animate({ bottom: "30px", left: "0" }, 200);
                  });
              });
          });
      });
  } else if (
    document.querySelector(".change-icon").classList.contains("fa-xmark")
  ) {
    $(".inner-navside").animate({ width: "toggle" }, 800);
    $(".change-icon").removeClass("fa-xmark").addClass("fa-bars");
    $(".first").animate({ bottom: "0", left: "-50px" }, 200, function () {
      $(".first").removeClass("d-block").addClass("d-none");
      $(".second").animate({ bottom: "0", left: "-50px" }, 200, function () {
        $(".second").removeClass("d-block").addClass("d-none");
        $(".third").animate({ bottom: "0", left: "-50px" }, 200, function () {
          $(".third").removeClass("d-block").addClass("d-none");
          $(".fourth").animate(
            { bottom: "0", left: "-50px" },
            200,
            function () {
              $(".fourth").removeClass("d-block").addClass("d-none");
              $(".fifth").animate(
                { bottom: "0", left: "-50px" },
                200,
                function () {
                  $(".fifth").removeClass("d-block").addClass("d-none");
                }
              );
            }
          );
        });
      });
    });
  }
});
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
});
// section-one
let allMeals = [];
meals();
async function meals() {
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    let data = await response.json();
    allMeals = data.meals;
    // console.log(allMeals);
    dispalMeals();
  } catch (error) {
    console.log(error);
  }
}
function dispalMeals() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");
  var all = ``;
  for (var i = 0; i < allMeals.length; i++) {
    // allMeals=meals
    let name = allMeals[i].strMeal;
    all += `
          <div class="col-md-3" onclick="oneMeal('${name}')">
              <div class="inner">
                <div class="image">
                  <img src="${allMeals[i].strMealThumb}"class="w-100" alt="${allMeals[i].strMeal}" />
                </div>
                <div class="layer">
                  <h3 class="spna-f ps-3">${allMeals[i].strMeal}</h3>
                </div>
              </div>
            </div>
      `;
  }
  document.getElementById("all-meals").innerHTML = all;
}
// (allcategories)
let allcategories = [];
async function mealsCategories() {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let allCategoriesData = await response.json();
    allcategories = allCategoriesData.categories;

    // console.log( allcategories);

    dispalyCategories();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispalyCategories() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");

  var all = ``;
  for (var i = 0; i < allcategories.length; i++) {
    let name = allcategories[i].strCategory;
    all += `
     <div class="col-md-3 " onclick="oneCategory('${name}')">
              <div class="inner rounded">
                <div class="image">
                  <img src="${allcategories[i].strCategoryThumb}"class="w-100" alt="${allcategories[i].strCategory}" />
                </div>
                <div class="category-layer text-center">
                  <h3 class=" span-f ps-3">${allcategories[i].strCategory}</h3>
                  <p class="desc">${allcategories[i].strCategoryDescription}</p>
                </div>
              </div>
            </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//  (one category )
let twentyCategory = [];
async function oneCategory(category) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    let CategoryData = await response.json();
    let allCategory = CategoryData.meals;
    twentyCategory = allCategory.splice(0, 20);

    // console.log(twentyCategory);
    dispaOneCategory();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispaOneCategory() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");

  var all = ``;
  for (var i = 0; i < twentyCategory.length; i++) {
    let name = twentyCategory[i].strMeal;

    all += `
        <div class="col-md-3" onclick="oneMeal('${name}')">
            <div class="inner">
              <div class="image">
                <img src="${twentyCategory[i].strMealThumb}"class="w-100" alt="${twentyCategory[i].strMeal}" />
              </div>
              <div class="layer">
                <h3 class=" span-f ps-3">${twentyCategory[i].strMeal}</h3>
              </div>
            </div>
          </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//(all areas)
let allAreas = [];
async function mealsArea() {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    let allAreasData = await response.json();
    allAreas = allAreasData.meals;

    // console.log(allAreas);
    dispalyAreas();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispalyAreas() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");
  var all = ``;
  for (var i = 0; i < allAreas.length; i++) {
    let name = allAreas[i].strArea;
    all += `
      <div class="col-md-3  text-center text-light"    onclick="oneArea('${name}')">
              <div class="inner">
                  <i class="fa-solid fa-house-laptop fa-4x"></i>
                  <h3 class="span-f" >${allAreas[i].strArea}</h3>
              </div>
            </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//(one area)
let twentyarea = [];
async function oneArea(area) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    let AreaData = await response.json();
    let allarea = AreaData.meals;
    twentyarea = allarea.splice(0, 20);

    // console.log(twentyarea);
    dispalyOneArea();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispalyOneArea() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");
  var all = ``;
  for (var i = 0; i < twentyarea.length; i++) {
    let name = twentyarea[i].strMeal;
    all += `
        <div class="col-md-3" onclick="oneMeal('${name}')">
            <div class="inner">
              <div class="image">
                <img src="${twentyarea[i].strMealThumb}"class="w-100" alt="${twentyarea[i].strMeal}" />
              </div>
              <div class="layer">
                <h3 class=" span-f ps-3">${twentyarea[i].strMeal}</h3>
              </div>
            </div>
          </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//(allIngredients)
let twentyIngredients = [];
async function mealsIngredients() {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    let allIngredientsData = await response.json();
    let allIngredients = allIngredientsData.meals;
    twentyIngredients = allIngredients.splice(0, 20);

    // console.log(twentyIngredients);
    dispalyIngredientsData();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispalyIngredientsData() {
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".serchh").removeClass("d-block").addClass("d-none");
  var all = ``;
  for (var i = 0; i < twentyIngredients.length; i++) {
    let name = twentyIngredients[i].strIngredient;
    all += `
      <div class="col-md-3  text-center text-light" onclick="oneIngredient('${name}')">
              <div class="inner-ingradients">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                  <h3 class="span-f">${twentyIngredients[i].strIngredient}</h3>
                  <p class="secraption">${twentyIngredients[i].strDescription
                    .split(" ")
                    .splice(0, 20)
                    .join(" ")}</p>
              </div>
            </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//(one ingrdiant)
let twentyingredient = [];
async function oneIngredient(ingredient) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    let IngredienData = await response.json();
    let allingredient = IngredienData.meals;
    twentyingredient = allingredient.splice(0, 20);

    // console.log(twentyingredient);
    dispalyOneIngredient();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function dispalyOneIngredient() {
  var all = ``;
  for (var i = 0; i < twentyingredient.length; i++) {
    let name = twentyingredient[i].strMeal;
    all += `
        <div class="col-md-3" onclick="oneMeal('${name}')">
            <div class="inner">
              <div class="image">
                <img src="${twentyingredient[i].strMealThumb}"class="w-100" alt="${twentyingredient[i].strMeal}" />
              </div>
              <div class="layer">
                <h3 class="ps-3">${twentyingredient[i].strMeal}</h3>
              </div>
            </div>
          </div>
    `;
  }

  document.getElementById("all-meals").innerHTML = all;
}
//(one meal only)
let myMeal = [];
let allTag = [];
let spans = ``;
let tags = ``;
async function oneMeal(maro) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${maro}`
    );
    let myMealData = await response.json();
    myMeal = myMealData.meals[0];
    let stringAllTages = [myMeal.strTags].toString();
    allTag = stringAllTages.split(",");
    // console.log(myMeal);
    displayMeal();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function str() {
  for (let i = 1; i <= 20; i++) {
    if (myMeal[`strIngredient${i}`]) {
      spans += `
                    <li class="me-3 my-2 py-1 bg-info-subtle border-1 px-1 border-info-subtle rounded meal-buttons">${
                      myMeal[`strMeasure${i}`]
                    } ${myMeal[`strIngredient${i}`]}</li>    `;
    }
  }
  return spans;
}
function strTags() {
  for (let i = 0; i < allTag.length; i++) {
    if (allTag[i]) {
      tags += `
                    <li class="me-3 my-2 py-1 bg-danger-subtle border-1 px-1 border-danger-subtle rounded meal-buttons-tags">${allTag[i]}</li>    `;
    }
  }
  return tags;
}
function displayMeal() {
  $(".serchh").removeClass("d-block").addClass("d-none");

  var all = `
      <div class="col-md-4">
            <div>
              <img src=" ${myMeal.strMealThumb}" class="w-100 rounded" alt=" ${
    myMeal.strMeal
  }" />
              <h3 class="meal-h3-f">${myMeal.strMeal}</h3>
            </div>
          </div>

          <div class="col-md-8">
            <div>
              <h3 class="meal-h3-f">Instructions</h3>
              <p class="meal-desc">${myMeal.strInstructions}</p>
              <h3 class="meal-h33-f">Area : <span "meal-span-f">${
                myMeal.strArea
              }</span></h3>
              <h3 class="meal-h33-f">Category : <span "meal-span-f"> ${
                myMeal.strCategory
              }</span></h3>
              <h3 class="meal-h33-f">Recipes :</h3>

              <ul class="d-flex flex-wrap align-items-center">
             ${str()}
               </ul>    
              <h3 class=" meal-span-f">Tags :</h3>
               <ul class="d-flex flex-wrap align-items-center">
             ${strTags()}
               </ul>   
              <div>
               <a href="${
                 myMeal.strSource
               }"> <button class="btn btn-success meal-desc">source</button></a>
                <a href="${
                  myMeal.strYoutube
                }"><button class="btn btn-danger meal-desc">youtube</button></a>
              </div>
            </div>
            </div>
  `;
  document.getElementById("all-meals").innerHTML = all;
}
// seearchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
function mySearch() {
  $(".meeals").removeClass("d-block").addClass("d-none");
  $(".serchh").removeClass("d-none").addClass("d-block");
  $(".meeals").addClass("d-block");
  $(".contact-us").removeClass("d-block").addClass("d-none");
}
let mySearchMeal = [];
async function searchOneMeal(maro) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${maro}`
    );
    let mySearchMealData = await response.json();
    mySearchMeal = mySearchMealData.meals;
    // console.log(mySearchMeal);
    searchDisplayMeal();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function searchDisplayMeal() {
  var all = ``;
  for (var i = 0; i < mySearchMeal.length; i++) {
    // mySearchMeal=meals
    let name = mySearchMeal[i].strMeal;
    all += `
          <div class="col-md-3" onclick="oneMeal('${name}')">
              <div class="inner">
                <div class="image">
                  <img src="${mySearchMeal[i].strMealThumb}"class="w-100" alt="${mySearchMeal[i].strMeal}" />
                </div>
                <div class="layer">
                  <h3 class="spna-f ps-3">${mySearchMeal[i].strMeal}</h3>
                </div>
              </div>
            </div>
      `;
  }
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".contact-us").removeClass("d-block").addClass("d-none");
  document.getElementById("all-meals").innerHTML = all;
}
// search meal by first letter
let searchFLetterMeals = [];
async function firstLetterMeals(letter) {
  $(".loading").fadeIn();
  $(".loader").slideDown(1000);
  try {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    let myMealData = await response.json();
    searchFLetterMeals = myMealData.meals;
    // console.log(searchFLetterMeals);
    searcHDisplayFLMeals();
    $(".loader").slideUp(1000);
    $(".loading").fadeOut();
  } catch (error) {
    console.log(error);
  }
}
function searcHDisplayFLMeals() {
  var all = ``;
  for (var i = 0; i < searchFLetterMeals.length; i++) {
    let name = searchFLetterMeals[i].strMeal;
    all += `
        <div class="col-3" onclick="oneMeal('${name}')">
            <div class="inner">
              <div class="image">
                <img src="${searchFLetterMeals[i].strMealThumb}"class="w-100" alt="${searchFLetterMeals[i].strMeal}" />
              </div>
              <div class="layer">
                <span class="ps-3">${searchFLetterMeals[i].strMeal}</span>
              </div>
            </div>
          </div>
    `;
  }
  $(".meeals").removeClass("d-none").addClass("d-block");
  $(".contact-us").removeClass("d-block").addClass("d-none");
  document.getElementById("all-meals").innerHTML = all;
}

let searchName = document.getElementById("search-name");
searchName.addEventListener("keyup", function () {
  searchOneMeal(searchName.value);
});
let searchLetter = document.getElementById("search-letter");
searchLetter.addEventListener("keyup", function () {
  firstLetterMeals(searchLetter.value);
});
// contact ussssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
function contact() {
  $(".contact-us").removeClass("d-none").addClass("d-flex");
  $(".meeals").removeClass("d-block").addClass("d-none");
  $(".serchh").removeClass("d-block").addClass("d-none");
}
const firstInput = document.getElementById("first-input");
const secondInput = document.getElementById("second-input");
const thirdInput = document.getElementById("third-input");
const fourthInput = document.getElementById("fourth-input");
const fifthInput = document.getElementById("fifth-input");
const sixInput = document.getElementById("six-input");
const btn = document.getElementById("marooo");
const formData = document.querySelector("form");
formData.addEventListener("input", function () {
  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    Repassword()
  ) {
    $("#op").removeClass("disabled");
  }
});
function nameValidation() {
  let theFirst = firstInput.value;
  const regex = /^\w{1,}(\s+\w+)*$/;
  if (regex.test(theFirst)) {
    firstInput.classList.add("is-valid");
    firstInput.classList.remove("is-invalid");
    return true;
  } else {
    firstInput.classList.add("is-invalid");
    firstInput.classList.remove("is-valid");
    return false;
  }
}
function emailValidation() {
  let theSecond = secondInput.value;
  const regex = /^[\w]{1,}@(gmail|yahoo)\.com$/;
  if (regex.test(theSecond)) {
    secondInput.classList.add("is-valid");
    secondInput.classList.remove("is-invalid");
    return true;
  } else {
    secondInput.classList.add("is-invalid");
    secondInput.classList.remove("is-valid");
    return false;
  }
}
function phoneValidation() {
  let theThird = thirdInput.value;
  const regex = /^[0-9]{10,}$/;
  if (regex.test(theThird)) {
    thirdInput.classList.add("is-valid");
    thirdInput.classList.remove("is-invalid");
    return true;
  } else {
    thirdInput.classList.add("is-invalid");
    thirdInput.classList.remove("is-valid");
    return false;
  }
}
function ageValidation() {
  let theFourth = fourthInput.value;
  const regex = /^[1-9]{1,}$/;
  if (regex.test(theFourth)) {
    fourthInput.classList.add("is-valid");
    fourthInput.classList.remove("is-invalid");
    return true;
  } else {
    fourthInput.classList.add("is-invalid");
    fourthInput.classList.remove("is-valid");
    return false;
  }
}
function passwordValidation() {
  let theFifth = fifthInput.value;
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(theFifth)) {
    fifthInput.classList.add("is-valid");
    fifthInput.classList.remove("is-invalid");
    return true;
  } else {
    fifthInput.classList.add("is-invalid");
    fifthInput.classList.remove("is-valid");
    return false;
  }
}
function Repassword() {
  let theSix = sixInput.value;
  let theFifth = fifthInput.value;
  if (theFifth === theSix) {
    sixInput.classList.add("is-valid");
    sixInput.classList.remove("is-invalid");
    return true;
  } else {
    sixInput.classList.add("is-invalid");
    sixInput.classList.remove("is-valid");
    return false;
  }
}
