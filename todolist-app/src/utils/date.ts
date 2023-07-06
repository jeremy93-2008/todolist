export function isToday(date: Date) {
  return date.toLocaleDateString() === new Date().toLocaleDateString();
}

export function isThisWeek(date: Date) {
  const firstDayOfTheWeek = new Date();
  const day = firstDayOfTheWeek.getDay() || 7;
  if (day !== 1) firstDayOfTheWeek.setHours(-24 * (day - 1));

  const lastDayOfTheWeek = new Date(firstDayOfTheWeek);
  lastDayOfTheWeek.setDate(lastDayOfTheWeek.getDate() + 6);

  return date >= firstDayOfTheWeek && date <= lastDayOfTheWeek;
}
