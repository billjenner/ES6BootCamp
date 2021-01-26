<!DOCTYPE html>
<html>
<body>
	<h1>Demo: typeof operator</h1>
	
	<p id="p1">typeof obj: </p>
	<p id="p2">typeof bool: </p>
	<p id="p3">typeof num: </p>
	<p id="p4">typeof jsObj: </p>
	<p id="p5">typeof undefined: </p>
	<p id="p6">typeof null: </p>
	
	<script>
		function myFunc(){
			
		}

		var obj = new myFunc ();
		var bool = false;
		var num = 100;
		var jsObj = {};
		var undef;
		var nullObj = null;

		document.getElementById("p1").innerHTML += typeof obj;
		document.getElementById("p2").innerHTML += typeof bool;
		document.getElementById("p3").innerHTML += typeof num;
		document.getElementById("p4").innerHTML += typeof jsObj;
		document.getElementById("p5").innerHTML += typeof undef;
		document.getElementById("p6").innerHTML += typeof nullObj;
    </script>
</body>
</html>