//1
console.log(100);
console.log(1.5);
console.log('Привет от Кекса');
console.log(true);

//2
console.log([50, 320, 480]);
console.log({meal: 'Завтрак', energy: 50});

//3
console.log('Завтракомер v0.1 запущен');

// Введите команду keks.ask на следующей строке
keks.ask('Босс, сколько грамм молока вы отведали?');


//4
var milkInGrams;
console.log(milkInGrams);

//5
console.log('Завтракомер v0.1 запущен');
var milkInGrams;
milkInGrams=keks.ask('Босс, сколько грамм молока вы отведали?');
console.log('Завтракомер получил данные о молоке:');
console.log(milkInGrams);

//6
var milkInGrams = 50;
var waterInGrams = 100;
console.log(milkInGrams+waterInGrams);
console.log(milkInGrams*0.03);
console.log(milkInGrams/20);
console.log(milkInGrams+waterInGrams-150);

//7
var milkInGrams = 50;
var breakfastCalories=milkInGrams * (42 / 100);
console.log(breakfastCalories);
var dryFeedInGrams=(500 - breakfastCalories) / 4;
console.log(dryFeedInGrams);

//8
// Сегодня Кекс позавтракал чуть плотнее
var milkInGrams = 60;

var breakfastCalories = milkInGrams * (42 / 100);
console.log('Босс, в завтраке было ' + breakfastCalories + ' калорий.');

var dryFeedInGrams = (500 - breakfastCalories) / 4;
console.log('Вы ещё можете съесть ' + dryFeedInGrams + ' грамм сухого корма.');

//9
console.log('Завтракомер v0.1 запущен');
var milkInGrams;
milkInGrams=keks.ask('Босс, сколько грамм молока вы отведали?');

console.log('Завтракомер получил данные о молоке. Выпито '+ milkInGrams+' грамм.');

//10
console.log('Завтракомер v0.1 запущен');

var milkInGrams = keks.ask('Босс, сколько грамм молока вы отведали?');
console.log('Завтракомер получил данные о молоке. Выпито ' + milkInGrams + ' грамм.');
var breakfastCalories=milkInGrams*50/100;

console.log('Калорийность завтрака: ' + breakfastCalories + 
' калорий босс!');





