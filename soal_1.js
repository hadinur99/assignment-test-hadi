var r = 2
function circlePattern(radius)
{
// dist : jarak ke center
        var dist = parseFloat(0);
 
        // for horizontal movement
        for (var i = 0; i <= r * radius; i++)
        { 
          // for vertical movement
          for (var j = 0; j <= r * radius; j++)
          {
            dist = Math.sqrt(
              (i - radius) * (i - radius) +
              (j - radius) * (j - radius)
            );
 
            // dist/jarak di range (radius - 0.5)
            // and (radius + 0.5) to print (x)
            if (dist > radius - 0.5 && dist < radius + 0.5)
            document.write("x");
            else
            document.write(" . ");
          }
 
          document.write("<br>");
        }
      }
  
      var radius = 7;
  
      circlePattern(radius);