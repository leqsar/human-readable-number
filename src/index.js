module.exports = function toReadable (number) {
    let units, dozens, hundreds;
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const arr2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number <= 10) {
        return(arr[number]);
    } else if((number >= 11) && (number <20)) {
        return(arr2[number-11]);
    } else if ((number >= 20) && (number < 100)) {
        units = number%10;
        dozens = Math.floor(number/10);
        if (units == 0) {
            return(arr3[dozens-2]);
        }else {
            return(arr3[dozens-2]+' '+arr[units]);
        }
    } else if(number >= 100) {
        hundreds = Math.floor(number/100);
        if ((number%100 < 20) && (number%100 > 0)) {
            if (number%100 <= 10) {
                return(arr[hundreds]+' '+'hundred'+' '+arr[number%100]);
            } else if((number%100 >= 11) && (number%100 <20)) {
                return(arr[hundreds]+' '+'hundred'+' '+arr2[number%100-11]);
            }
        }else {
            dozens = Math.floor(number/10)%10;
            if (dozens == 0) {
                return arr[hundreds]+' '+'hundred';
            }else {
                units = number%100%10;
                if (units == 0) {
                    return arr[hundreds]+' '+'hundred'+' '+arr3[dozens-2];
                }else return(arr[hundreds]+' '+'hundred'+' '+arr3[dozens-2]+' '+arr[units]);
            }
        }
    }
}
