function addCompany() {
    var company = document.getElementById("company").value;
    var deadline = document.getElementById("deadline").value;
    var cgpa = document.getElementById("cgpa").value;
    var tenthPercentage = document.getElementById("tenthPercentage").value;
    var twelfthPercentage = document.getElementById("twelfthPercentage").value;
    var table = document.getElementById("companyTable");

    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var deadlineCell = row.insertCell(1);
    var cgpaCell = row.insertCell(2);
    var tenthPercentageCell = row.insertCell(3);
    var twelfthPercentageCell = row.insertCell(4);
    var applyCell = row.insertCell(5);

    nameCell.innerHTML = company;
    deadlineCell.innerHTML = deadline;
    cgpaCell.innerHTML = cgpa;
    tenthPercentageCell.innerHTML = tenthPercentage;
    twelfthPercentageCell.innerHTML = twelfthPercentage;

    var applyButton = document.createElement("button");
    applyButton.innerHTML = "Apply Here";
    applyButton.onclick = function() { window.location.href = "apply.php"; };
    applyCell.appendChild(applyButton);

    document.getElementById("company").value = "";
    document.getElementById("deadline").value = "";
    document.getElementById("cgpa").value = "";
    document.getElementById("tenthPercentage").value = "";
    document.getElementById("twelfthPercentage").value = "";
}