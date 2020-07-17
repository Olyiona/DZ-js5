//==============================================
//-  Створити функцію конструктор для об'єкту який описує теги
//Властивості
// -назва тегу
 //- опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
 //Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
 //-опис дії атрибуту
 //інформацію брати з htmlbook.ru

 //Таким чином описати теги
 //-a
 //-div
 //-h1
 //-span
 //-input
 //-form
 //-option
 //-select
 //Приклад результату
  // {
       // titleOfTag: 'area',
       // action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
        //attrs: [
      //  {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
       // {/*some props and values*/},
       // {/*...*/},
       // {/*...*/},
       // ]

  // }
//==============================================

//function theTag(name,action,atributes){
//this.name = name
//this.action = action
//this.atributes = atributes}

//function atributes1 (name,action){
    //this.name = name
    //this.action = action
   // }

 
//let attr1= new atributes1 ('download','Предлагает скачать указанный по ссылке файл')
//let attr2= new atributes1 ('href','Добавляет всплывающую подсказку к содержимому')
 //let aTag = new theTag 
// ( 'a','предназначен для создания ссылок', [attr1,attr2])
// console.log(aTag)

 //let attr3= new atributes1 ('align','Задает выравнивание содержимого тега')
 //let attr4= new atributes1 ('title','Задает адрес документа, на который следует перейти')
 // let divTag = new theTag 
 // ( 'div','предназначен для выделения фрагмента документа', [attr3,attr4])
 // console.log(divTag)
 
 // let attr5= new atributes1 ('id','Указывает имя стилевого идентификатора')
 //let attr6= new atributes1 ('align','Определяет выравнивание заголовк')
 //let h1Tag = new theTag 
 //( 'h1','представляет собой наиболее важный заголовок первого уровня', [attr5,attr6])
 //console.log(h1Tag)

 //let attr7= new atributes1 ('dir','Задает направление и отображение текста — слева направо или справа налево')
 //let attr8= new atributes1 ('id','Указывает имя стилевого идентификатора')
 //let spanTag = new theTag 
 //( 'span','предназначен для определения строчных элементов документа', [attr7,attr8])
 //console.log(spanTag)

 //let attr9= new atributes1 ('alt','Альтернативный текст для кнопки с изображением')
 //let attr10= new atributes1 ('max','Верхнее значение для ввода числа или даты')
 //let inputTag = new theTag 
 //( 'input','позволяет создавать разные элементы интерфейса', [attr9,attr10])
 //console.log(inputTag)

 //let attr11= new atributes1 ('action','Адрес программы или документа, который обрабатывает данные формы')
 //let attr12= new atributes1 ('name','Имя формы')
 //let formTag = new theTag 
 //( 'form','устанавливает форму на веб-странице', [attr11,attr12])
 //console.log(formTag)

 //let attr13= new atributes1 ('disable','Заблокировать для доступа элемент списка')
 //let attr14= new atributes1 ('label','Указание метки пункта списка')
 //let optionTag = new theTag 
 //( 'option',' определяет отдельные пункты списка', [attr13,attr14])
 //console.log(optionTag)

 //let attr15= new atributes1 ('form','ЗСвязывает список с формой')
 //let attr16= new atributes1 ('size','Количество отображаемых строк списка.')
 //let selectTag = new theTag 
 //( 'select','позволяет создать элемент интерфейса в виде раскрывающегося списка', [attr15,attr16])
 //console.log(selectTag)


 //==============================================
//-  Створити класс  для об'єкту який описує теги
//Властивості
// -назва тегу
 //- опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
 //-назву атрибуту
 //-опис дії атрибуту
// інформацію брати з htmlbook.ru

 //Таким чином описати теги
 //-a
// -div
// -h1
 //-span
 //-input
 //-form
 //-option
 //-select
 //Приклад результату
  // {
      //  titleOfTag: 'area',
       /// action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
       // attrs: [
       // {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
       // {/*some props and values*/},
       // {/*...*/},
       // {/*...*/}, ]}
//==============================================

//class theTag{
   // constructor(name,action,atributes){
   // this.name = name
   // this.action = action
    //this.atributes = atributes
    //}}
        
       // class atributes1 {
       // constructor (name,action){
          //  this.name = name
           // this.action = action
       
   // }}
     
