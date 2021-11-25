var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
birthdayobject="";
birthdayheight=600;
birthdaywidth=1000;
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        birthdayobject = Img;
        birthdayobject.scaleToWidth(birthdaywidth);
        birthdayobject.scaleToHeight(birthdayheight);
        birthdayobject.set({
            top:0,
            left:0
            });
            canvas.add(birthdayobject);
            });	
	
}

function playSound(){
x.play();
}
