function getInfoFromForm() {
  var account = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var basicPay = document.getElementById("luongCB").value * 1;
  var workingHours = document.getElementById("gioLam").value * 1;
  var startDate = document.getElementById("datepicker").value;
  var select = document.getElementById("chucvu");
  var roleValue = select.options[select.selectedIndex].text;
 
  var staff = new Staff(
    account,
    name,
    email,
    password,
    startDate,
    basicPay,
    roleValue,
    workingHours
  );
  return staff;
}

function renderStaffList(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var currentStaff = list[i];
    var contentTr = `<tr style="font-size: 15px">
        <td>${currentStaff.account}</td>
        <td>${currentStaff.name}</td>
        <td>${currentStaff.email}</td>
        <td>${currentStaff.startDate}</td>
        <td>${currentStaff.role}</td>
        <td>${currentStaff.totalSalaryCalc()}</td>
        <td>${currentStaff.staffRating()}</td>
        <td style="display: flex;">
        <button onclick="removeStaff('${
          currentStaff.account
        }')" style="margin-right: 1.5px"  class="btn btn-danger">Xóa</button>
        <button onclick="editStaff('${currentStaff.account}')" data-toggle="modal" data-target="#myModal" style="margin-left: 1.5px" class="btn btn-primary">Sửa</button>
        </td>
        </tr>`;
    contentHTML += contentTr;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function showStaffInfoToForm(staff) {
  document.getElementById("tknv").value = staff.account;
  document.getElementById("name").value = staff.name;
  document.getElementById("email").value = staff.email;
  document.getElementById("password").value = staff.password;
  document.getElementById("luongCB").value = staff.basicPay;
  document.getElementById("gioLam").value = staff.workingHours;
  document.getElementById("datepicker").value = staff.startDate;
  
}
