'use strict';

const restaurant = {
    name: 'Thanh Vân Quán',
    location: 'Hanoi',
    categories: ['Italian', 'Pizzeria', 'Mon Chay'],
    staterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex) {
        return [this.staterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};


/////////////////////////////////////////////
//Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching varialbles

[main, secondary] = [secondary, main];
console.log(main, secondary);

//nhận 2 gt trả về trong 1 function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested (lồng nhau) destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j ,k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);