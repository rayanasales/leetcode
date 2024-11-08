var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let result = 0;
  for (let hour of hours) if (hour >= target) result++;
  return result;
};
