main = function() {
	m([[1,2],[3,4]],[[5,6],[7,8]]); //returns [[19,22],[43,50]]
        
	mm([[1,2,3],[4,5,6]],[[7,8,9,10],[11,12,13,14],[15,16,17,18]]); 
        //returns [[74,80,86,92],[173,188,203,218]]
        
	mm([[1]],[[2]]); //returns [2]
        mm([[1]],[[2,3,4]]); //returns [[2,3,4]]
        mm([[10,20]],[[30,40]]); //returns undefined
        
        mm([[1,2,3],[4,5,6],[7,8,9]],[[1,0,0],[0,1,0],[0,0,1]]); 
        //returns [[1,2,3],[4,5,6],[7,8,9]]
	
	mm([[2,-1,3],[5,1,-2],[2,2,3]],[[0,1,2],[-4,1,3],[-4,-1,-2]]);
	mm([[0,1,2],[-4,1,3],[-4,-1,-2]],[[2,-1,3],[5,1,-2],[2,2,3]]);
	mm([[-1/3,2,-1/3],[-1/3,3,-4/3],[-1/3,1,-1/3]],[[3],[1],[0]]);
}

function mm(m1, m2)
{
	//verify all arguments are arrays of arrays
	if(!Array.isArray(m1) | !Array.isArray(m2))
		return undefined;
	for(var i=0; i<m1.length; i++)
	{
		if(!Array.isArray(m1[i]))
			return undefined;
	}
	for(var i=0; i<m2.length; i++)
	{
		if(!Array.isArray(m2[i]))
			return undefined;
	}
	//verify all arrays are the same length, i.e. it's a valid matrix
	for(var i=1; i<m1.length; i++)
	{
		if(m1[i].length!=m1[0].length)
			return undefined;
	}
	for(var i=1; i<m2.length; i++)
	{
		if(m2[i].length!=m2[0].length)
			return undefined;
	}
	//see if matrix multiplication is valid on the two matrices
	if(m1[0].length!=m2.length)
		return undefined;
	
	//End of error checking, everything that makes it this far is assumed to be valid input
	

	
	//create the matrix of proper size and fill it with zeroes
	var matrix = [];
	for(var i=0; i<m1.length; i++)
	{
		matrix[i] = [];
		for(var j=0; j<m2[0].length; j++)
		{
			matrix[i][j]=0;
		}
	}
	//compute the matrix multiplication
	for(var i=0; i<m1.length; i++) // # of rows in final matrix
	{
		for(var j=0; j<m2[0].length; j++) // # of cols in final matrix
		{
			for(var k=0; k<m2.length; k++) // # of multiplications per cell
			{
				matrix[i][j] += m1[i][k] * m2[k][j];
			}
		}
	}
	chalk.println(matrix); //For testing purposes
	return matrix;
}
