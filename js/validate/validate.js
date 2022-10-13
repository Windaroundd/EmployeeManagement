function displayBlock(id) {
  document.getElementById(id).style.display = "block";
}

function checkEmpty(value, idErr) {
  if (value.length == 0) {
    document.getElementById(idErr).innerText = "Trường này không được để rỗng";
    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    document.getElementById(idErr).style.display = "none";
    return true;
  }
}

function checkExistedAccount(idStaff, staffList, idErr) {
  var index = staffList.findIndex(function (staff) {
    return staff.account == idStaff;
  });
  if (index == -1) {
    document.getElementById(idErr).innerText = "";
    document.getElementById(idErr).style.display = "none";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Tài khoản đã tồn tại";
    displayBlock(idErr);
    return false;
  }
}

function checkAccountLength(value, idErr) {
  if (value.length > 6) {
    document.getElementById(idErr).innerText = "Tài khoản tối đa 6 ký tự";
    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    document.getElementById(idErr).style.display = "none";
    return true;
  }
}

function checkValidName(value, idErr) {
  const re =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  var isName = re.test(value);
  if (!isName) {
    document.getElementById(idErr).innerText = "Tên phải là chữ";
    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    document.getElementById(idErr).style.display = "none";
    return true;
  }
}

function checkValidEmail(value, idErr) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (!isEmail) {
    document.getElementById(idErr).innerText = "Email không hợp lệ";
    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}

function checkValidDate(value, idErr) {
  var re =
    /^(?:(0[1-9]|1[012])[\/.](0[1-9]|[12][0-9]|3[01])[\/.](19|20)[0-9]{2})$/;
  var isDate = re.test(value);
  if (!isDate) {
    document.getElementById(idErr).innerText =
      "Vui lòng nhập đúng định dạng: MM/DD/YYYY";
    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}

function checkValidBasicPay(value, idErr) {
  if (value >= 1000000 && value <= 20000000) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText =
      "Lương cơ bản từ 1 000 000 đến 20 000 000";
    displayBlock(idErr);
    return false;
  }
}

function checkValidWorkingHours(value, idErr) {
  if (value >= 80 && value <= 200) {
    document.getElementById(idErr).innerText = "";
    return true;
  } else {
    document.getElementById(idErr).innerText = "Số giờ làm từ 80 đến 200";
    displayBlock(idErr);
    return false;
  }
}

function checkValidPassWord(value, idErr) {
  const re = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/;
  var isPassword = re.test(value);
  if (!isPassword) {
    document.getElementById(
      idErr
    ).innerText = `Mật khẩu phải chứa từ 6-10 kí tự và có ít nhất: 1 kí tự in hoa, 1 kí tự số, 1 kí tự đặc biệt`;

    displayBlock(idErr);
    return false;
  } else {
    document.getElementById(idErr).innerText = "";
    return true;
  }
}
