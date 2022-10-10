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
  this.basicPay = _basicPay;
  this.role = _role;

  this.workingHours = _workingHours;

  this.totalSalaryCalc = function () {
    switch (this.role) {
      case "Giám đốc":
        this.totalSalary = this.basicPay * 3;
        break;
      case "Trưởng phòng":
        this.totalSalary = this.basicPay * 2;
        break;
      case "Nhân viên":
        this.totalSalary = this.basicPay;
        break;
    }
    return this.totalSalary;
  };

  this.staffRating = function () {
    if (this.workingHours >= 192) {
      this.staffRate = "Xuất sắc";
    } else if (this.workingHours >= 176) {
      this.staffRate = "Giỏi";
    } else if (this.workingHours >= 160) {
      this.staffRate = "Khá";
    } else if (this.workingHours < 160) {
      this.staffRate = "Trung bình";
    }
    return this.staffRate;
  };
}