//let attr1= new atributes1 ('download','Предлагает скачать указанный по ссылке файл')
//let attr2= new atributes1 ('href','Добавляет всплывающую подсказку к содержимому')
//let aTag = new theTag
//( 'a', 'предназначен для создания ссылок', [attr1,attr2])
 //console.log(aTag)
          
      
//let attr3= new atributes1 ('align','Задает выравнивание содержимого тега')
 //let attr4= new atributes1 ('title','Задает адрес документа, на который следует перейти')
 //let divTag = new theTag 
//( 'div','предназначен для выделения фрагмента документа', [attr3,attr4])
 //console.log(divTag)
 
 //let attr5= new atributes1 ('id','Указывает имя стилевого идентификатора')
 //let attr6= new atributes1 ('align','Определяет выравнивание заголовк')
 //let h1Tag = new theTag 
 //( 'h1','представляет собой наиболее важный заголовок первого уровня', [attr5,attr6])
 //console.log(h1Tag)

 //let attr7= new atributes1 ('dir','Задает направление и отображение текста — слева направо или справа налево')
 //let attr8= new atributes1 ('id','Указывает имя стилевого идентификатора')
 //let spanTag = new theTag 
 //( 'span','предназначен для определения строчных элементов документа', [attr7,attr8])
 //console.log(spanTag)

 //let attr9= new atributes1 ('alt','Альтернативный текст для кнопки с изображением')
 //let attr10= new atributes1 ('max','Верхнее значение для ввода числа или даты')
 //let inputTag = new theTag 
 //( 'input','позволяет создавать разные элементы интерфейса', [attr9,attr10])
 //console.log(inputTag)

 //let attr11= new atributes1 ('action','Адрес программы или документа, который обрабатывает данные формы')
 //let attr12= new atributes1 ('name','Имя формы')
 //let formTag = new theTag 
 //( 'form','устанавливает форму на веб-странице', [attr11,attr12])
 //console.log(formTag)

 //let attr13= new atributes1 ('disable','Заблокировать для доступа элемент списка')
 //let attr14= new atributes1 ('label','Указание метки пункта списка')
 //let optionTag = new theTag 
 //( 'option',' определяет отдельные пункты списка', [attr13,attr14])
 //console.log(optionTag)

 //let attr15= new atributes1 ('form','ЗСвязывает список с формой')
 //let attr16= new atributes1 ('size','Количество отображаемых строк списка.')
 //let selectTag = new theTag 
 //( 'select','позволяет создать элемент интерфейса в виде раскрывающегося списка', [attr15,attr16])
 //console.log(selectTag)

// ==============================================
//- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальн
//ої швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================
//let car = {
    //model : 'IX 35',
    //mark: 'hundai',
    //year: 2012,
    //speed : 220,
    //value: 2.4,

    //drive:function()
    //{console.log(`їдемо зі швидкістю ${this.speed} на годину`)},

    //info:function() {
        //console.log(this)},

    //increaseMaxSpead(newSpead) {this.speed='newSpead'} ,
    //changeYear (newValue){this.year='newValue'},
    
    //addDriver(driver){this.driver='Vasya'},

//}
//car.addDriver()
//car.changeYear()
//car.increaseMaxSpead()
//car.drive()
//car.info()

//==============================================
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================

//function Car (model,mark,year,speed,value) {
  // this.model = model;
   //this.mark = mark;
  // this.year = year;
   //this.speed = speed;
   //this.value = value;

//this.drive= function () {    
// console.log(`їдемо зі швидкістю ${this.speed} на годину`)}

//this.info=function()
//{console.log(this)}

//this.speed='newSpead'
//this.year='newValue'
//this.driver='Vasya'}

//let tesla = new Car('mx','tesla',2020,240,2,50);
//console.log(tesla)
//tesla.drive()
//tesla.info()


//==============================================
//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//==============================================

