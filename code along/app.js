//list of commands to use
// .hide(100)  hide over a course of 100 milisec 
// .show(100)  show ..same as above
// .delay(100)  adds delay in mili secs
// .slideUp(100) slide up 
// .slideDown(100) slide down
// .fadeIn(100) fading in
// .fadeOut(100) Fading out
// .fadeToggle(100) toggling between fading in and out repeat it by chaining it 
// .toggle(100)  hides and show toggle
// .slideToggle(100)  slide toggling#



// $(document).ready() { //waiting for document to fully load before jquery starts running

// }

//css styling using DOM manipulation all styling attributes should
//should not have - in between if they do then enclose the attribute in ""
$(function() { 
    $('#first').css({
        color: "red",
        fontWeight: "bold"
    })
})
$(function() { 
    $('#second').css({
        color: "blue",
        fontWeight: "bold"
    })
})

// replacing the first div with new html
// $(function() {
//     $('.Instructors div:nth-child(1)').html(`
//     <div id="first">
//     <h1>Outcomes Lead</h1>
//     <h3>Rand</h3>
//     <p>SEI-9</p>
//   </div>`)
// })

//replacing the text in the HTML element. only takes strings not HTML
$(function() {
    $('.Instructors div:nth-child(1) h3').text('Maha')
    $('.Instructors div:nth-child(2) h3').text('Ahmed')
})

//Using on method to define the type of event and the callback function that execustes on click
// $('.block:nth-child(1)').on('click', function(){
//     $('#first').fadeToggle(400)
// })
// $('.block:nth-child(2)').on('click', function(){
//     $('#second').fadeToggle(400)
// })
// $('.block:nth-child(3)').on('click', function(){
//     $('#third').fadeToggle(400)
// })
// $('.block:nth-child(4)').on('click', function(){
//     $('#fourth').fadeToggle(400)
// })

// can also be done with .click(function()) rather than .on('click', function())

//using an external function to toggle child elements
// function opac(i){
//  i =i-1; let id = String(ids[i])
//  $(id).slideToggle(200)
// // console.log(htm)
// }

// $('.block:nth-child(1)').click(function() {opac(1)})
// $('.block:nth-child(2)').click(function() {opac(2)})
// $('.block:nth-child(3)').click(function() {opac(3)})
// $('.block:nth-child(4)').click(function() {opac(4)})

// using bind event method with external function
function opac2(event) { //covered in advanced
    let k =event.data-1; let id = String(ids[k])
    $(id).slideToggle(200)
}

$('.block:nth-child(1)').bind('click', 1, opac2)
$('.block:nth-child(2)').bind('click', 2, opac2)
$('.block:nth-child(3)').bind('click', 3, opac2)
$('.block:nth-child(4)').bind('click', 4, opac2)


// chaining method in jQuery 
const ids = ['#first', '#second', '#third', '#fourth']
    $(function() { //same as above just simplified version
        $(ids[0]).slideUp(400,function(){
            $(ids[1]).slideUp(400, function(){
                $(ids[2]).slideUp(400,function(){
                    $(ids[3]).slideUp(400)
                })
            })
        }).delay(1000).slideDown(2000, function(){
            $(ids[1]).slideDown(2000, function(){
                $(ids[2]).slideDown(2000,function(){
                    $(ids[3]).slideDown(2000)
                })
            })
        })
})

//for performing actions on all divs inside instructors .each method
// $(function() { //same as abossve just simplified version
//     $(".Instructors div").each(function (i){
//         $(this).slideUp(400).slideDown(2000).delay(1000)
//     })
// })


