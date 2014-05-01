Template.header.events({
    'click .mobile-toggle': function(){
        var targetButton = document.getElementsByClassName('navbar-toggle')[0];
        if (window.innerWidth < 768){
            targetButton.click()
        }
    }
})