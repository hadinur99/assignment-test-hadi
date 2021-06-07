/* 
  Soal No 3
  Author : Hadi N
*/
var a = 17;
var b = 8;
for (var i=1; i <= a; i++)
{
    if (i % 4 == 0)
        for (var j=1; j<=b; j++){
					if(j % 4 == 0){
          	console.log("a")
            document.write("a")
          }else{
         		console.log("b");
             document.write("b") 
          }
        }
    else
        console.log("a");
        document.write("a")
}