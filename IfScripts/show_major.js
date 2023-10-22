const studentName = "Maria Lopez";
const studentMajor = "ENG";
let nameOfMajor;
let departmentOffice;

if (studentMajor == "BIOL") {
    nameOfMajor = "Biology";
    departmentOffice = "Science Bldg, Room 310 ";

} else if (studentMajor == "CSCI") {
    nameOfMajor = "Computer Science";
    departmentOffice = "Sheppard Hall, Room 314";

} else if (studentMajor == "ENG") {
    nameOfMajor = "English";
    departmentOffice = "Kerr Hall, Room 201";

} else if (studentMajor == "HIST") {
    nameOfMajor = "History";
    departmentOffice = "Kerr Hall, Room 114";

} else if (studentMajor == "MKT") {
    nameOfMajor = "Marketing";
    departmentOffice = "Westly Hall, Room 310";

} else {
    nameOfMajor = "unknown";
    departmentOffice = "unknown";
}

console.log( ` Student: ${studentName}
\n Major: ${nameOfMajor}
\n Advising Location: ${departmentOffice}`);