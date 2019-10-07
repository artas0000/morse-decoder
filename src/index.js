const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodeString = '';
    let litter = '';
    for (let i = 0; i < expr.length; i += 10) {
        litter = expr.slice(i, i + 10);
        if (litter == '**********') decodeString += ' ';
        else {
            let litterString = '';
            for (let j = 0; j < litter.length; j += 2) {
                if (litter.slice(j, j + 2) == 10) litterString += '.';
                else if (litter.slice(j, j + 2) == 11) litterString += '-';
            }
            decodeString += MORSE_TABLE[litterString];
        }
    }

    return decodeString
}

module.exports = {
    decode
}