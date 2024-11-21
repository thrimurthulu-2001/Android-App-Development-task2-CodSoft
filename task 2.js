const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
];

function getQuoteOfTheDay() {
    const today = new Date();
    const index = today.getDate() % quotes.length; // Get a quote based on the day of the month
    return quotes[index];
}

function displayQuote() {
    const { text, author } = getQuoteOfTheDay();
    document.getElementById('quote').innerText = text;
    document.getElementById('author').innerText = `— ${author}`;
}

function shareQuote() {
    const quoteText = document.getElementById('quote').innerText;
    const quoteAuthor = document.getElementById('author').innerText;
    const shareText = `${quoteText} ${quoteAuthor}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Inspiring Quote',
            text: shareText,
            url: window.location.href
        }).then(() => {
            console.log('Quote shared successfully!');
        }).catch((error) => {
            console.error('Error sharing the quote:', error);
        });
    } else {
        alert("Sharing is not supported in this browser.");
    }
}

function addToFavorites() {
    const quoteText = document.getElement