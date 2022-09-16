let userForm=document.getElementById("user-form");
const retrieveEntries=()=>
{
    let entries=localStorage.getItem("user-entries");
    if(entries){entries=JSON.parse(entries);}
    else{entries=[];}
    return entries;
}
window.onload=function() {
    var datec=new Date();
    var date=datec.getDate();
    var month=datec.getMonth() + 1;
    var year=datec.getFullYear();
    if (date<10) 
    {
      date="0"+date;
    }
    if (month<10) 
    {
      month="0"+month;
    }
    minYear=year-55; 
    maxYear=year-18; 
    var minimum=minYear+"-"+month+"-"+date;
    var maximum=maxYear+"-"+month+"-"+date;
    document.getElementById("dob").setAttribute("min", minimum);
    document.getElementById("dob").setAttribute("max", maximum);
  };
let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell=`<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell=`<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell=`<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell=`<td class='border px-4 py-2'>${entry.acceptTermsandconditions}</td>`;
        const row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms?</th>
    </tr>${tableEntries}</table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}
const saveUserForm=(event)=>{
event.preventDefault();
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const dob=document.getElementById("dob").value;
  const acceptTermsandconditions=document.getElementById("acceptTerms").checked;
const entry={
name,
  email,
  password,
  dob,
  acceptTermsandconditions
};
userEntries.push(entry);
  localStorage.setItem("user-entries",JSON.stringify(userEntries));
  displayEntries();
}
userForm.addEventListener("submit",saveUserForm);
displayEntries();