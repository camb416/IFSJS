(function( global ) {
  var IFSApp = (function() {

    // these are private variables
    //var data = "secret";
    //var numRows = -1;
    //var numCols = -1;
    var cellsX = [];
    var cellsY = [];

	var w;
	var h;
	var count;
	var i;
	var j;
	var iterations;
	
	var initialVals = [0.5,0,0.5,0,0.5,0.5,0,0,0.5,0.33,0.5,0,0,0,0.5,0.5,0,0,0.5,0.33,0.5,0,0,0,0.5,0,0,0,0.5,0.33];
	
	var matrices = [{
		a : [1,0,0],
		b : [0,1,0],
		c : [0,0,1],
		pct : 0.33
	},
	{
		a : [1,0,0],
		b : [0,1,0],
		c : [0,0,1],
		pct : 0.33
	},
	{
		a : [1,0,0],
		b : [0,1,0],
		c : [0,0,1],
		pct : 0.33
	}];
	

    return {
      // public properites
      //bool: true,
      //string: "a string",
      //array: [ 1, 2, 3, 4 ],
      //object: {
      //  lang: "en-Us"
      //},
      
      resetMatrices : function(){
      
      	for(i=0;i<$(".matrixfield").length;i++){
      	$(".matrixfield").eq(i).val(initialVals[i]);
      	//console.log("ok");
      	
      	}
      	this.init(w,h);
      
      },
      
      readMatrices : function(){
      
      
      for(i=0;i<$(".matrix-ui").length;i++){
      var f = $(".matrix-ui").eq(i).children().filter(".matrixfield");
      
      matrices[i].a = [ f[0].value, f[1].value, f[2].value ];
      matrices[i].b = [ f[3].value, f[4].value, f[5].value ];
      matrices[i].c = [ f[6].value, f[7].value, f[8].value ];
      matrices[i].pct = f[9].value;
      
      // console.log(parseFloat(matrices[i].pct));
      }
      
      },
      
      
      init : function(w_in,h_in){
       
       $('#iterate-btn').click(function(){
       IFSApp.readMatrices();
       IFSApp.iterate();
       // console.log(this);
       });
         $('#reset-btn').click(function(){
       IFSApp.resetMatrices();
       
       });
       
       count = $('.countfield').val();
       
       
       w = w_in;
        h = h_in;
       // iterations = iterations_in;
       
       // var inefficient = "";
           var canvas = document.getElementById("canvas");  
      		if (canvas.getContext) {  
            	var ctx = canvas.getContext("2d");  
            	ctx.clearRect ( 0,0,w,h );
            	var tx;
            	var ty;
            	for(i=0;i<count;i++){
            		tx = Math.random();
            		ty = Math.random();
            		cellsX[i] = tx;
            		cellsY[i] = ty;
            		//ctx.fillRect(tx,ty,1,1);
            		//inefficient+=tx+",";
            	}
            	
            	for(j=0;j<count;j++){
            		ctx.fillRect(cellsX[j]*w,cellsY[j]*h,1,1);
            	}
         
        	}
        	  // alert(inefficient);
        },
        
        iterate : function(counter){
       //console.log(cellsX);
        	var canvas = document.getElementById("canvas");  
      		if (canvas.getContext) {  
            	var ctx = canvas.getContext("2d");  
            	ctx.clearRect ( 0,0,w,h );

        		for(j=0;j<count;j++){
            			
            			
            			/*
            			var rand = Math.random();
            			// rand = 0.44;
            			//var prevX = cellsX[j];
            			//var prevY = cellsY[j];
            			if(rand>0.66){
            				cellsX[j] /= 2;
            				cellsY[j] /=2;
            				cellsX[j] += (-1.0/(counter));
            				cellsY[j] += (-1.0/(counter));
            				
            			} else if(rand>0.33){
            				cellsX[j] /= 2;
            				cellsY[j] /=2;
            				cellsY[j] += (1.0/(counter));
            				cellsX[j] += (-1.0/(counter));
            				
            			} else {
            				cellsX[j] /=2;
            				cellsY[j] /=2;
            				cellsX[j] += (1.0/(counter));
            				cellsY[j] += (1.0/(counter));
            				
            			}
            			//cellsX[j]+=prevX;
            			//cellsY[j]+=prevY;
            			
            			*/
            			
            			var x = cellsX[j];
            			var y = cellsY[j];
            			var z = 1;
            			
            			var rand = Math.random();
            			var t;
            			var secondGate = parseFloat(matrices[0].pct)+parseFloat(matrices[1].pct);
            			if(rand<matrices[0].pct){
            				t = matrices[0];
            			//	console.log(0,rand);
            			} else if(rand<(secondGate)){
            				t = matrices[1];
            			//	console.log(1,rand);
            			} else {
            				t = matrices[2];
            			//	console.log(2,rand);
            			}
            			//console.log(secondGate);
            			
            			cellsX[j] = t.a[0]*x+t.a[1]*y+t.a[2]*z;
            			cellsY[j] = t.b[0]*x+t.b[1]*y+t.b[2]*z;
            			
            			
            		ctx.fillRect(cellsX[j]*w,cellsY[j]*h,1,1);	
            	}
            // console.log(counter);		
            	
            	
        	}
        }
        
        
      
    }
        
     
        
        
        
    
      
        
        
        

      

  })();

  // Other things might happen here

  // expose our module to the global object
  global.IFSApp = IFSApp;

})( this );