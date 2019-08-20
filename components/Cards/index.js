// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        console.log(response.data.articles.bootstrap);
        let cardsContainer = document.querySelector(".cards-container");
        for (i = 0; i < response.data.articles.bootstrap.length; i++) {
            cardsContainer.appendChild(createCard(response.data.articles.bootstrap[i]));
        }

        for (i = 0; i < response.data.articles.javascript.length; i++) {
            cardsContainer.appendChild(createCard(response.data.articles.javascript[i]));
        }

        for (i = 0; i < response.data.articles.jquery.length; i++) {
            cardsContainer.appendChild(createCard(response.data.articles.jquery[i]));
        }
        for (i = 0; i < response.data.articles.node.length; i++) {
            cardsContainer.appendChild(createCard(response.data.articles.node[i]));
        }

        for (i=0; i<response.data.articles.technology.length; i++){
            cardsContainer.appendChild(createCard(response.data.articles.technology[i]));
            }

    })
    .catch(error => {
        console.error(error);
    })

function createCard(article) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline");
    headlineDiv.textContent = article.headline;
    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");
    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    const img = document.createElement('img');
    img.src = article.authorPhoto;
    let span = document.createElement("span");
    span.textContent = article.authorName;

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(span);

    return cardDiv;
}