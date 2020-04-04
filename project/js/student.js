function Student(fio,year,marks)
	{
	this.fio = fio;
	this.year = year;
	this.marks = {
		russ: marks[0],
		math: marks[1],
		chem: marks[2],
		phys: marks[3],
		info: marks[4]
		}
	}
	
Student.prototype.avgMark = function()
	{
	let x = this.marks.russ+this.marks.math+this.marks.chem+this.marks.phys+this.marks.info;	
	return x/5;
	}
Student.prototype.print = function()
	{
	console.log("Имя: "+this.fio);
	console.log("Класс: "+this.year);
	console.log("Средний балл: "+this.avgMark());	
	}