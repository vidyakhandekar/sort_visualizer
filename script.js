const display=document.querySelector('.display');
const range =document.querySelector('#range');
const rangeDisplay =document.querySelector('#range-display');
const start =document.querySelector('#start');
let barsLen=[];
let bars=[];



//handle slider
let rangeValue=30;
createBars();
function setRange(){
    range.value = rangeValue;
    rangeDisplay.innerText = rangeValue;
    createBars();
}
range.addEventListener('input', (e) => {
    rangeValue = e.target.value;
    setRange();
})



function createBars(){
    console.log(rangeValue);
    //bars=[];
         barsLen=[];
         bars=[];
    display.innerHTML='';
    for(let i=0;i<rangeValue;i++){
        const newDiv=document.createElement("div");
        newDiv.className="bar";
        display.appendChild(newDiv);
        let h=generateHeight();
        barsLen.push(h);
        h=h+"px";
        newDiv.style.height=h;
        bars.push(newDiv);
        
    }
    
    //bars.push(newDiv);
}
start.addEventListener('click',bubbleSort);

//generate bar height
function generateHeight(){
    let height=Math.floor(Math.random()*(400-50)+50);
    return height;
}
async function delay(milliseconds) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, milliseconds);
      });
    }
    function swap(el1, el2) {
        console.log('In swap()');
        
        let temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
        
    }
async function bubbleSort(){
    let n=barsLen.length;
    for(let i=0;i<n-1;i++){
        console.log('In ith loop');
        for(let j=0;j<n-i-1;j++)
        {
            console.log('In jth loop');
            bars[j].style.backgroundColor="red";
            bars[j+1].style.backgroundColor="red";
            if(parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)){
                console.log('In if condition');
                await delay(500);
                swap( bars[j],bars[j+1]);
            }
                 bars[j].style.backgroundColor="black";
                bars[j+1].style.backgroundColor="black";
            
        }
        bars[n-i-1].style.backgroundColor="green";
    }
    bars[0].style.backgroundColor="green";
}
