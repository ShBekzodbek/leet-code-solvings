
function openOrSenior(data) {
    data.forEach(element => {
        if (element[0] >= 55 && element[1] > 7) {
            data[data.indexOf(element)] = "Senior";
        } else {
            data[data.indexOf(element)] = "Open";
        }
    });
    return data;
};


//another ways
// function openOrSenior(data){
//     return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
//   }

// ,
// openOrSenior = data => data.map(e => (e[0] > 54 && e[1] > 7) ? "Senior" : "Open")

let data = [[59, 12], [55, -1], [12, -2], [12, 12]]

openOrSenior(data);