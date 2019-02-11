$(document).ready(function() {
    $('#home').click(function() {
        $("#Home_1").fadeIn(1000);
        $("#education").hide();
        $("#skills_content").hide();
        $("#workstudy").hide();
        $("#Volunteer").hide();
        $("#Projects").hide();
        $("#achievements").hide();
    });
});
$(document).ready(function() {
    $('#Education_1').click(function() {
        $("#education").fadeIn(1000);
        $("#Home_1").hide();
        $("#skills_content").hide();
        $("#workstudy").hide();
        $("#Volunteer").hide();
        $("#Projects").hide();
        $("#achievements").hide();
    });
});
$(document).ready(function() {
    $('#skills_1').click(function() {
        $("#skills_content").fadeIn(1000);
        $("#education").hide();
        $("#Home_1").hide();
        $("#workstudy").hide();
        $("#Volunteer").hide();
        $("#Projects").hide();
        $("#achievements").hide();

    });
});
$(document).ready(function() {
    $('#workstudy_1').click(function() {
        $("#workstudy").fadeIn(1000);
        $("#internshipmore").hide();
        $("#education").hide();
        $("#skills_content").hide();
        $("#Home_1").hide();
        $("#Volunteer").hide();
        $("#Projects").hide();
        $("#achievements").hide();




    });
});
$(document).ready(function() {
    $('#volexperience').click(function() {
        $("#Volunteer").fadeIn(1000);
        $("#education").hide();
        $("#skills_content").hide();
        $("#workstudy").hide();
        $("#Home_1").hide();
        $("#Projects").hide();
        $("#achievements").hide();
    });
});
$(document).ready(function() {
    $('#projects_1').click(function() {
        $("#Projects").fadeIn(1000);
        $("#education").hide();
        $("#skills_content").hide();
        $("#workstudy").hide();
        $("#Volunteer").hide();
        $("#Home_1").hide();
        $("#achievements").hide();
    });
});
$(document).ready(function() {
    $('#achievements_1').click(function() {
        $("#achievements").fadeIn(1000);
        $("#education").hide();
        $("#skills_content").hide();
        $("#workstudy").hide();
        $("#Vounteer").hide();
        $("#Projects").hide();
        $("#Home_1").hide();
    });
});
$(document).ready(function() {
    $("#readmore").click(function() {
        $("#internshipmore").slideToggle("slow");
        $("#readless").slideToggle("slow");
        $("#readmore").hide();
    });
});
$(document).ready(function() {
    $("#readless").click(function() {
        $("#readmore").slideToggle("slow");
        $("#readless").hide();
        $("#internshipmore").hide();
    });
});