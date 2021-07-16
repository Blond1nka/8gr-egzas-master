/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/

countKavines(data);
countKaunoKavines(data);
countPirmosKavinesPatiekalai(data);


function countKavines(data) { 
    console.log(`countKavines`, data.lenght);
}



function countKaunoKavines(data) {
    let count = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes(`kaunas`)) {
            count++;
        }
    });
    console.log(`countKaunoKavines`, count);
}


function countPirmosKavinesPatiekalai(data) {
    console.log(`countPirmosKavinesPatiekalai`, data[0].menu.lenght);
}

function countMenuInKaunas(data) {
    let menus = [];
    data.forEach(kavine => {
       if (kavine.adresas.toLowerCase().includes(`kaunas`)) {
           kavine.menu.forEach(patiekalas => {
               if (!menus.includes(Object.keys(patiekalas)[0]))
                 menus.push(Object.keys(patirkalas)[0]);
           });
       } 
    });
    console.log(`countMenuInKaunas`, menus.length);
}

function countManusAvgPrice(data) {
    let count = 0;
    let sum = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {
            count++;
            sum += Object.values(patiekalas)[0];
        });
    });
    let result = Math.round(sum / count * 100) / 100
    console.log(`countManusAvgPrice`, result);
}

function compare(params) {
    
}

