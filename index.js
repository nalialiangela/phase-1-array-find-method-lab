// code your solution here

function superbowlWin(record){
    const won = record.find(win => win.result === "W");
    return won ? won.year : 
    undefined;
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ];
  console.log(superbowlwin(record));
