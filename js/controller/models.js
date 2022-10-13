function Staff(
  _account,
  _name,
  _email,
  _password,
  _startDate,
  _basicPay,
  _role,
  _workingHours
) {
  this.account = _account;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.startDate = _startDate;
  this.basicPay = Number(_basicPay);
  this.role = _role;

  this.workingHours = Number(_workingHours);

  this.totalSalaryCalc = function () {
    switch (this.role) {
      case "Giám đốc":
        this.totalSalary = (this.basicPay*1)  * 3;
        break;
      case "Trưởng phòng":
        this.totalSalary = (this.basicPay*1) * 2;
        break;
      case "Nhân viên":
        this.totalSalary = (this.basicPay*1);
        break;
    }
    return this.totalSalary;
  };

  this.staffRating = function () {
    if (this.workingHours >= 192) {
      this.staffRate = "Xuất sắc";
    } else if ((this.workingHours*1) >= 176 && (this.workingHours*1) < 192) {
      this.staffRate = "Giỏi";
    } else if ((this.workingHours*1) >= 160 && (this.workingHours*1) < 176) {
      this.staffRate = "Khá";
    } else if ((this.workingHours*1) < 160) {
      this.staffRate = "Trung bình";
    }
    return this.staffRate;
  };
}
