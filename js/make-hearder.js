(function(){
var header = ''
+'        <div data-role="panel" data-position="left" data-display="push" id="menu" class="menubar">'
           +' <a href="index.html" class="ui-btn ui-btn-b">Home</a>'
           +' <div data-role="collapsibleset" data-corners="false" data-iconpos="right">'
           +'     <div data-role="collapsible" data-corners="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-d">'
           +'         <h3 class="collpase-center">Event</h3>'
           +'         <ul class="collpase-center" data-role="listview" data-inset="false" data-icon="false">'
           +'             <li><a href="createevent.html">Create Events</a></li>'
           +'             <li><a href="myevent.html">My Events</a></li>'
           +'             <li><a>Upcoming Events</a></li>'
           +'             <li><a href="event_history.html">Event History</a></li>'
           +'             <li><a>Recommended Events</a></li>'
           +'         </ul>'
           +'     </div>'
           +' </div>'
           +' <a href="profile.html" class="ui-btn ui-btn-b">Profile</a>'
           +' <a href="friend.html" class="ui-btn ui-btn-b">Friend</a>'
           +' <a href="about.html" class="ui-btn ui-btn-b">About Us</a>'
           +' <a href="feedback.html" class="ui-btn ui-btn-b">Feedback</a>'
+'        </div>    '
       +' <div data-role="header" class="header">'
       +'     <a href="#menu" class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-btn-inline ui-icon-bars ui-btn-icon-notext"></a>'
       +'     <h1>USCLife</h1>'
       +'     <a class="thumb-box ui-corner-all" href="#"><img class="thumb" src="images/girl.png"/></a>'
       +' </div>'

 //      $(document).on('pagebeforeshow',function(){
       //    console.log($.mobile.activePage.children(".menubar").length);
//            if($.mobile.activePage.children(".menubar").
            $('.main-page').prepend(header);
  //     });

})();
