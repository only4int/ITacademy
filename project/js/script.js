var Stud1 = new Student("Вася пупкин",8,[7,5,9,4,6]);
var Stud2 = new Student("Петя пупкин",7,[4,5,6,4,6]);
var Stud3 = new Student("Коля пупкин",6,[10,3,2,10,10]);
Stud1.print();
Stud2.print();
Stud3.print();
var G = new Group("Пупкины");
G.addStudent(Stud1);
G.addStudent(Stud2);
G.addStudent(Stud3);
var b = G.bestStudent();
b.print();
