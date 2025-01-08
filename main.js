var bgColor = document.querySelector("body");
var topBG = document.querySelector(".topBG");
var hr = document.querySelector("hr");
var h1 = document.querySelectorAll("h1");
var topBGtextcolor = document.querySelectorAll(".topBG p");
var toggleBG = document.querySelector(".toggleMode");
var toggleSwitch = document.querySelector(".toggleSwitch");
var card1 = document.querySelectorAll(".card");
var profileText1 = document.querySelectorAll(".profileName span");
var profileText2 = document.querySelectorAll(".card p");
var card2 = document.querySelectorAll(".card2");
var viewsText = document.querySelectorAll(".views p");
var countText = document.querySelectorAll(".count p");

//Add click event to the button to chang color theme
toggleBG.addEventListener("click", () => {
  bgColor.style.backgroundColor = "#1e202a";
  topBG.style.backgroundColor = "#1f212e";
  hr.style.border = "1px solid #252a41";
  toggleBG.style.backgroundImage =
    "linear-gradient( to right, #378fe6, #3eda82)";
  toggleSwitch.style.backgroundColor = "#252a41";
  toggleSwitch.style.left = "7%";

  h1.forEach((text) => {
    text.style.color = "#fff";
  });

  topBGtextcolor.forEach((text) => {
    text.style.color = "#8b97c6";
  });

  card1.forEach((card) => {
    card.style.backgroundColor = "#262b40";

    card.addEventListener("mouseover", () => {
      card.style.backgroundColor = "#323855";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "#252a41";
    });
  });

  profileText1.forEach((text) => {
    text.style.color = "#8b97c6";
  });

  profileText2.forEach((text) => {
    text.style.color = "#8b97c6";
  });

  card2.forEach((card) => {
    card.style.backgroundColor = "#262b40";

    card.addEventListener("mouseover", () => {
      card.style.backgroundColor = "#323855";
    });

    card.addEventListener("mouseout", () => {
      card.style.backgroundColor = "#252a41";
    });
  });

  viewsText.forEach((text) => {
    text.style.color = "#8b97c6";
  });

  countText.forEach((text) => {
    text.style.color = "#fff";
  });
});