//class Car {
   //constructor (model,mark,year,speed,value){
   // this.model = model;
   //this.mark = mark;
   // this.year = year;
   // this.speed = speed;
   // this.value = value;}

   // drive(){
      // console.log(`їдемо зі швидкістю ${this.speed} на годину`)}
     //info()
       // {console.log(this)} 
     // changespeed(){
       // this.speed='newSpead'}
     // changeyear(){
        // this.year='newValue' }
      //adddriver(){
         //this.driver='Vasya' }}


//let tesla=new Car('mx','tesla',2020,280,2.4)
//console.log(tesla)
//tesla.drive()
//tesla.info()
//tesla.changespeed()
//tesla.changeyear()
//tesla.adddriver()

//==============================================
//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//==============================================

//class Poprelushka{
//constructor(name,age,footsize){
   //this.name=name
   //this.name=age
   //this.name=footsize}}

   //let Z1 = new Poprelushka('Zolushka',44,43)
   //let Z2 = new Poprelushka('Zolushka',13,33)
   //let Z3 = new Poprelushka('Zolushka',33,42)
   //let Z4 = new Poprelushka('Zolushka',25,36)
   //let Z5 = new Poprelushka('Zolushka',32,40)
   //let Z6 = new Poprelushka('Zolushka',46,37)
   //let Z7 = new Poprelushka('Zolushka',47,38)
   //let Z8 = new Poprelushka('Zolushka',22,36.5)
   //let Z9 = new Poprelushka('Zolushka',30,37.5)
   //let Z10 = new Poprelushka('Zolushka',31,35)

   //console.log(Z1)
   //console.log(Z2)
   //console.log(Z3)
   //console.log(Z4)
   //console.log(Z5)
   //console.log(Z6)
   //console.log(Z7)
   //console.log(Z8)
   //console.log(Z9)
   //console.log(Z10)

   //let PoprelushkaNew = [Z1,Z2,Z3
   //,Z4,Z5,Z6,Z7,Z8,Z9,Z10]

   //console.log(PoprelushkaNew)
    
   //class Prince {
   //constructor(name, age, shoe) {
   //this.name = name;
   //this.age = age;
   //this.shoe = shoe; }
         
     // search (array) {
      //for (let i = 0; i<array.length; i++) {
      //if (this.shoe == (array[i].size))
           // {
            //return console.log(array[i]);}}} }
         
         //let Ilya = new Prince ('Ilya', 44, 43);
         //console.log(Ilya);
         //Ilya.search(PoprelushkaNew);
         
// ==============================================
//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//==============================================        


//class Poprelushka{
//constructor(name,age,footsize){
   //this.name=name
   //this.name=age
   //this.name=footsize}}

   //let Z1 = new Poprelushka('Zolushka',44,43)
   //let Z2 = new Poprelushka('Zolushka',13,33)
   //let Z3 = new Poprelushka('Zolushka',33,42)
   //let Z4 = new Poprelushka('Zolushka',25,36)
   //let Z5 = new Poprelushka('Zolushka',32,40)
   //let Z6 = new Poprelushka('Zolushka',46,37)
   //let Z7 = new Poprelushka('Zolushka',47,38)
   //let Z8 = new Poprelushka('Zolushka',22,36.5)
   //let Z9 = new Poprelushka('Zolushka',30,37.5)
   //let Z10 = new Poprelushka('Zolushka',31,35)

   //console.log(Z1)
   //console.log(Z2)
   //console.log(Z3)
   //console.log(Z4)
   //console.log(Z5)
   //console.log(Z6)
   //console.log(Z7)
   //console.log(Z8)
   //console.log(Z9)
   //console.log(Z10)

   //let PoprelushkaNew = [Z1,Z2,Z3
   //,Z4,Z5,Z6,Z7,Z8,Z9,Z10]

   //console.log(PoprelushkaNew)
    
   //class Prince1 {
  // constructor(name, age, shoe) {
   //this.name = name;
   //this.age = age;
   //this.shoe = shoe; 
   //this.search = function(array) {
   //for (let i = 0; i<array.length; i++) {
     // if (this.shoe == (array[i].size))
     // {
       //  return console.log(array[i]);
      //}}}}}

      //let Petro = new Prince1 ('Petro', 30, 42);
      //console.log(Petro);
      //Ilya.search(PoprelushkaNew);
      


