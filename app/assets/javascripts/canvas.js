		var points = {};
    var SCALE = 4;

    var x = -1;
    var y = -1;

    function loadDemo() {
        canvas = document.getElementById("heatmap");
        context = canvas.getContext('2d');

        canvas.onmousemove = function(e) {
            x = e.clientX - e.target.offsetLeft;
            y = e.clientY - e.target.offsetTop;
            var sum = x + y;
            if (sum % 2 == 0 && sum % 3 == 0 && sum % 4 == 0) {
            	addToPoint(x,y);
            }  
        }
    }

    function drawPoint(x, y, radius) {
            context.fillStyle = "#F04E31";
            radius = Math.sqrt(radius)*35;

            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI*2, true)

            context.closePath();
            context.fill();
    }

    function addToPoint(x, y) {
        x = Math.floor(x/SCALE);
        y= Math.floor(y/SCALE);

        if (!points[[x,y]]) {
            points[[x,y]] = 1;
        } 
        drawPoint(x*SCALE,y*SCALE, points[[x,y]]);
    }


    window.addEventListener("load", loadDemo, true);