let departmentNum = 5;
let departmentName;

switch (departmentNum) {
    case 1:
        departmentName = "Marketing";
        break;
    case 5:
        departmentName ="Human Resources";
        break;
    case 10:
        departmentName = "Accounting";
        break;
    case 12:
        departmentName = "Legal";
        break;
    case 18:
        departmentName ="IT";
        break;
    case 6:
        departmentName = "Customer Relations";
        break;
    default:
        departmentName = "Unknown Department"
}   

console.log(departmentName);