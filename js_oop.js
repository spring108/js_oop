function clsObject(p1) {
	if (!p1) return; // отмена выполнения если нет параметров
    this.myName = "clsObject";
    this.p1 = p1;
    print("constructor clsObject");
    };
 
clsObject.prototype = {}; // нет родительского класса
 
clsObject.prototype.printMyName = function() {
    print("clsObject: myName = " + this.myName + ", p1 = " + this.p1);
    this.draw(); // полиморфизм
    };
 
clsObject.prototype.draw = function() {
    print("clsObject: draw");
    };
/////////////////////////////////////////////////
function clsCircle(p1) {
    // вызов конструктора родительского класса с параметрами
    clsObject.call(this, p1);
    
    // сверху переопределение своих переменных
    this.myName = "clsCircle";
    };
clsCircle.prototype = new clsObject();        // создание родительского класса и вызов конструктора, параметры недоступны (((
 
clsCircle.prototype.draw = function() {    // переопределение метода родителя
    print("clsCircle: draw");
    };
/////////////////////////////////////////////////



var o1 = new clsObject("qqq");
o1.printMyName();    // вызов своего метода
print('==========================================');
var c1 = new clsCircle("rrr");
c1.printMyName();    // вызов родительского метода
