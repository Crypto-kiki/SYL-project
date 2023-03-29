function Generate() {
  const card = document.querySelector(".card");
  const RandomNumber = Math.floor(Math.random() * 10000);
  card.src = `https://meta-data.syltare.com/${RandomNumber}/image.png`;

  const CardName = document.querySelector(".CardName");
  const introduce = document.querySelector(".introduce");

  fetch(`https://meta-data.syltare.com/${RandomNumber}/info.json`)
    .then((response) => response.json())
    .then((data) => {
      CardName.innerText = data.name;
      introduce.innerText = data.description;
    });
}
