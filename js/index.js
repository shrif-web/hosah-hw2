$(document).ready(function() {})

function showSidebar() {
    if ($('.left_sidebar').css('visibility') == 'hidden') {
        $('.left_sidebar').css('visibility', 'visible');
        $('.left_sidebar').css('transform', 'translateX(0px)');
        $('#sidebar_control_icon').removeClass('fa-bars');
        $('#sidebar_control_icon').addClass('fa-times');
    } else {
        $('.left_sidebar').css('visibility', 'hidden');
        $('.left_sidebar').css('transform', 'translateX(-300px)');
        $('#sidebar_control_icon').removeClass('fa-times');
        $('#sidebar_control_icon').addClass('fa-bars');
    }
}