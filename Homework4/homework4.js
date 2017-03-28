main = function() 
{
	function Ghost(x0, y0, color)
	{
		var gridSize = 16;
		this.x = x0%gridSize || 0;
		this.y = y0%gridSize || 0;
		this.ghostColor = color || "White";
	
		this.getX = function()
		{
			while(this.x<0) //prevents negative positions
			{
				this.x+=gridSize;
			}
			return this.x%gridSize;
		};
		this.getY = function()
		{
			while(this.y<0) //prevents negative positions
			{
				this.y+=gridSize;
			}
			return this.y%gridSize;
		};
		this.color = function() {return this.ghostColor;};
	}
	
	Ghost.prototype.up = function() {this.y++;};
	Ghost.prototype.down = function() {this.y--;};
	Ghost.prototype.right = function() {this.x++;};
	Ghost.prototype.left = function() {this.x--;};
	
	Ghost.prototype.toString = function() 
	{return "I am a " + this.color() + " ghost at (" + this.getX() + "," + this.getY() + ").";};
	
	var redGhost = new Ghost(4,105,"Red"); //should actually start at (4,9)
	var greenGhost = new Ghost(12,12, "Green");
	var whiteGhost = new Ghost(16,0); //should actually start at (0,0)
	
	//print out initial positions
	chalk.println("Initial positions:");
	chalk.println(redGhost.toString());
	chalk.println(greenGhost.toString());
	chalk.println(whiteGhost.toString());
	
	whiteGhost.left(); //should end up at (-1,0) = (15,0) mod 16
	
	for(var i=0; i<7; i++)
	{ //go right 7 spaces
		greenGhost.right(); //should end up at (19,12) = (3,12) mod 16
	}
	
	for(var i=0; i<20; i++)
	{ //go down 20 spaces
		redGhost.down(); //should end up at (4,-11) = (4,5) mod 16 
	}

	chalk.newline();
	chalk.println("New positions:");
	chalk.println(redGhost.toString());
	chalk.println(greenGhost.toString());
	chalk.println(whiteGhost.toString());
}
