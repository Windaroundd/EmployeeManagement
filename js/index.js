const STAFFLIST = "STAFFLIST";

var staffList = [];

// get item from local
var dataJson = localStorage.getItem(STAFFLIST);

if (dataJson) {
  var dataRaw = JSON.parse(dataJson);
  staffList = dataRaw.map(function (item) {
    return new Staff(
      item.account,
      item.name,
      item.email,
      item.password,
      item.startDate,
      item.basicPay,
      item.role,
      item.workingHours
    );
  });
  renderStaffList(staffList);
}

function resetForm() {
  document.getElementById("inputForm").reset();
}

function saveLocalStorage() {
  var staffListJson = JSON.stringify(staffList);
  localStorage.setItem(STAFFLIST, staffListJson);
}

function addNewStaff() {
  var newStaff = getInfoFromForm();
  var isValid = true;
  // check valid account
  isValid &=
    checkEmpty(newStaff.account, "tbTKNV") &&
    checkExistedAccount(newStaff.account, staffList, "tbTKNV") &&
    checkAccountLength(newStaff.account, "tbTKNV");

  // check valid staff name
  isValid &=
    checkEmpty(newStaff.name, "tbTen") &&
    checkValidName(newStaff.name, "tbTen");

  // check valid email
  isValid &=
    checkEmpty(newStaff.email, "tbEmail") &&
    checkValidEmail(newStaff.email, "tbEmail");

  //check valid password
  isValid &=
    checkEmpty(newStaff.password, "tbMatKhau") &&
    checkValidPassWord(newStaff.password, "tbMatKhau");

  // check valid start date
  isValid &=
    checkEmpty(newStaff.startDate, "tbNgay") &&
    checkValidDate(newStaff.startDate, "tbNgay");

  // check valid basic pay
  isValid &=
    checkEmpty(newStaff.basicPay, "tbLuongCB") &&
    checkValidBasicPay(newStaff.basicPay, "tbLuongCB");

  // check valid role
  isValid &= checkEmpty(newStaff.role, "tbChucVu");

  // check valid working hours
  isValid &=
    checkEmpty(newStaff.workingHours, "tbGiolam") &&
    checkValidWorkingHours(newStaff.workingHours, "tbGiolam");

  if (isValid) {
    staffList.push(newStaff);
    saveLocalStorage();
    renderStaffList(staffList);
    resetForm();
  }
}

function removeStaff(staffAccount) {
  var index = staffList.findIndex(function (sv) {
    return sv.account == staffAccount;
  });
  if (index == -1) return;

  staffList.splice(index, 1);
  saveLocalStorage();
  renderStaffList(staffList);
}

function editStaff(staffAccount) {
  var index = staffList.findIndex(function (staff) {
    return staff.account == staffAccount;
  });
  if (index == -1) return;

  var staff = staffList[index];
  showStaffInfoToForm(staff);
  document.getElementById("tbChucVu").style.display = "block";
  document.getElementById(
    "tbChucVu"
  ).innerText = `Chức vụ hiện tại: ${staff.role}`;

  document.getElementById("tknv").disabled = true;
}

function updateStaff() {
  var staffEdit = getInfoFromForm();
  var isValid = true;
  // check valid account

  // check valid staff name
  isValid &=
    checkEmpty(staffEdit.name, "tbTen") &&
    checkValidName(staffEdit.name, "tbTen");

  // check valid email
  isValid &=
    checkEmpty(staffEdit.email, "tbEmail") &&
    checkValidEmail(staffEdit.email, "tbEmail");

  //check valid password
  isValid &=
    checkEmpty(staffEdit.password, "tbMatKhau") &&
    checkValidPassWord(staffEdit.password, "tbMatKhau");

  // check valid start date
  isValid &=
    checkEmpty(staffEdit.startDate, "tbNgay") &&
    checkValidDate(staffEdit.startDate, "tbNgay");

  // check valid basic pay
  isValid &=
    checkEmpty(staffEdit.basicPay, "tbLuongCB") &&
    checkValidBasicPay(staffEdit.basicPay, "tbLuongCB");

  // check valid role
  isValid &= checkEmpty(staffEdit.role, "tbChucVu");

  // check valid working hours
  isValid &=
    checkEmpty(staffEdit.workingHours, "tbGiolam") &&
    checkValidWorkingHours(staffEdit.workingHours, "tbGiolam");
  if (isValid) {
    var index = staffList.findIndex(function (staff) {
      return staff.account == staffEdit.account;
    });
    if (index == -1) return;
    staffList[index] = staffEdit;
    document.getElementById("tbChucVu").style.display = "none";
    saveLocalStorage();
    renderStaffList(staffList);
    resetForm();
    document.getElementById("tknv").disabled = false;
  }
}

function filterByRate() {
  var e = document.getElementById("searchName");
  var select = e.options[e.selectedIndex].text;
  if (select == "Tất cả") {
    renderStaffList(staffList);
  } else {
    var RatedList = staffList.filter(function (item) {
      if (item.staffRate == select) {
        return item.staffRate;
      }
    });
    renderStaffList(RatedList);
  }
}
