$(document).ready(function () {
  getData();
});
// Get data from local storage and disply on console and on next page
function getData() {
  let localStorageData = localStorage.getItem("student");
  let studentObj = JSON.parse(localStorageData);
  console.log(studentObj);
  $("#rollno").text(studentObj.rollno);
  $("#firstName").text(studentObj.firstName);
  $("#lastName").text(studentObj.lastName);
  $("#dob").text(studentObj.dob);
  $("#gender").text(studentObj.gender);
  $("#email").text(studentObj.email);
  $("#contactNo").text(studentObj.contactNo);
  $("#branch").text(studentObj.branch);
  $("#registrationDate").text(studentObj.registrationDate);
  $("#parentName").text(studentObj.parentName);
  $("#parentContactNo").text(studentObj.parentContactNo);
}