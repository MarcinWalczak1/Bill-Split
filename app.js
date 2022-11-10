const error = document.querySelector(".error");
let price = document.querySelector("#price");
let people = document.querySelector("#people");
let tip  = document.querySelector("#tip");
const count = document.querySelector(".count");
const cost = document.querySelector(".cost");
const costInfo = document.querySelector(".cost-info");


const showBill = () =>{
    if(price.value == "" || people.value== "" || tip.value == 0){
        error.innerHTML = "Powinieneś uzupełnić pola";
        costInfo.style.display = "none";
    }else{
        error.innerHTML = "";
        countBill();
    }
        
}
    const countBill = () =>{
        const priceValue = parseFloat(price.value);
        const peopleValue = parseInt(people.value);
        const tipValue = parseFloat(tip.value);

        const sum = (priceValue+(priceValue * tipValue)) / peopleValue;
        costInfo.style.display = "block";

        cost.innerHTML = sum.toFixed(2) + " zł";

        

        


    }


count.addEventListener('click', showBill)
