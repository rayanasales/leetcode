var convertDateToBinary = function (date) {
  let [year, month, day] = date.split("-");
  let decToBin = (dec) => (dec >>> 0).toString(2);
  return `${decToBin(year)}-${decToBin(month)}-${decToBin(day)}`;
};
