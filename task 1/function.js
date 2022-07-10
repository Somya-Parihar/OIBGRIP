function changeImage(x) 
        {
            switch(x) 
            {
            case 1:
                var image = document.getElementById('myImage');
                if (image.src.match("rateon")) 
                {
                image.src = "resources/rateoff.png";
                } 
                else {
                image.src = "resources/rateon.png";
                break;
                }
            case 2:
                var image = document.getElementById('myImage1');
                if (image.src.match("rateon")) 
                {
                image.src = "resources/rateoff.png";
                } 
                else {
                image.src = "resources/rateon.png";
                break;
                }
            case 3:
                var image = document.getElementById('myImage2');
                if (image.src.match("rateon")) 
                {
                image.src = "resources/rateoff.png";
                } 
                else {
                image.src = "resources/rateon.png";
                break;
                }
            case 4:
                var image = document.getElementById('myImage3');
                if (image.src.match("rateon")) 
                {
                image.src = "resources/rateoff.png";
                } 
                else {
                image.src = "resources/rateon.png";
                break;
                }
            case 5:
                var image = document.getElementById('myImage4');
                if (image.src.match("rateon")) 
                {
                image.src = "resources/rateoff.png";
                } 
                else {
                image.src = "resources/rateon.png";
                break;
                }
            }
        }