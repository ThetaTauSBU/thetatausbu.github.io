
var SPOTLIGHTPOST = SPOTLIGHTPOST || (function(){
    var _args = {}; // private
    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        display : function() {
            var postnum = _args[0];
            var mainContainer = document.querySelector('#main');
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
            mainContainer.innerHTML += section;
            console.log(mainContainer);
        }
    };
}());