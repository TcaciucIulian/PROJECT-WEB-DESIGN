var cur_fs, next_fs;
var opacity;
var nr = 0;
var checkBoxNr = 0;

$(".urmator").click(function() {
    cur_fs = $(this).parent();
    next_fs = $(this).parent().next();

    $(".numar").eq(nr+1).addClass("active");
    nr = nr + 1;
    
    smiley_face = $(".pozitiv")
    sad_face = $(".negativ")

    var checkBoxes = cur_fs.find(".recenzie");
    var ok = 0;
    for(var i = 0; i < checkBoxes.length/2 ; i++)
        {
        if( checkBoxes[i].checked == true )
             {   ok = 1;
                
             }
        }

    if( ok == 1 )
       {   smiley_face.show();
           smiley_face.animate({opacity: 1}, {
            duration: 2000,
            complete: function() {
                smiley_face.hide();
            }
        });
    }
     else 
        { sad_face.show(); 
          sad_face.animate({opacity: 1}, {
              duration: 2000,
              complete: function() {
                  sad_face.hide();
              }
          })
        }

    next_fs.show();

    cur_fs.animate({opacity: 0}, {

        duration: 2000,
        complete: function() {
            cur_fs.hide();
        }
    })
})

nr1 = 1
$(".anterior").click(function() {
    cur_fs = $(this).parent();
    prv_fs = $(this).parent().prev();
    
    $(".numar").eq(nr).removeClass("active");
    nr = nr - 1;

    smiley_face = $(".pozitiv")
    sad_face = $(".negativ")

    var checkBoxes = cur_fs.find(".recenzie");
    var ok = 0;
    for(var i = 0; i < checkBoxes.length/2 ; i++)
        {
        if( checkBoxes[i].checked == true )
             {   ok = 1;
                
             }
        }

    if( ok == 1 )
       {   smiley_face.show();
           smiley_face.animate({opacity: 1}, {
            duration: 2000,
            complete: function() {
                smiley_face.hide();
            }
        });
    }
     else 
        { sad_face.show(); 
          sad_face.animate({opacity: 1}, {
              duration: 2000,
              complete: function() {
                  sad_face.hide();
              }
          })
        }

    cur_fs.animate({opacity: 0}, {

        duration: 2000,
        complete: function() {
            cur_fs.hide();
        }
    })

    prv_fs.show();
    prv_fs.animate({opacity: 1})
})