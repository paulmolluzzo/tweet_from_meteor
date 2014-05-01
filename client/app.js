Template.header.events({
    'click .nav a': function(){
        var targetButton = document.getElementsByClassName('navbar-toggle')[0];
        if (window.innerWidth < 768){
            targetButton.click()
        }
    }
})