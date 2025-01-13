var body = document.querySelector("body");
var topBG = document.querySelector(".topBG");
var hr = document.querySelector("hr");
var boldText = document.querySelectorAll(".boldTextColor");
var text = document.querySelectorAll("textColor");
var toggleBG = document.querySelector(".toggleMode");
var toggleSwitch = document.querySelector(".toggleSwitch");
var card1 = document.querySelectorAll(".card");
var card2 = document.querySelectorAll(".card2");
var theme = document.querySelector(".theme");

// Toggle event listener
toggleBG.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  topBG.classList.add("topBGColor");
  hr.classList.add("hr");
  toggleBG.classList.add("toggleGradient");
  toggleSwitch.classList.add("toggleButton");

  if (body.classList.contains("dark-mode")) {
    theme.textContent = "Light Mode";
  } else {
    theme.innerHTML = "Dark Mode";
  }

  boldText.forEach((text) => {
    text.classList.add("textColor2");
  });

  text.forEach((text) => {
    text.classList.add("textColor1");
  });

  card1.forEach((card) => {
    card.classList.add("cardbackgroundcolor");

    card.addEventListener("mouseover", () => {
      card.classList.add("darkhover");
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("darkhover");
    });
  });

  card2.forEach((card) => {
    card.classList.add("cardbackgroundcolor");

    card.addEventListener("mouseover", () => {
      card.classList.add("darkhover");
    });

    card.addEventListener("mouseout", () => {
      card.classList.remove("darkhover");
    });
  });
});
