function Map(width, height) {
	this.width = width;
	this.height = height;
	this.plane = [];
	this.NPCs = [];
	for(let i=0;i<height;i++)
		{
		for(let j=0;j<width;j++)
			{
			this.plane[i][j] = 0;
			}
		}
}