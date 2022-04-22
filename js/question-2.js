//Q2
const api_url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d58ee0d9db1e4806ba3a1552282f3090"
const api_key = {
    "header": {
        "my.new.key": "d58ee0d9db1e4806ba3a1552282f3090",
    }
};

const resultsContainer = document.querySelector(".games");


async function callApi() {
    try {
        const response = await fetch(api_url, api_key);
        const data = await response.json();
        console.log(data);
        const results = data.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            if (i === 8) {
                break;
            }
            console.log(results[i].name);
            resultsContainer.innerHTML += `<ul>${results[i].name}
            <li>${results[i].rating}</li>
            <li>${results[i].tags.length}</li>
            </ul>`
        }
    } catch (error) {
        resultsContainer.innerHTML = `<div>An error occured when calling the API</div>`;
        console.log(error);
    }
};


callApi()