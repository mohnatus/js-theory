// Наследование одного объекта от другого - удлинение цепочки прототипов

// Первый конструктор создает Млекопитающих
function Mammal(name) {
    this.type = 'mammal'; // вид животного
    this.name = name; // кличка

    this.legsNumber = 4; // Количество конечностей
}

// Второй - Котиков
function Cat(name) {
    this.type = 'cat';
    this.name = name; // кличка
}

// У котиков тоже 4 ноги (и много других схожих с Mammal признаков)
// Можно унаследовать Котиков от Млекопитающих
// Для этого в прототип создаваемых конструктором объектов (свойство prototype функции-конструктора)
// запишем новый объект с прототипом Mammal.prototype - 
// буквально создадим новое абстрактное млекопитающее и сделаем его прототипом кошки

Cat.prototype = Object.create(Mammal.prototype);

// можно было бы и так сделать
// но выполняется лишняя операция по созданию объекта
// да и этот параметр по умолчанию не нужен
Cat.prototype = new Mammal('Felix');

let fluffy = new Cat('Fluffy');
fluffy.legsNumber; // 4

// Объект, созданный конструктором Cat унаследовал свойства Mammal