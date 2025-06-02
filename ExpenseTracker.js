
let expenses= JSON.parse(localStorage.getItem("expenses")) || [];
function submitIncome(){
  let income=document.getElementById("income").value;
   localStorage.setItem("totalIncome",JSON.stringify(income));
display();
}
function submitExpense(){
   let expense=document.getElementById("expense").value;
   expenses.push({amount: expense, date: new date().LocalString()});
   localStorage.setItem("expenses",JSON.stringify(expense));
   display();
}
function display(){
     const income = JSON.parse(localStorage.getItem("totalIncome")) || 0;
      const incomeDiv = document.getElementById("incomeDisplay");
      incomeDiv.innerHTML = `Your Total Income is ${income}`;
      expenses.forEach((expense,index)=>{
        
      })
}
window.onload=display;