
(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
        $('.scrollspy').scrollSpy();

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
//----------------------portfolio-----------------------------
    
    //--------employers--------
    var employersContainer = document.querySelector("#employers");
    
    var employers = '<div class="row">';
    for(i = 0; i < companyInfo.length; i++){
        employers += '<div class="col-md-2 col-xs-6 style="height:140px;">';
        employers += '<a href='+companyInfo[i]['link']+'>';
        employers += '<img class="employer-logo" src="../media/home/portfolio/employers/'+companyInfo[i]['img']+'" />';
        employers += '</a></div>';
    }
    employers += '</div>';
    employersContainer.innerHTML += employers;
    
    //-------on campus----------
    var oncampusContainer = document.querySelector("#oncampus");
    
    var oncampus = '<div class="row">';
    for(i = 0; i < companyInfo.length; i++){
        oncampus += '<div class="col-md-2 col-xs-6 style="height:140px;">';
        oncampus += '<a href='+companyInfo[i]['link']+'>';
        oncampus += '<img class="employer-logo" src="../media/home/portfolio/employers/'+companyInfo[i]['img']+'" />';
        oncampus += '</a></div>';
    }
    oncampus += '</div>';
    oncampusContainer.innerHTML += oncampus;
    
    
$('#oncampus').show();
$('#employers').hide();
    
    
/*
 //------------------slide show----------------------------   
    var slideshowContainer = document.querySelector('#index-slideshow');
    var slideshowDots = document.querySelector('#index-slideshow-dots');
    
    var dot = '';
    dot += '<div style="text-align:center">';
    for(i = 0; i < spotlightInfo.length; i++){
        var slide = '';
        if(i==0){
            slide += '<div class="mySlides fadein" style="display:block;">';
            dot += '<span class="dot active" onclick="currentSlide('+(i+1)+')"></span>';
        }else{
            slide += '<div class="mySlides fadein">';
            dot += '<span class="dot" onclick="currentSlide('+(i+1)+')"></span>';
        }
        slide += '<a href="/spotlight?who=' + spotlightInfo[i]['brotherNum'] + '"><img src="/media/spotlight/' + spotlightInfo[i]['brotherNum'] + '.jpg" id='+spotlightInfo[i]['brotherNum']+' width="100%" /></a>';
        slide += '<div class="row">';
        slide += '<h4 style="padding-top:1em; padding-left:.5em;">'+spotlightInfo[i]['title']+'</h4>';
        slide += '</div><div class="row">';
        slide += '<p style="margin-left:2.5em;">'+spotlightInfo[i]['pitch']+'</p>';
        slide += '</div></div>';
        slideshowContainer.innerHTML += slide;

    }
    dot += '</div>';
    slideshowDots.innerHTML += dot;
    */
/*
//-----------------brothers------------------------------
    var eboardContainer = document.querySelector('#eboard');
    console.log(eboardContainer);

    var eboard = '<div class="row">';
    for(i = 0; i < positionsInfo.length; i++){
        eboard += '<div class="col-md-2">';
        eboard += '<div class="fill" style="cursor:pointer" data-toggle="modal" data-target="[name = '+ positionsInfo[i]['brotherNum']+'] >';
        eboard += '<img src="/media/home/brothers/'+positionsInfo[i]['brotherNum']+'.jpg" alt='+positionsInfo[i]['brotherNum']+'/>';
        eboard += '<h6 class = "center decorated-2 mb0 mt1"'+ brothersInfo[positionsInfo[i]['brotherNum']-1]['firstName']+" "+brothersInfo[positionsInfo[i]['brotherNum']-1]['lastName']+'</h6>';
        eboard += '<p class="center caption">'+positionsInfo[i]['position']+'</p>';
        console.log(eboard);
    }
    eboard += '</div>';
    eboardContainer.innerHTML = eboard;
    */



});

//show employer/campus
function showEmployer(show) {
    console.log(show);
    console.log($('#employers'));
    console.log($('#oncampus'));
    $('#employers').hide();
    $('#oncampus').show();
    if (show == 'true') {
        $('#employers').show();
        $('#oncampus').hide();
    } else {
        $('#employers').hide();
        $('#oncampus').show();
    }
}


function showMore(show) {
    if (show == 'true') {
        $('#more').show();
    } else {
        $('#more').hide();
    }
}



