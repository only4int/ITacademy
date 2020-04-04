function item(name,type,quantity,damage,defense,critical,health,block)
	{
	this.name = name;
	this.type = type;	
	this.quantity = quantity;
	this.property = {
			damage: damage;		
			defense: defense;
			critical: critical;
			health: health;
			block: block;
		}
	}