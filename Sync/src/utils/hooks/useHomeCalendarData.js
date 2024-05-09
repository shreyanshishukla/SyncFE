function initializeDates() {
  dates = [];
  var c = 30;
  var n = 0;
  for (let i = 0; i < 5 && n < 31; i++) {
    var d = [];
    for (let j = 0; j < 7; j++) {
      var dd = (c + n) % 31;
      if (dd == 0) dd = 31;
      d.push({ data: dd, color: colors[n % 5] });
      n++;
    }
    dates.push(d);
  }
}
var colors = ["#C8FFD4", "#E3DFFD", "#B8E8EC", "#B1AFFF", "#FDFDBD", "E3DFFD"];
var days = [
  { data: "Sa", color: "#E3DFFD" },
  { data: "Su", color: "#C8FFD4" },
  { data: "Mo", color: "#B8E8EC" },
  { data: "Tu", color: "#E3DFFD" },
  { data: "We", color: "#FDFDBD" },
  { data: "Th", color: "#E3DFFD" },
  { data: "Fr", color: "#FDFDBD" },
];
var dates = [];
export default () => {
  initializeDates();
  return { colors, days, dates };
};
//@TODO
//check why not working without the var
