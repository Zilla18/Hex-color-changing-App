// 🌈 CHANGE BOX COLOR APP
//
// 1️⃣ GRAB ELEMENTS FROM THE PAGE (HTML)
const colorBox = document.querySelector("#color-box"); // This is the box whose background color we want to change
const colorCode = document.querySelector("#color-code"); // This is where we will show the color code (like #ff0000)
const changeColorBTN = document.querySelector("#change-color-btn"); // This is the button the user clicks to change the color

// 2️⃣ FUNCTION TO CREATE A RANDOM COLOR
const getRandomColor = () => {
  // Math.random() gives a number between 0 and 1 (like 0.345), so we multiply it by a large number to get a bigger range of colors
  const generatedNumber = Math.floor(Math.random() * 12325467).toString(16); // Convert that number into a hex code using .toString(16)

  // Add "#" in front to make it a proper color code (like "#3f2a9e")
  const randomNum = `#${generatedNumber}`;

  // Send this hex color back to wherever we called this function
  return randomNum;
};

// 3️⃣ WHEN BUTTON IS CLICKED, DO THIS:
changeColorBTN.addEventListener("click", () => {
  const hexColor = getRandomColor(); // Step 1: Get a random hex color from the function

  // Step 2: Use that color as the background for the box
  colorBox.style.backgroundColor = hexColor;

  // Step 3: Display the color code (hex) as text on the page
  colorCode.innerHTML = hexColor;

  // Step 4: Make the color code text match the background color (cool effect!)
  colorCode.style.color = hexColor;

  // Step 5: (optional) Change the text color of the button too, just for style!
  changeColorBTN.style.color = colorBox.style.backgroundColor;
});
