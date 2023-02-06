// Задача 1 - 5 минут

function getStringCities(arr) {
    return arr.toString() + '.';
}

// Задача 2 - 5 минут

function getFloatNumber(num) {
    if (isNaN(num) || !isFinite(num)) return NaN;
    return Math.round(num / 5) * 5
}

// Задача 3 -10 минут

function getComp(num) {
    if (isNaN(num) || !isFinite(num)) return NaN;
    if (num % 1 != 0 || num <= 0) return NaN;
    const comp = 'компьютер';
    const comEndingA = 'a';
    const comEndingOv = 'ов';
    const lastNum = num % 10;
    if (lastNum === 1) return num + ' ' + comp;
    if (lastNum >= 2 && lastNum <= 4) return num + ' ' + comp + comEndingA;
    if (lastNum === 0 || lastNum > 4 && lastNum <= 9) return num + ' ' + comp + comEndingOv;
}

// Задача 4 - 25 минут

function checkPrimeNumber(num) {
    if (isNaN(num) || !isFinite(num)) return NaN;
    if (num % 1 != 0 || num <= 1) return false;
    let result;
    for (let i = 2; i <= num; i++) {
        const rem = num % i;
        if (rem == 0) {
            result = i;
            break;
        }
    }
    if (result == num) {
        return true
    }
    else {
        return false
    };
}

// Задача 5 - 30 минут 

function filterDublicat(arr) {
    const obJDublicatArr = {};
    const newArr = [];
    arr.forEach(el => {
        if (obJDublicatArr[el] >= 1) {
            obJDublicatArr[el] = obJDublicatArr[el] + 1
        } else {
            obJDublicatArr[el] = 1
        }
    })

    for (key in obJDublicatArr) {
        if (obJDublicatArr[key] > 1) {
            newArr.push(key)
        }
    }

    return newArr;
}


function compareArr(arr1, arr2) {
    const newArr1 = filterDublicat(arr1);
    const newArr2 = filterDublicat(arr2);
    const newArr = [];

    newArr1.forEach(el => {
        if (newArr2.includes(el)) newArr.push(el);
    })
    return newArr;
}

// Задача 5 - 40 минут 

function multiplactionTable(n) {
    let table = '  ';

    for (let a = 1; a <= n; a++) {
        if (a == n) {
            table += a + '\n';
        } else {
            table += a + '  '
        };
    }

    for (let i = 1; i <= n; i++) {
        table += i + ' ';
        for (let j = 1; j <= n; j++) {
            let leng = (i * j + i).toString().length;
            if (j == n) {
                table += i * j;
            } else if (leng == 1) {
                table += i * j + '  '
            } else {
                table += i * j + ' '
            };
        }
        table += '\n'
    }
    console.log(table);
}

