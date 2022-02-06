        $('.testimonials').slick({
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows:false,
              responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
 })    


 $(document).ready(function(){
        $("#myModal").modal('show');
    });


    // greeting js

        const greeting = document.getElementById("greeting");
        const date = new Date();
        const hour = date.getHours();
        console.log(hour);

        const textType = ["Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!"];
        let welcomeText = '';


            if(hour >= 0 && hour < 11 ){
                welcomeText = textType[0];
            }
            else if( hour >=12 && hour <= 17 ){
                
                welcomeText = textType[1];
            }
            else if ( hour >= 18 && hour < 20){
                welcomeText = textType[2];
            }
            else if( hour >= 20 && hour > 0){
                welcomeText = textType[3]
            }
            greeting.innerHTML = welcomeText


            setTimeout(() => {

              $('#myModal').modal('hide');
                        
            }, 10000); 

            // background color change

            function changeBackground(){



             let color = document.getElementById('colorInputText').value;
                
                if(color.length <= 7)
                {
                      document.body.style.backgroundColor =  color;
                }

        }