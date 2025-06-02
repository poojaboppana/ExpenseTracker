
let expenses= JSON.parse(localStorage.getItem("expenses")) || [];
let totalexpense;
function submitIncome(){
  let income=document.getElementById("income").value;
   localStorage.setItem("totalIncome",JSON.stringify(income));
display();
}
function submitExpense(){
   let expense=document.getElementById("expense").value;
   totalexpense +=expense;
   expenses.push({amount: expense, date: new Date().toLocaleString()});
   localStorage.setItem("expenses",JSON.stringify(expenses));
   display();
}
function display(){
     const income = JSON.parse(localStorage.getItem("totalIncome")) || 0;
      const incomeDiv = document.getElementById("incomeDisplay");
      incomeDiv.innerHTML = `Your Total Income is ${income}`;
    
        const expenseDisplay=document.getElementById('expenseDisplay');
        expenseDisplay.innerHTML='';
  expenses.forEach((expense,index)=>{
   const expDiv = document.createElement("div");
        expDiv.innerHTML = `On ${expense.date}, your expense is ${expense.amount}`;
        expenseDisplay.appendChild(expDiv);

      });
}
window.onload=display;