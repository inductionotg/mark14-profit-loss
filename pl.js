
const btnS = document.querySelector('#btn-submit');
const output = document.querySelector('.output');

function styling(){
    output.style.fontWeight="bold";
    output.style.textAlign="right";
    output.style.fontSize="2rem";
    output.style.textAlign="center";
}

function calculateProfitAndLoss(){
    const initial = Number(document.querySelector('#initial-price').value);
    const quant = Number(document.querySelector('#quantity').value);
    const current = Number(document.querySelector('#current-price').value);
    console.log(initial);
    console.log(quant);
    console.log(current);
    let profit = 0;
    let loss = 0;
    let profitcent = 0;
    let losscent  = 0;
    if (current > initial)
    {
        profit = current*quant - initial*quant;
        profitcent = (profit*100)/(initial*quant);
        output.textContent = "Yay!! Your Profit is"+" "+profit.toFixed(2) +" "+"and profit Percentage is:" + profitcent.toFixed(2)+"%"+"🤑";
        output.style.color="green";
        styling();
        output.style.background="yellowgreen";
    }
    else{
        loss = initial*quant - current*quant;
        console.log("loss hua h",loss);
        losscent = (loss/(initial*quant))*100;
        output.textContent = "Whoops!! Your loss is" + loss.toFixed(2) + "and loss Percentage is:" + losscent.toFixed(2) +"%" +":(😭" ;
        output.style.color="red";
        styling();
        output.style.background="aqua";
    }
}

btnS.addEventListener('click',calculateProfitAndLoss);