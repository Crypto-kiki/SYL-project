// import axios from "axios";

function onClickToggle(value) {
  const login = document.querySelector(".login");
  const logout = document.querySelector(".logout");

  if (value) {
    logout.style.display = "inline-block";
    login.style.display = "none";
  } else {
    login.style.display = "flex";
    logout.style.display = "none";
  }
}

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
  const SearchInput = document.querySelector(".SearchInput");

  fetch(`https://meta-data.syltare.com/${RandomNumber}/info.json`)
    .then((response) => response.json())
    .then((data) => {
      CardName.innerText = data.name;
      SearchInput.value = data.name;
      introduce.innerText = data.description;

      // data.attrivutes의 객체에서 배열-> 객체 value값 접근
      Rarity.innerText = data.attributes[0].value;
      Attack.innerText = data.attributes[1].value;
      Hp.innerText = data.attributes[2].value;
      Element.innerText = data.attributes[6].value;
    });
}

let isLoading = false;
async function onClickSearch() {
  const SearchInput = document.querySelector(".SearchInput");
  const SearchResult = document.querySelector(".SearchResult");

  if (!SearchInput.value) return;
  if (isLoading) return;

  isLoading = true;
  const question = SearchInput.value;
  SearchInput.value = "검색 중 입니다...";

  const response = await axios.post(
    "https://holy-fire-2749.fly.dev/chat",
    {
      question,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer BLOCKCHAINSCHOOL3",
      },
    }
  );

  if (response.status === 200) {
    SearchResult.style.display = "inline";
    SearchResult.innerText = response.data.choices[0].message.content;
  }

  SearchInput.value = "";
  isLoading = false;
}
