var time = {
    0: '0 часов ночи',
    1: '1 час ночи',
    2: '2 часа ночи',
    3: '3 часа ночи',
    4: '4 часа ночи',
    5: '5 часов ночи',
    6: '6 часов ночи',
    7: '7 часов утра',
    8: '8 часов утра',
    9: '9 часов утра',
    10: '10 часов утра',
    11: '11 часов дня',
    12: '12 часов дня',
    13: '1 час дня',
    14: '2 часа дня',
    15: '3 часа дня',
    16: '4 часа дня',
    17: '5 часов дня',
    18: '6 часов вечера',
    19: '7 часов вечера',
    20: '8 часов вечера',
    21: '9 часов вечера',
    22: '10 часов вечера',
    23: '11 часов вечера'
}

var insert = +prompt('Введите время (в цифрах)')

switch (insert) {
    case 0:
        var show = time[0]
        break;
    case 1:
        show = time[1]
        break;
    case 2:
        show = time[2]
        break;
    case 3:
        show = time[3]
        break;
    case 4:
        show = time[4]
        break;
    case 5:
        show = time[5]
        break;
    case 6:
        show = time[6]
        break;
    case 7:
        show = time[7]
        break;
    case 8:
        show = time[8]
        break;
    case 9:
        show = time[9]
        break;
    case 10:
        show = time[10]
        break;
    case 11:
        show = time[11]
        break;
    case 12:
        show = time[12]
        break;
    case 13:
        show = time[13]
        break;
    case 14:
        show = time[14]
        break;
    case 15:
        show = time[15]
        break;
    case 16:
        show = time[16]
        break;
    case 17:
        show = time[17]
        break;
    case 18:
        show = time[18]
        break;
    case 19:
        show = time[19]
        break;
    case 20:
        show = time[20]
        break;
    case 21:
        show = time[21]
        break;
    case 22:
        show = time[22]
        break;
    case 23:
        show = time[23]
        break;

    default:
        show = 'Такого часа не существует'
        break;
}

alert(show)