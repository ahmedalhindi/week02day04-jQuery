$("document").ready(function() {
  // all your code is here

  console.log("it works!!");

  // const header = document.querySelector('header')

  // const header =  $("header");
  // console.log($("header"));

  const $title = $("#title");

  // .innerText

  $title.text("Hello from app js");
  // const content = $title.text();
  // console.log(content)

  ////////

  // CSS //
  $title.css("color", "red");

  $title.css("font-size", "80px");

  ///////////

  // element . hide()

  // $p.hide();
  // $p.hide('slow');
  // $p.hide(5000);

  // $p.show()
  // $p.show('fast')
  // $p.show(3000)

  ///////////////

  const $p = $("p");
  const $myButton = $("#myButton");
  const $box = $(".box");

  const handleClick = function() {
    console.log("Button clicked");
    $(this).hide();
    $("body").append('<div class="box"></div>');
    $(".box").hover(handleHover);
    $(".box").click(handleClick);
    // $p.toggle('slow');
    // $p.slideUp();
    // $p.slideToggle(3000);
    // $myButton.text("Hide");
    // $p.addClass('orange');
    // $p.removeClass('orange');
    // $p.toggleClass('orange');
    // $box.fadeOut(2000);
    ////
    // $box.animate({
    //     left: '250px',
    //     bottom: '200px',
    //     opacity: '0.4',
    //     height: '400px',
    //     width: "800px"
    // }, 5000);
  };

  const handleHover = function() {
    // console.log("Hover worked");
    $(".box").animate({
      left: "+=100px"
    });
  };
  $box.hover(handleHover);
  $box.click(handleClick);

//   $myButton.click(handleClick);
});
