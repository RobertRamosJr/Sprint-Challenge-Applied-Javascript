// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        let topicsElement = document.querySelector(".topics");
        topicsElement.appendChild(createTopics(response.data.topics));
    })
    .catch(error => {
        console.error(error);
    })

function createTopics(data) {

    let trends = [];
    let topics = document.querySelector(".topics");
    for (let i = 0; i < data.length; i++){
        trends.push(document.createElement("div"));
    }
    for (let i = 0; i < trends.length; i++){
        trends[i].textContent = data[i];
        trends[i].classList.add("tab");
        topics.appendChild(trends[i]);
    }
    return topics;
}