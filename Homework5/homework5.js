main = function()
{
	quiz();
}
function quiz()
{
	var n1 = Math.floor(Math.random()*10);
	var n2 = Math.floor(Math.random()*10);
	var sum = n1+n2;
	chalk.println("What is " + n1 + " + " + n2 + "?");
	var p1 = chalk.entrybox();
		
	p1.then(
	function(o){
		if(parseInt(o) == sum)
		{
			chalk.println("Correct! Have another go.\n");
			quiz();
		}
		else
		{
			chalk.println("Wrong! Try again.");
			retryQuiz(n1,n2);
		}
	},
	function(r){
		chalk.println("Didn't like that question? Well try this one then.\n")
		quiz();
	});
}
function retryQuiz(n1,n2)
{
	var p1 = chalk.entrybox();
	var sum = n1+n2;
	p1.then(
	function(o){
		if(parseInt(o) == sum)
		{
			chalk.println("Correct! Have another go.\n");
			quiz();
		}
		else
		{
			chalk.println("Wrong! Try again.");
			retryQuiz(n1,n2);
		}
	},
	function(r){
		chalk.println("Don't worry! You'll get 'em next time champ.\n")
		quiz();
	});
}
