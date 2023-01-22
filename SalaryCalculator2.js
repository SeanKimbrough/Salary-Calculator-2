console.log("SalaryCalculator2.js is working!!");
$(document).ready(onReady);

let employees = [
    {
        firstName:'Victor',
        lastName:'Brown',
        idNumber: 17184,
        jobTitle: 'Executive Assistant',
        annualSalary: `$65,000`,
    },
    {
        firstName:'James',
        lastName:'Johnson',
        idNumber: 16713,
        jobTitle: 'Branch Manager',
        annualSalary: `$73,000`,
    },
    {
        firstName:'Candice',
        lastName:'Cooper',
        idNumber: 17282,
        jobTitle: 'Human Resources',
        annualSalary: `$56,000`,
    },
    {
    firstName:'Lupita',
        lastName:'Garcia',
        idNumber: 16841,
        jobTitle: 'Accountant',
        annualSalary: `$68,500`,
    },
];

function onAddEmployee(evt){
    //Do not refresh page plz
    evt.preventDefault();
    console.log('In onAddEmployee ()');

    //Todo:
    //Make a object
    let newEmployee = {
        firstName: $('#nameInput').val(),
        lastName: $('#nameInput').val(),
        idNumber: Number($('#idNumberInput').val()),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: Number($('#annualSalaryInput').val()),

    }; 
    console.log("New Employee Added", newEmployee);
    //add the object to the array 
    // render (); with the new employee in array
    employees.push(newEmployee);
    render();

}

function onReady(){
    render()

    //$('#addNewEmployee').on('submit', onAddEmployee);
    //Handle
   // $(document).on('click', '.deleteBtn', onDelete);
   // Initial Render 
   // Get those on the DOM
   //Handle new at form
   
   $('#addEmployeeForm').on('submit', onAddEmployee);
   //Handle
   $(document).on('click', '.deleteEmployeeBtn', onDeleteEmployee);
   
}  
   
   
function onDeleteEmployee (){
    console.log('Delete Employee' );

    let myTr = $(this).parent().parent();
    let indexOfEmployee = myTr.index();
    console.log('indexOfEmployee' , indexOfEmployee);
    // JS lets us remove an element by index
    //using .splice()
    employees.splice(indexOfEmployee, 1 ); //remove employee
    console.log('employee, after removal' , employees);   
    render()
}

function render() {
    console.log('in render ()');

    for (let employee of employees) {
        console.log('for annual Salary...', employee.name);

        $('#salary-table').append(`
        <!--HTML goes here -->
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td>
            <button class='deleteEmployeeBtn'></button
            </td>
        </tr>
        `);
}
}



