const text = document.querySelector(".text");
const refresh = document.querySelector(".refresh");
const hintText = document.querySelector(".hintText");
const checkBtn = document.querySelector(".checkBtn");
const input = document.querySelector("input");
const timer = document.querySelector(".timer");
let correctWord , timeId;
const triggerTime = (time)=>{
    clearInterval(timeId);
    timeId = setInterval(()=>{
        if(time > 0){
            time--;
            timer.innerText = `${time}s`;
        }else{
            alert("oops ! your time is over bro ");
            clearInterval(timeId);
            shootGame();
        }
        
        
    } , 1000);
    
}
function shootGame(){
    triggerTime(31);
    const obj = bag[Math.floor(Math.random()*bag.length)];
    correctWord = obj.word;
    let word = (obj.word).split("");
    for(let i = word.length-1;i >0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [word[i] , word[j]] = [word[j] , word[i]];
        
    }
    input.setAttribute("maxlength" , obj.word.length);
    let shuffleWord = word.join("");
    input.value="";
    text.innerText = shuffleWord;
    hintText.innerText = obj.hint;
    
}
refresh.addEventListener("click" , shootGame);

checkBtn.addEventListener("click" , ()=>{
    
    const userData = input.value;

    if(!userData){
        alert("Kindly enter your guess first 😢");
        return;
    }
    if(userData !== correctWord){
        alert(`sorry ! ${userData} is wrong guess .....`);
        input.value="";
    }else{
        alert(`wooooooow ! ${userData} is correct answer`);
        
        shootGame();
    }

})
shootGame();