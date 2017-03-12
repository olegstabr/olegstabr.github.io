
	function loadTable(){
		document.write('<div>');
		var color;
		for(i=0;i<256;i=i+51){
			document.write('<table onclick="tdClick(event);">');
			for(j=0; j<256; j=j+51){
				document.write('<tr>');
					for(k=0; k<256; k=k+51){
						if (i == 0)
						{
							if (j == 0)
							{
								if (k == 0)
								{
									color = "00"+"00"+"00";
									document.write('<td style="background-color:#' + color + '"></td>');
									continue;
								}
								color = "00"+"00"+k.toString(16);
								document.write('<td style="background-color:#' + color + '"></td>');
								continue;
							}
							if (k == 0)
							{
								color = "00"+j.toString(16)+"00";
								document.write('<td style="background-color:#' + color + '"></td>');
								continue;
							}
							color = "00"+""+j.toString(16)+""+k.toString(16);
						}
						else  if (j == 0)
							{
								if (k == 0)
								{
									color = i.toString(16)+"00"+"00";
									document.write('<td style="background-color:#' + color + '"></td>');
									continue;
								}
								color = i.toString(16)+"00"+k.toString(16);
							}
						else  if (k == 0)
							color = i.toString(16)+""+j.toString(16)+"00";
						else
							color = i.toString(16)+""+j.toString(16)+""+k.toString(16);
						document.write('<td style="background-color:#' + color + '"></td>');
					}
				document.write('</tr>');
			}
			document.write('</table>');
		}
		document.write('</div>');
	}

	loadTable();

	document.oncontextmenu = function(e)  { 
		var evt = window.event || e, obj = evt.srcElement || evt.target;
		if (obj.tagName == 'TABLE') 
			return;
		while (obj.tagName != 'TD') 
			obj = obj.parentNode;
		document.body.style.backgroundColor = obj.style.backgroundColor;
		document.getElementById('div2').innerHTML = "Цвет фона страницы: #" + getHexRGBColor(obj.style.backgroundColor);
		/*alert('Цвет фона страницы: #' + getHexRGBColor(obj.style.backgroundColor));*/
		return false; 
	};
	function tdClick(e){
		var evt = window.event || e, obj = evt.srcElement || evt.target;
		if (obj.tagName == 'TABLE') 
			return;
		while (obj.tagName != 'TD') 
			obj = obj.parentNode;
		document.body.style.color = obj.style.backgroundColor;
	}

	function getHexRGBColor(color)
	{
		color = color.replace(/\s/g,"");
		var aRGB = color.match(/^rgb\((\d{1,3}[%]?),(\d{1,3}[%]?),(\d{1,3}[%]?)\)$/i);
		if(aRGB)
		{
			color = '';
			for (var i=1;  i<=3; i++) 
				color += Math.round((aRGB[i][aRGB[i].length-1]=="%"?2.55:1)*parseInt(aRGB[i])).toString(16).replace(/^(.)$/,'0$1');
		}
		else 
			color = color.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, '$1$1$2$2$3$3');
		return color;
	}

	function colorClick(){
    	var r = document.getElementById("rr").value;
    	var g = document.getElementById("gg").value;
    	var b = document.getElementById("bb").value;
    	var clr = "rgb(" + r.toString(16) + "," + g.toString(16) + "," + b.toString(16) + ")";
    	clr = "#" + getHexRGBColor(clr);
    	document.getElementById("showRgb").style.backgroundColor = clr;
	}

	$(document).ready(function(){
		$("#div1").click(function(){
			var colors = new Array('red', 'white', 'black', 'green', 'yellow', 'pink');
			var rnd = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
			var clr = "" + colors[rnd];
			$(this).css("background-color", clr);
		});
	});