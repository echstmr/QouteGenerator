const quoteTxt = document.getElementById('qouteTxt'); 
const quoteAuthor = document.getElementById('qouteAuthor'); 
const nextBtn = document.getElementById('nextBtn');


const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "It's okay to make mistake just give up.", author: "Lee Roi" }
];


function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteTxt.innerHTML = `
        <span><i class="fa-solid fa-quote-left fa-xl"></i></span>
        ${randomQuote.text}
        <span><i class="fa-solid fa-quote-right fa-xl"></i></span>
    `;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}


nextBtn.addEventListener('click', displayRandomQuote);


displayRandomQuote();
