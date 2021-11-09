// jQuery code from Week 10 Recording
$(document).ready(function() {
        $("#image_list a").each(function() {
            var imageURL = $(this).attr("href");
            var caption = $(this).attr("title");
    
            // preload the image for each link
            var galleryImage = new Image();
            galleryImage.src = imageURL;
    
            // set up the event handlers for each link
            $(this).click(function(evt) {
                    $("#caption, #image").fadeOut(3000, 
                        function() {
                                $("#image").attr("src", imageURL);
                                $("#caption").text(caption);
                                $("#caption, #image").fadeIn(3000);
                                $("#caption").animate({fontSize: "2em"});
                });
                // cancel the default action of each link
                evt.preventDefault();
            }); // end click
        }); //end each
        // move the focus to the first link
    $("li:nth-child(1) a").focus();
        // $("li:first-child a").focus();
    }); // end ready