function fillArray(a, n)
	{
	for(let i=0;i<n;i++)
		{
		a[i] = Math.ceil(Math.random()*10);	
		}
	return a;	
	}

function printArray(a)
	{
	let str="";
	for(let i=0;i<a.length;i++)
		{
		str = str + a[i] + " ";	
		}
	console.log(str);
	}
	
function sumArray(a)
	{
	let s = 0;
	for(let i=0;i<a.length;i++)
		{
		s = s + a[i];	
		}
	return s;
	}
	
function reverseArray(a)
	{
	let b = [];
	let n = a.length;
	for(let i=0;i<n;i++)
		{
		b[i] = a[n-i-1];	
		}
	return b;
	}

function maxArray(a)
	{
	let max = a[0];
	let n = a.length;
	for(let i=1;i<n;i++)
		{
		if(a[i] > max)
			{
			max = a[i];	
			}
		}	
	return max;
	}
	
function minArray(a)
	{
	let min = a[0];
	let n = a.length;
	for(let i=1;i<n;i++)
		{
		if(a[i] < min)
			{
			min = a[i];	
			}
		}	
	return min;
	}
	
function inArray(x,a)
	{
	for(let i=0;i<a.length;i++)
		{
		if(a[i] == x)
			{
			return true;	
			}
		}
	return false;
	}
	
function uniqueArray(a)
	{
	let b=[],j=0;
	for(let i=0;i<a.length;i++)
		{
		if(!inArray(a[i],b))
			{
			b[j] = a[i];
			j++;
			}	
		}
	return b;
	}