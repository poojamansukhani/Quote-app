let realData = "";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQuotes = document.getElementById("newQuotes");
const tweet = document.getElementById("tweet");
const tweetQuote = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);
}
const getNewQuotes  = () => {
    let rnum =  Math.floor(Math.random() * 20);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    quotesData.author == null ? (author.innerText = "Unknown") : (author.innerText = `${quotesData.author}`);
};
const getQuote = async()=>{
    const api = "https://type.fit/api/quotes";
    try{
        //fetch API till come await. 
        let data = await fetch(api);
        //convert redable string to json object 
        realData = await data.json();
        getNewQuotes();
    } catch(err){
        console.log(err);
    }
}
tweet.addEventListener('click', tweetQuote)
newQuotes.addEventListener('click', getNewQuotes);
getQuote();