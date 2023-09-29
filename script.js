const history= [];
const images = [];
const cards=[];

//create image array that have all images src
const imagesEl = document.querySelectorAll("img");
imagesEl.forEach(image => {
    images.push(image.src);
})


const btn = document.querySelector("button");
// btn to flip and shuffle
btn.addEventListener("click",()=>{
    document.querySelectorAll(".flip-inner").forEach(card=>{
        card.classList.remove("flip");
    })
    history.length=0;
    cards.length = 0;
    shuffle(images);
   
})

const clickArea = document.querySelector(".container");
let N=0;
clickArea.addEventListener("click", (e)=>{
    // console.log(e.target.parentNode.classList);
    // console.log(document.querySelector(`${e.target.parentNode}`));
    // console.log(document.querySelector(`#${e.target.dataset.link}`) );
    // console.log(document.querySelector(`#${e.target.dataset.link}`).src );

//histry of click images src
    history.push(document.querySelector(`#${e.target.dataset.link}`).src);

    e.target.parentNode.classList.add("flip");
    //keep cards history so we can flip them later
    cards.push(e.target.parentNode);

    N++
    if(N == 2){
        if(history.at(-2) != history.at(-1) ){
         //if the pics are not match remove 2 last from history array
            history.pop(); history.pop();
    //wait 1 sec and then flip 2 last cards     
            setTimeout(()=>{
                cards.at(-1).classList.remove("flip");
            cards.at(-2).classList.remove("flip");
            },1000);
            

        }
        else if(history.length == imagesEl.length){
            setTimeout(()=>{
                alert("finished the game congrats");
               
            },1000);
        }
        N=0;
    }
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    //change images src with new array
    for (let i=0; i<array.length; i++){
        imagesEl[i].src = array[i];
    }
  
    return array;
  }