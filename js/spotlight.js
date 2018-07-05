
var mainContainer = document.querySelector('#main');
var imageHTML = '';

//home page
$(document).ready(function(){
	var template = document.querySelector('.template');
	var className = window.location.search.split('=')[1];
  	if(typeof className === 'undefined') className = 'all';

  	if(className === 'all'){

		//----------------side navagation-----------------
		var sideNav = mainContainer.querySelector('#nav');
		console.log(sideNav);
	    var tableOfContentsHTML = '';
	    tableOfContentsHTML += '<div class="col hide-on-small-only m3 l2">';
	    tableOfContentsHTML += '<div class="pin-top" style="top: 0px;">'
	    tableOfContentsHTML += '<div style="height: 1px;">'
	    tableOfContentsHTML += '<ul class="section table-of-contents">'
	    console.log(brothersInfo);
	    console.log(spotlightInfo);
	    for(var i = 0; i < spotlightInfo.length; ++i) {
	      tableOfContentsHTML += '<li><a href="#' + spotlightInfo[i]['brotherNum'] + '" style="text-decoration:none" class="">' + brothersInfo[spotlightInfo[i]['brotherNum']]['firstName'] + 
	      							" | "+brothersInfo[spotlightInfo[i]['brotherNum']]['status']+'</a></li>';
	    }
	    tableOfContentsHTML += '</ul></div></div></div>';

	    console.log(tableOfContentsHTML);
	    //founderRow.innerHTML += tableOfContentsHTML;
	    sideNav.innerHTML += tableOfContentsHTML;

	    mainContainer.innerHTML += sideNav; 

	 //--------------post section--------------------
	 	var section = mainContainer.querySelector('#postSection');
	 	for(var i = 0; i < spotlightInfo.length; ++i){
	      var post = ''
	      post += '<div class="row">';
	      post += '<a href="/spotlight?who=' + spotlightInfo[i]['brotherNum'] + '"><img src="/media/spotlight/' + spotlightInfo[i]['brotherNum'] + '.jpg" id='+spotlightInfo[i]['brotherNum']+' width="100%" /></a>';
	      post += '</div>';
	      post += '<div class="row">';
	      post += '<p><b>'+spotlightInfo[i]['title']+'</b></p>';
	      post += '</div><div class="row">';
	      post += '<p>'+spotlightInfo[i]['pitch']+'</p>';
	      post += '</div></div>';
	      post += '<div class="divider"></div>';
	      section.innerHTML += post;
	    }
	    mainContainer.innerHTML += section;

	    setTimeout(function() {
	     $('.table-of-contents').pushpin({top: $('#1').offset().top+20});
	    },100);
	    
	    $('.button-collapse').sideNav();
	    $('.parallax').parallax();
	    $(".dropdown-button").dropdown();
	    $('.scrollspy').scrollSpy();
   	}else{
   		console.log(className);
   		var imageHTML = mainContainer.querySelector('#image');
   		console.log(imageHTML);
   		imageHTML.innerHTML += '<img src="/media/spotlight/' + className + '.jpg" width=100% style="display: block;">';
  		
  		mainContainer.innerHTML += imageHTML;

   		var section = mainContainer.querySelector('#text');
   		var text = '';
   		text += '<div class="row">';
   		text += '<p><b>'+spotlightInfo[className]['title']+'</b></p></div>';
   		for(i = 0; i < spotlightInfo[className]['post'].length; i++){
   			text += '<div class="row">';
   			text += '<p>'+spotlightInfo[className]['post'][i]+'</p>';
   			text += '</div>';
   		}
   		section.innerHTML = text;
   		console.log(section);

   		mainContainer.innerHTML += section;
   		console.log(mainContainer);
   	}
})

function spotlight(n){

}



	