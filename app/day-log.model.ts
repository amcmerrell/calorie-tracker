export class DayLog {
  public date: Date;
  constructor(dateString: string) {
    this.date = new Date(Date.parse(foodDate) + this.checkDateOffset());
  }

  checkDateOffset() {
    var tempDate: Date = new Date();
    return tempDate.getTimezoneOffset() * 60 * 1000;
  }
}
