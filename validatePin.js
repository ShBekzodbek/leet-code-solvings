function validatePin(pin) {
    if (pin == /[0-9]/ && (pin.length == 4 || pin.length == 6)) {
        console.log("Pin is valid");
    } else {
        console.log('wrong');
    }
}


validatePin("1234");
