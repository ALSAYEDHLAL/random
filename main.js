//Use an array to hold the value of the quotes

// var author = document.getElementById("author")
// var quote = document.getElementById("quote")

// var arrayOfQuotes = [
//     {author: '--Jim Rohn', 
//      quote: '"Beware of what you become in pursuit of what you want."',
//     },

//     {author: '--Epictetus', 
//      quote: '"It\'s not what happens to you, but how you react to it that matters."',
//     },

//     {author: '--Frank Sinatra', 
//      quote: '"The best revenge is massive success."',
//     },

//     {author: '--Wayne Gretzy', 
//      quote: '"You miss 100% of the shots you don\'t take."',
//     },

//     {author: '--Nelson Mandela', 
//      quote: '"Resentment is like drinking poison and waiting for your enemies to die."',
//     },

//     {author: '--Elbert Hubbard', 
//      quote: '"Do not take life too seriously. You will not get out alive."',
//     },
// ];


// function generateQuote(){
//     var random = Math.ceil(Math.random() * 10);

//     if(random == 0){
//         author.innerHTML = arrayOfQuotes[0].author;
//         quote.innerHTML = arrayOfQuotes[0].quote;
//     }else if(random == 1){
//         author.innerHTML =arrayOfQuotes [1].author;
//         quote.innerHTML = arrayOfQuotes[1].quote;
//     }else if(random == 2){
//         author.innerHTML = arrayOfQuotes [2].author;
//         quote.innerHTML = arrayOfQuotes[2].quote;
//      }else if(random == 3){
//         author.innerHTML = arrayOfQuotes [3].author;
//         quote.innerHTML = arrayOfQuotes[3].quote;
//      }else if(random == 4){
//         author.innerHTML = arrayOfQuotes [4].author;
//         quote.innerHTML = arrayOfQuotes[4].quote;
//      }else if(random == 5){
//         author.innerHTML = arrayOfQuotes [5].author;
//         quote.innerHTML = arrayOfQuotes[5].quote;
//      }else if(random == 6){
//         author.innerHTML = arrayOfQuotes [6].author;
//         quote.innerHTML = arrayOfQuotes[6].quote;
//      }else if(random == 7){
//         author.innerHTML = arrayOfQuotes [7].author;
//         quote.innerHTML = arrayOfQuotes[7].quote;
//      }else if(random == 8){
//         author.innerHTML = arrayOfQuotes [8].author;
//         quote.innerHTML = arrayOfQuotes[8].quote;
//      }else if(random == 9){
//         author.innerHTML = arrayOfQuotes [9].author;
//         quote.innerHTML = arrayOfQuotes[9].quote;
//      };



//     // console.log(Math.ceil(Math.random() * 10));
// }



var arrayOfQuotes = [
    {'author': 'Jim Rohn', 
     'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function generateQuote(){
    var random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quote').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${arrayOfQuotes[random].author}`;
    
}
