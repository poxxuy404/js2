// Math (max, min, abs, pow, floor, round, ceil, random...)

// let a = 2;
// let b = 8;

// let max = Math.max(a, b)
// let min = Math.min(a, b)
// let abs = Math.abs(-4) // modul faqat musbat qiymat beradi
// let pow = Math.pow(2, 10) // darajaga ko'taradi
// let floor = Math.floor(2.9) // faqat butun qismini oladi
// let round = Math.round(3.6) // taqriban hisoblaydi
// let ceil = Math.ceil(4.1) // butun qiymatga +1 qayatadi
// // 0 va 1 orasidagi son qaytaradi nolga teng bo'lishi mumkin 1 ga teng bo'lmaydi
// let random = Math.random()

// console.log(max);
// console.log(min);
// console.log(abs);
// console.log(pow);
// console.log(floor);
// console.log(round);
// console.log(ceil);
// console.log(random);

// let r = Math.random()
// let r10 = r * 10
// let f = Math.ceil(r10)

// console.log(r);
// console.log(r10);
// console.log(f);


// 3 ta son beriladi shundan kattasini kichigini o'rtachasini topadigan dastur

// let num1 = 34;
// let num2 = 23;
// let num3 = 45;

// let max = Math.max(num1, num2, num3)
// let min = Math.min(num1, num2, num3)
// let med = num1 + num2 + num3 - min - max

// console.log("Kattasi " + max);
// console.log("Kichigi " + min);
// console.log("O'rtancha " + med);

// 3 ta son berilgan eng kichik ikkitasini yigindisini toping

// let num1 = 34;
// let num2 = 23;
// let num3 = 45;

// let max = Math.max(num1, num2, num3)

// let result = num1 + num2 + num3 - max

// console.log(result);

// increment, decrement

// let i = 3;

// i = i + 1
// i *= 9
// i = i * 9

// i++
// console.log(i++);
// console.log(i);


// console.log(i--);
// console.log(i);

// console.log(i++);
// console.log(++i);

// 1) 4 ta son beriladi shu sonlardan kattasini topadigan dastur tuzing
// 2) 3 ta sondan kichigini topadigan dastur tuzing
// 3) 2 ta sonni kattasidan kichigi ayiradigan dastur tuzing
// 4) 3 ta sonni o'rtanchasini topadigan dastur tuzing
// 5) 3 ta sondan eng kattasidan qolgan ikkitasini farqini topadigan dastur tuzing
// 6) randomda 0 dan 100gaha bo'lgan sonlarni chiqaradigan dastur tuzing
// 7) 4 ta son berilgan shundan kichigi va kattasidani yigindisidan o'rtadagi ikkita sonni yiginidisini farqini topadigdan dastur tuzing

// 1) 4 ta son beriladi, shu sonlardan kattasini topadigan dastur
let a1 = 12, b1 = 67, c1 = 45, d1 = 23;
let max1 = Math.max(a1, b1, c1, d1);
console.log("1) Eng kattasi:", max1);

// -------------------------------------

// 2) 3 ta sondan kichigini topadigan dastur
let a2 = 14, b2 = 6, c2 = 20;
let min2 = Math.min(a2, b2, c2);
console.log("2) Eng kichigi:", min2);

// -------------------------------------

// 3) 2 ta sonni kattasidan kichigini ayiradigan dastur
let a3 = 20, b3 = 12;
let diff3 = Math.abs(a3 - b3);
console.log("3) Kattasidan kichigini ayirganda:", diff3);

// -------------------------------------

// 4) 3 ta sonni o'rtanchasini topadigan dastur
let a4 = 25, b4 = 12, c4 = 30;
let max4 = Math.max(a4, b4, c4);
let min4 = Math.min(a4, b4, c4);
let mid4 = a4 + b4 + c4 - max4 - min4;
console.log("4) O'rtanchasi:", mid4);

// -------------------------------------

// 5) 3 ta sondan eng kattasidan qolgan ikkitasining farqini topadigan dastur
let a5 = 50, b5 = 30, c5 = 20;
let max5 = Math.max(a5, b5, c5);
let sumOthers5 = a5 + b5 + c5 - max5;
let diff5 = max5 - sumOthers5;
console.log("5) Kattasidan qolgan ikkitasining farqi:", diff5);

// -------------------------------------

// 6) Randomda 0 dan 100gacha bo‘lgan sonlarni chiqaradigan dastur
let random6 = Math.floor(Math.random() * 101); // 0 dan 100 gacha (100 ham kiradi)
console.log("6) Random son (0-100):", random6);

// -------------------------------------

// 7) 4 ta son berilgan. Kichigi va kattasining yig'indisidan, o‘rtadagi ikkita son yig’indisini ayiradigan dastur
let a7 = 10, b7 = 40, c7 = 25, d7 = 60;
let numbers7 = [a7, b7, c7, d7];
numbers7.sort((x, y) => x - y); // saralash: kichikdan kattaga
let min7 = numbers7[0];
let max7 = numbers7[3];
let middleSum7 = numbers7[1] + numbers7[2];
let edgeSum7 = min7 + max7;
let result7 = edgeSum7 - middleSum7;
console.log("7) Katta+kichikdan o‘rtadagi ikki son yig‘indisi farqi:", result7);


let yosh =18
let staj=oliy

cosole.let ()