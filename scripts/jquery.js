$(document).ready(function() {

    var waypoint = new Waypoint({
        element: document.getElementById('service_description'),
        handler: function(direction) {
            if(direction == "down") {
                $("nav").attr("id", "sticky-nav");
            } else {
                $("nav").removeAttr("id");
            }
        }
       
      })

})
