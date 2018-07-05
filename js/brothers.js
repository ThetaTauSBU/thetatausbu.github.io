var selectedClass=false;
$(document).ready(function(){
  /**
   * Populate class dropdown menu
   */
  var template = document.querySelector('.template');
  var brotherdropdown = document.querySelector('#brotherdropdown');
  //find out what page we're on
  var className = window.location.search.split('=')[1];
  if(typeof className === 'undefined') className = 'all';
  //todo(rohan) in routing  always redirect to have ?who=Class at the end so this never fails

  var chosenClass = {};
  for(var i = 0; i < classesInfo.length; ++i){
    var classElement = template.cloneNode(true); //clone the template
    classElement.style.display = 'block'; //set the clone to be displayed
    classElement.classList.remove('template'); //remove template class
    classElement.childNodes[0].innerHTML = classesInfo[i].className; //add classname to the text
    classElement.childNodes[0].href = '/brothers?who='+classesInfo[i].className; //add class to the end of the href
    //highlight if we're on brothers
    if(classesInfo[i].className === className){
      classElement.classList.add('selected');
      chosenClass = classesInfo[i];
    }
    brotherdropdown.appendChild(classElement);
  }

  
  /**
   * Main Container HTML
   */
  var mainContainer = document.querySelector('#main');
  //all
  var bannerHTML = '';
  var bannerImageHTML = '';
  if(className === 'all'){
    selectedClass=false;
    /**
     * Banner HTML
     */
    bannerHTML += '<h1 class="header center white-text text-lighten-2">Brothers of Theta Tau</h1>';
    bannerHTML += '\n<h5 class="header center col s12 light" text-shadow="2px 2px #ff0000">All Classes</h5>';
    bannerImageHTML = '<img alt="Unsplashed background img 1" src="/media/brothers/zetaepsilon.jpg" style="display: block; transform: translate3d(-50%, 500px, 0px);">';
    //todo(rohan) write code to display eboard & classes etc

    //--------------------EBOARD------------------------
    var eboard = mainContainer.querySelector('#eboard');
    //mainContainer.innerHTML += '<br><div class="divider"></div><br>';
    eboard.innerHTML += '<h4 id="eboard" class="text-lighten-2"> 2018-19 E-Board</h4>';
    eboard.innerHTML += '<div class="row" id="eboardPrimary"></div>';
    eboard.innerHTML += '<div class="row" id="eboardSecondary"></div>';

    //card html string
    var cardHTML ='';
    cardHTML += '<div class="card">';
    cardHTML += '<div class="card-image">';
    cardHTML += '<img src="" width="100%">';
    cardHTML += '<span class="card-title grey-text text-darken-3"></span>';
    cardHTML += '</div>';
    cardHTML += '<div class="card-content">';
    cardHTML += '<p><b></b></p>';
    cardHTML += '</div>';
    cardHTML += '</div>';

    var eboardPrimary = mainContainer.querySelector('#eboardPrimary');
    eboardPrimary.innerHTML += '<div class="col s12 m6">' + cardHTML + '</div>';
    eboardPrimary.innerHTML += '<div class="col s12 m6">' + cardHTML + '</div>';

    var eboardSecondary = mainContainer.querySelector('#eboardSecondary');
    eboardSecondary.innerHTML += '<div class="col s12 m4">' + cardHTML + '</div>';
    eboardSecondary.innerHTML += '<div class="col s12 m4">' + cardHTML + '</div>';
    eboardSecondary.innerHTML += '<div class="col s12 m4">' + cardHTML + '</div>';


    var regentCard = eboardPrimary.children[0];
    var viceCard = eboardPrimary.children[1];
    var scribeCard = eboardSecondary.children[0];
    var treasurerCard = eboardSecondary.children[1];
    var corsecCard = eboardSecondary.children[2];
    
    var positions = {};

    for(var i = 0; i < positionsInfo.length; ++i){
      positions[positionsInfo[i].position] = brothersInfo[positionsInfo[i].brotherNum - 1];
    }

    //regentCard
    regentCard.querySelector('img').src = '/media/brothers/' + ~~positions['Regent'].brotherNum + '.jpg';
    regentCard.querySelector('span').innerHTML = '#' + ~~positions['Regent'].brotherNum + ' ' + positions['Regent'].firstName + ' ' + positions['Regent'].lastName;
    regentCard.querySelector('b').innerHTML = 'Regent';

    //viceCard
    viceCard.querySelector('img').src = '/media/brothers/' + ~~positions['Vice Regent'].brotherNum + '.jpg';
    viceCard.querySelector('span').innerHTML = '#' + ~~positions['Vice Regent'].brotherNum + ' ' + positions['Vice Regent'].firstName + ' ' + positions['Vice Regent'].lastName;
    viceCard.querySelector('b').innerHTML = 'Vice Regent';

    //scribeCard
    scribeCard.querySelector('img').src = '/media/brothers/' + ~~positions['Scribe'].brotherNum + '.jpg';
    scribeCard.querySelector('span').innerHTML = '#' + ~~positions['Scribe'].brotherNum + ' ' + positions['Scribe'].firstName + ' ' + positions['Scribe'].lastName;
    scribeCard.querySelector('b').innerHTML = 'Scribe';

    //treasurerCard
    treasurerCard.querySelector('img').src = '/media/brothers/' + ~~positions['Treasurer'].brotherNum + '.jpg';
    treasurerCard.querySelector('span').innerHTML = '#' + ~~positions['Treasurer'].brotherNum + ' ' + positions['Treasurer'].firstName + ' ' + positions['Treasurer'].lastName;
    treasurerCard.querySelector('b').innerHTML = 'Treasurer';
    
    //corsecCard
    corsecCard.querySelector('img').src = '/media/brothers/' + ~~positions['Corresponding Secretary'].brotherNum + '.jpg';
    corsecCard.querySelector('span').innerHTML = '#' + ~~positions['Corresponding Secretary'].brotherNum + ' ' + positions['Corresponding Secretary'].firstName + ' ' + positions['Corresponding Secretary'].lastName;
    corsecCard.querySelector('b').innerHTML = 'Corresponding Secretary';

    eboard.innerHTML += '<br><div class="divider"></div><br>';

    mainContainer.innerHTML += eboard;
    
    /**
     * Table of Contents
     */

 //---------------SIDE NAVAGATION--------------------
    var sideNav = mainContainer.querySelector('#nav');
    var tableOfContentsHTML = '';
    tableOfContentsHTML += '<div class="col hide-on-small-only m3 l2">';
    tableOfContentsHTML += '<div class="pin-top" style="top: 0px;">'
    tableOfContentsHTML += '<div style="height: 1px;">'
    tableOfContentsHTML += '<ul class="section table-of-contents">'
    for(var i = 0; i < classesInfo.length; ++i) {
      tableOfContentsHTML += '<li><a href="#' + classesInfo[i]['className'] + '" style="text-decoration:none" class="">' + classesInfo[i]['className'] + '</a></li>';
    }
    tableOfContentsHTML += '</ul></div></div></div>';
    //founderRow.innerHTML += tableOfContentsHTML;
    sideNav.innerHTML += tableOfContentsHTML;

//------------------Classes Section----------------------
    var section = mainContainer.querySelector('#classSection');

    for(var i = 0; i < classesInfo.length; ++i){
      var classCard = ''
      classCard += '<div class="row">';
      classCard += '<div class="nine columns pt2 pb2">'
      classCard += '<br><h6 class="category text-dark" >' + classesInfo[i]['className'] + '</h6>';
      classCard += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width="52px" height="2px" viewBox="0 0 52 2" version="1.1"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <path d="M1.5,1 L50.3364601,1" id="Line" stroke="#E03B3B" stroke-width="2" stroke-linecap="square" sketch:type="MSShapeGroup"></path></g></svg>';
      classCard += '</div>';
      classCard += '</div>';

      classCard += '<div class="row">';
      classCard += '<div class="col s12 m9 l10" id="'+classesInfo[i]['className'] +'">';
      classCard += '<a href="/brothers?who=' + classesInfo[i]['className'] + '"><img src="/media/brothers/classes/' + classesInfo[i]["numericalClassNum"] + '.jpg" width="100%" /></a>';
      classCard += '</div>';
      classCard += '</div>';
      section.innerHTML += classCard;
    }

  }
  //specific class
  else{
    selectedClass=true;
    /**
     * Banner HTML
     */
    bannerHTML += '<h1 class="header center white-text text-lighten-2">' + chosenClass['className'] + ' Class </h1>';
    bannerHTML += '<h5 class="header center col s12 light">Crossed ' + chosenClass['crossSemester'] + ' \'' + chosenClass['crossYear'] + '</h5>';
    bannerImageHTML = '<img alt="Unsplashed background img 1" src="/media/brothers/classes/' + chosenClass['numericalClassNum'] + '.jpg" style="display: block; transform: translate3d(100%, 357px, 0px);">';

    /**
     * Brother cards
     */
    //make rows
    var cards = [];
    for(var i = chosenClass.classNums[0]; i < chosenClass.classNums[1]; ++i){
      var brother = brothersInfo[i-1];
      
      //create card HTML
      var cardHTML = '';
      cardHTML += '<div class="row">';
      cardHTML += '<div class="col-md-1"></div>';
      cardHTML += '<div class="col-md-4">';
 //     cardHTML += '<div class="card-image waves-effect waves-block waves-light">'
      cardHTML += '<img class="activator" src="/media/brothers/' + i + '.jpg" width="100%">';
      cardHTML += '</div>';
      cardHTML += '<div class="col-md-1"></div>';
      cardHTML += '<div class="col-md-2">';
      cardHTML += '<span class="grey-text text-darken-4">';
      cardHTML += '<br><b>#' + i + ' ' + brother['firstName'] + ' ' + brother['lastName'] + '</b></span>';
      cardHTML += '<p>' + brother['status'] + '</p><br>';
      cardHTML += '<a href='+brother['linkedin']+'><img src="/media/general/link.png" height=30 width=30 /></a>';
      cardHTML += '</div>';
      cardHTML += '<div class="col-md-3">';
      cardHTML += '<br>Major: ' + brother['major'];
      cardHTML += '<br><br>Company: ' + brother['company'];
      cardHTML += '<br><br>Positions Held: <br>';
      positionsHeld = brother['positionsHeld'];
      for( l = 0; l < positionsHeld.length; l++ ) {
          cardHTML += positionsHeld[l];
          if( l + 1 != positionsHeld.length ) {
              cardHTML += ', ';
          }
      }              
      cardHTML += '</p></div></div>';
      cardHTML += '<br><div class="divider"></div><br>';
      cards.push(cardHTML);
    }

  
  }
  //inject banner
  document.querySelector('#index-banner').querySelector('.container').innerHTML = bannerHTML;
  //inject banner image
  document.querySelector('.parallax').innerHTML = bannerImageHTML;
});


//todo(rohan) fix this...
//Jquery & Materialize Stuff
(function($){
  $(function(){

    // todo(rohan) fix this timeout thing. Also doesnt need to run when not on all brothers page
    // Floating-Fixed table of contents for brothers page
    if(!selectedClass){
    setTimeout(function() {
      console.log($('#Founder').offset());
     $('.table-of-contents').pushpin({top: $('#Founder').offset().top+20});
    },100);
  }
    
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('.scrollspy').scrollSpy();
      
  }); // end of document ready
})(jQuery); // end of jQuery name space

