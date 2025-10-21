(function () {
  const containerElm = document.getElementById("container");
  const colorBoxElm = document.getElementById("colorBox");
    const btnElm = document.getElementById("generator");
    const copyIcon = document.getElementById('copyIcon');
  function colorGenerator() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  btnElm.addEventListener("click", () => {
    const ranColor = colorGenerator();
    colorBoxElm.innerText = ranColor;
    containerElm.style.backgroundColor = ranColor;
  });
})();
