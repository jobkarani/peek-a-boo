// // // // // jQuery('h1').click(function(){
// // // // //     alert("This is a heading tag")
// // // // //     alert("I told you, THIS IS A HEADER!");
// // // // //   });

// // // // //   jQuery('p').click(function(){
// // // // //     alert("This is a paragraph")
// // // // //   });

// // // // //   jQuery('img').click(function(){
// // // // //     alert("This is an image")
// // // // //   });



// // // // jQuery(document).ready(function() {
// // // //     jQuery("h1").click(function() {
// // // //       alert("This is a header.");
// // // //     });
  
// // // //     jQuery("p").click(function() {
// // // //       alert("This is a paragraph.");
// // // //     });
  
// // // //     jQuery("img").click(function() {
// // // //       alert("This is an image.");
// // // //     });
// // // //   });


// // // $(document).ready(function() {
// // //     $("h1").click(function() {
// // //       alert("This is a header.");
// // //     });
  
// // //     $("p").click(function() {
// // //       alert("This is a paragraph.");
// // //     });
  
// // //     $("img").click(function() {
// // //       alert("This is an image.");
// // //     });
// // //   });


// // $(document).ready(function() {
// //     $("p").click(function() {
// //       $("img").show();
// //     });
// //   });


// $(document).ready(function() {
//     $("p").click(function() {
//       $(".walrus-showing").toggle();
//       $(".walrus-hidden").toggle();
//     });
//   });


$(document).ready(function() {
    $(".clickable").click(function() {
      $("#walrus-showing").toggle();
      $("#walrus-hidden").toggle();
    });
  });

  $(document).ready(function() {
    $(".fadeable").click(function() {
      $("#walrus-fadeIn").fadeIn();
      $("#walrus-fadeOut").fadeOut();
    });
  });

  $(document).ready(function() {
    $(".fadeable").click(function() {
      $("#walrus-fadeToggle").fadeToggle();
    });
  });

  $(document).ready(function() {
    $(".slideable").click(function() {
      $("#walrus-slideDown").slideDown();
      $("#walrus-slideUp").slideUp();
    });
  });

  $(document).ready(function() {
    $(".slideable").click(function() {
      $("#walrus-slideToggle").slideToggle();
    });
  });