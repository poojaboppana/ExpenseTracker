let expenses= JSON.parse(localStorage.getItem("expenses")) || [];
let totalexpense=0;
function submitIncome(){
  let income=document.getElementById("income").value;
   localStorage.setItem("totalIncome",JSON.stringify(income));
display();
}
function submitExpense(){
   let expense=document.getElementById("expense").value;
   if(expense>0){
   totalexpense +=expense;
   expenses.push({amount: expense, date: new Date().toLocaleString()});
   localStorage.setItem("expenses",JSON.stringify(expenses));
     expense.innerHTML='';
   display();
   }
   else{
      alert("Enter the Expense greater than 0");
   }
 
}
function display(){
     const income = JSON.parse(localStorage.getItem("totalIncome")) || 0;
      const incomeDiv = document.getElementById("incomeDisplay");
      incomeDiv.innerHTML = `Your Total Income is ${income}`;
        const expenseDisplay=document.getElementById('expenseDisplay');
        expenseDisplay.innerHTML='';
        let total=0;
  expenses.forEach((expense,index)=>{
   total+=Number(expense.amount);
   const expDiv = document.createElement("div");
   expDiv.className="expdiv";
        expDiv.innerHTML = `On ${expense.date}, your expense is ${expense.amount}
         <button onclick="deleteExpense(${index})">Delete</button>`;
        expenseDisplay.appendChild(expDiv);

      });
      const summaryDiv = document.getElementById("summary");
      summaryDiv.style.color="#BBFBFF";
  summaryDiv.innerHTML = `Total Expenses: ₹${total}<br>Balance: ₹${income - total}`;
}

function deleteExpense(index){
   expenses.splice(index,1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
   display();
}

window.onload=display;