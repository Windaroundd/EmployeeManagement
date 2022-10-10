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
  staffList.push(newStaff);
  saveLocalStorage();
  renderStaffList(staffList);
  resetForm();
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

function filterByRate() {
  var e = document.getElementById("searchName");
  var select = e.options[e.selectedIndex].text;
  var RatedList = staffList.filter(function (item) {
    if (item.staffRate == select) {
      return item.staffRate;
    }
  });
  renderStaffList(RatedList);
}
