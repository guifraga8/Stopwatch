var intervalo;

function time(op) {
	var s = 1;
	var m = 0;
	intervalo = window.setInterval(function() {
		if(s == 60){ 
            m++;
            s = 0;
        }
        if(m == 60){
            s = 0;
            m = 0;
        }
        if(s < 10){
			document.getElementById("segundo").innerHTML = "0" + s;
		}else{
			document.getElementById("segundo").innerHTML = s;
		}
        if(m < 10){
			document.getElementById("minuto").innerHTML = "0" + m + " :";
		}else{
			document.getElementById("minuto").innerHTML = m + " :";
		}		
        s++;
	},1000);
}
window.onload=time;