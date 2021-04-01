const formatter = new Intl.NumberFormat("ru-RU", {
  currency: "RUB",
  style: "currency",
});

export function currency(vulue) {
  return formatter.format(vulue);
}
