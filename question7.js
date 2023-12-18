// 7.1 Hämta användare (3p)
// Du ska använda Fetch för att hämta användarinformation
// från URL:en: https://jsonplaceholder.typicode.com/users.
// Visa endast användare som har ett användar-id som är
// högre än 5.
// Presentera användarnas namn, gatuadress (street) och
// företagsnamn på HTML-sidan.

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((userData) => {
    const userEl = document.createElement("div");
    userEl.setAttribute("class", "section");
    userEl.innerHTML = `<h3>${userData.name} ${userData.street} ${userData.company}</h3>`;
    containerEl.appendChild(userEl);
  });
}

// 7.2 Styla varje användare (3p)
// Varje användare ska ha följande style:
// margin: 15px
// padding: 20px
// Texten på namnet ska vara bold och 24 pixlar
// Övrig text ska vara 16 pixlar
// Text-färgen ska ha färg-kod: #333333
// Backgrundsfärgen för varje användare ska ha färg-kod: #dddddd
// När man för muspekaren över en användare ska bakgrundsfärgen ändras till #eeeeee
// Visa användare i fyra kolumner för desktop och en kolumn för mobil

userPosts.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.style.padding = "20px";
      userDiv.style.margin = "15px";
      userDiv.style.backgroundColor = #dddddd;
      userDiv.name = "bold", "24px"
      userDiv.body = "16px"
      userDiv.body.color = #333333;
      Div.textContent = `Title: ${post.title}, Body: ${post.body}`;

      userContainer.appendChild(userDiv);
    });
  })
  fetch.catch((error) => console.error(error));
