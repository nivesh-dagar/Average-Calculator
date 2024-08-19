var calculateFormEL = document.getElementById("calculateForm");
var resultEl = document.getElementById("result");

var calculateMarks = (event) => {
  var maxMarks = 500;
  event.preventDefault();

  var formData = new FormData(calculateFormEL);
  var data = {};
  formData.forEach((value, key) => {
    data[key] = +value;
  });

  var totalMarks = data.sub1 + data.sub2 + data.sub3 + data.sub4 + data.sub5;
  var percentage = (totalMarks / maxMarks) * 100;
  resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} marks and ${percentage} percentage`;
};
