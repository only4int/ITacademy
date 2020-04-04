function NPC(name) {
	this.name = name;
}

NPC.prototype.create = function(damage,defense,critical,health,block)
		{
		this.xp = 0;
		this.level = 0;
		this.damage = damage;		
		this.defense = defense;
		this.critical = critical;
		this.health = health;
		this.block = block;
		this.inventory = [];
		this.x = 0;
		this.y = 0;
		}
NPC.prototype.xpForKill = function()
		{
		return 50;	
		}
NPC.prototype.addXp = function(xp)
		{
		this.xp +=xp;
		const Levels = [
			200,
			300,
			500,
			800,
			1300,
			2100,
			3400,
			5500,
			8900,
			14400,
			23300
		];
		if(this.xp >= Levels[this.level])
			{
			this.level++;
			this.xp -= Levels[this.level];
			}
		if(this.level > 10)
			{
			this.level = 10;
			this.xp = Levels[10];
			}
		}