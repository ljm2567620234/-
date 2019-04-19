var tools={
    getStyle : function(obj,attr){    
            if(obj.currentStyle){
                 return obj.currentStyle[attr];
             }else{
                 return getComputedStyle(obj, false)[attr];
         }    
    },
    move : function(obj,attr,end,time){
		clearInterval(obj.timer);
	    var start=parseInt(this.getStyle(obj,attr));
		var distance=end-start;
		var step=Math.floor(time/30);
		var speed=distance/step;
		obj.timer=setInterval(function(){
			start+=speed;
			if(Math.abs(end-start)<=Math.abs(speed)){
				start=end;
				clearInterval(obj.timer)
			}
			obj.style[attr]=start+"px";
		},30)
},
}