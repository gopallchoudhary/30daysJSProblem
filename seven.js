const leapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) console.log("Leap Year"); //!if(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )
  else if (year % 100 == 0 && year % 400 == 0) console.log("Leap Year");
  else console.log("Non Leap Year");
};

leapYear(2002);
