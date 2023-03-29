function Generate() {
  const card = document.querySelector(".card");
  const RandomNumber = Math.floor(Math.random() * 10000);
  card.src = `https://meta-data.syltare.com/${RandomNumber}/image.png`;

  const CardName = document.querySelector(".CardName");
  const introduce = document.querySelector(".introduce");
  const Rarity = document.querySelector(".Rarity");
  const Attack = document.querySelector(".Attack");
  const Hp = document.querySelector(".Hp");
  const Element = document.querySelector(".Element");

  fetch(`https://meta-data.syltare.com/${RandomNumber}/info.json`)
    .then((response) => response.json())
    .then((data) => {
      CardName.innerText = data.name;
      introduce.innerText = data.description;

      // data.attrivutes의 객체에서 value값 접근
      Rarity.innerText = data.attributes[0].value;
      Attack.innerText = data.attributes[1].value;
      Hp.innerText = data.attributes[2].value;
      Element.innerText = data.attributes[6].value;
    });
}
