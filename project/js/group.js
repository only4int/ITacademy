function Group(name)
	{
	this.name = name;
	this.students = [];
	}

Group.prototype.addStudent = function(student)
	{
	this.students[this.students.length] = student;	
	}
	
Group.prototype.bestStudent = function()
	{
	if(this.students.length == 0)
		return null;
	let s = this.students[0];
	for(let i = 1; i < this.students.length;i++)
		{
		if(this.students[i].avgMark() > s.avgMark())
			{
			s = this.students[i];	
			}
		}
	return s;
	}

