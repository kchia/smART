// date formatter
// Thanks to Kenny for helping me identify ISO Date,
// and getting me started with https://stackoverflow.com/questions/15257911/create-an-iso-date-object-in-javascript/15257967
// During testing I think I better understand why they use this format, because it is quote stable within MongoDB. It will take a wide range of date types and turn them into an ISODate String

function dateSimplified(date) {
  const newDateArray = date.innerHTML.split(" ").slice(1, 4);
  let newDate = `${newDateArray[1]} ${newDateArray[0]} ${newDateArray[2]}`;
  if (newDateArray[0] != undefined) {
    date.innerHTML = newDate;
  } else {
    return;
  }
}

dateSimplified(birth);
dateSimplified(death);
