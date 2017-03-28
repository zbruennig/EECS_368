main = function() 
{
var arr = [[1,2,3],[9,5,[8,7]]];
var arr2 = flatten(arr);
chalk.println(arr2);
}

function flatten(arr)
{
	return arr.reduce(function (left, right)
	{
		if(Array.isArray(right))
			return combine(left,flatten(right));
		else
			return combine(left,right);
	}
	,[]);
}

function combine(arr1, arr2)
{
    var arr = [];
	if(Array.isArray(arr1))
	{
		for(var i=0; i<arr1.length; i++)
			arr.push(arr1[i]);
	}
	else
		arr.push(arr1);
	if(Array.isArray(arr2))
	{
		for(var i=0; i<arr2.length; i++)
			arr.push(arr2[i]);
	}
	else
		arr.push(arr2);
    return arr;
}
