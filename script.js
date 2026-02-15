const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
