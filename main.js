const chess = document.querySelector(".chess");

const containerWidth = chess.clientWidth;

for (let i = 0; i < 64; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute(
    "style",
    `width: ${containerWidth / 8}px; height: ${containerWidth / 8}px`
  );

  let row = Math.floor(i / 8);

  if ((i + row) % 2 !== 0) {
    box.classList.add("bg-dark");
  } else {
    box.classList.add("bg-light");
  }
  chess.appendChild(box);
}
