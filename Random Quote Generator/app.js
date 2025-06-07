const getQuote = async () => {
    try {
        const res = await axios("https://dummyjson.com/quotes/random");
        return res.data.quote;
    } catch (e) {
        return "Error";
    }
}

const generate = document.querySelector("button");
const quote = document.querySelector("#Quote");
generate.addEventListener('click', async () => {
    try {
        quote.textContent = await getQuote();
    } catch (e) {
        console.log("error", e)
    }
});