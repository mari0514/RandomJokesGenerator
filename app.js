window.addEventListener("load", () => {
    const API = "https://official-joke-api.appspot.com/random_joke";

    const generateJokeButton = document.getElementById("generate-joke-btn");

    function generateJoke() {
        fetch(API)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);

                const joke = `
                    <p>${data.setup}</p>
                    <p id="punchline">- ${data.punchline}</p>
                    <br>
                `;
                document.getElementById("joke-section").insertAdjacentHTML('beforeend', joke);
            })
            .catch(error => {
                console.log(error);
            })
    }

    generateJokeButton.addEventListener("click", () => {
        // alert("GENERATING JOKE");
        generateJoke();
    });
})
