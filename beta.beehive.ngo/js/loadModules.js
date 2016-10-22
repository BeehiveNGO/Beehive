$(function () {
    loadPage('feed-module');
});

$('#feed-module').on('click', function () {    
    $("#moduleContainer").load("./pages/feed-module.html")
    clearAllIconSelection();
    addIconSelection('feed-module');
});
$('#login-module').on('click', function () {
    $("#moduleContainer").load("./pages/login-module.html");
    clearAllIconSelection();
    addIconSelection('login-module');
});
$('#filter-module').on('click', function () {
    $("#moduleContainer").load("./pages/filter-module.html");
    clearAllIconSelection();
    addIconSelection('filter-module');
});
$('#files-module').on('click', function () {
    $("#moduleContainer").load("./pages/files-module.html");
    clearAllIconSelection();
    addIconSelection('files-module');
});
$('#report-module').on('click', function () {
    $("#moduleContainer").load("./pages/report-module.html");
    clearAllIconSelection();
    addIconSelection('report-module');
});
$('#map-module').on('click', function () {
    $("#moduleContainer").load("./pages/map-module.html");
    clearAllIconSelection();
    addIconSelection('map-module');
});
$('#chart-module').on('click', function () {
    $("#moduleContainer").load("./pages/chart-module.html");
    clearAllIconSelection();
    addIconSelection('chart-module');
});
$('#calendar-module').on('click', function () {
    $("#moduleContainer").load("./pages/calendar-module.html");
    clearAllIconSelection();
    addIconSelection('calendar-module');
});
$('#donate-module').on('click', function () {
    $("#moduleContainer").load("./pages/donate-module.html");
    clearAllIconSelection();
    addIconSelection('donate-module');
});
$('#microphone-module').on('click', function () {
    $("#moduleContainer").load("./pages/microphone-module.html");
    clearAllIconSelection();
    addIconSelection('microphone-module');
});
$('#add-module').on('click', function () {
    $("#moduleContainer").load("./pages/add-module.html");
    clearAllIconSelection();
    addIconSelection('add-module');
});

function loadPage(idName) {
    $('#feed-module').trigger("click");   
}

function clearAllIconSelection() {    
    $('#feed-module').parent().find('div').css("display", "none");
    $('#login-module').parent().find('div').css("display", "none");
    $('#filter-module').parent().find('div').css("display", "none");
    $('#files-module').parent().find('div').css("display", "none");
    $('#report-module').parent().find('div').css("display", "none");
    $('#map-module').parent().find('div').css("display", "none");
    $('#chart-module').parent().find('div').css("display", "none");
    $('#calendar-module').parent().find('div').css("display", "none");
    $('#donate-module').parent().find('div').css("display", "none");
    $('#microphone-module').parent().find('div').css("display", "none");
    $('#add-module').parent().find('div').css("display", "none");
};

function addIconSelection(idName) {
    $("#" + idName).parent().find('div').css("display", "block");
};
