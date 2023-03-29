// // const parent = document.querySelector("#parent");

// // parent.addEventListener("click", (event) => {
// //   console.log("event.target: ", event.target);
// //   console.log("event.currentTarget: ", event.currentTarget);
// // });

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 20; i++) {
//     const color = getRandomColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

const colors = [
  { hex: "#FFA07A", rgb: "255, 160, 122" },
  { hex: "#00FF00", rgb: "0, 255, 0" },
  { hex: "#9400D3", rgb: "148, 0, 211" },
  { hex: "#4169E1", rgb: "65, 105, 225" },
  { hex: "#8B0000", rgb: "139, 0, 0" },
];
const paletteContainer = document.querySelector(".js-palette");

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return ` <div class="color-card">
   <div
     class="color-swatch"
     data-hex="${hex}"
     data-rgb="${rgb}"
     style="background-color: ${hex}"
   ></div>
   <div class="color-meta">
     <p>HEX: ${hex}</p>
     <p>RGB: ${rgb}</p>
   </div>
 </div>`;
    })
    .join("");
}
createColorCardMarkup(colors);
paletteContainer.insertAdjacentHTML("beforeend", createColorCardMarkup(colors));

paletteContainer.addEventListener("click", onPaletteContainerClick);

function onPaletteContainerClick(event) {
  const isColorSwarchEl = event.target.classList.contains("color-swatch");
  if (!isColorSwarchEl) {
    return;
  }
  const swatchEl = event.target;

  const currentActiveCard = document.querySelector(".color-card.is-active");
  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }
  swatchEl.closest(".color-card").classList.add("is-active");
  document.body.style.backgroundColor = swatchEl.dataset.hex;
}
