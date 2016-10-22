$(function () {
    loadPage('list-view');
});

$('#list-view').on('click', function () {
    $("#moduleContainer").load("./pages/list-view.html")
    clearAllIconSelection();
    addIconSelection('list-view');
});
$('#adjust').on('click', function () {
    $("#moduleContainer").load("./pages/adjust.html");
    clearAllIconSelection();
    addIconSelection('adjust');
});
$('#next-modules').on('click', function () {
    $("#moduleContainer").load("./pages/next-modules.html");
    clearAllIconSelection();
    addIconSelection('next-modules');
});
$('#calendar').on('click', function () {
    $("#moduleContainer").load("./pages/calendar.html");
    clearAllIconSelection();
    addIconSelection('calendar');
});
$('#user').on('click', function () {
    $("#moduleContainer").load("./pages/user.html");
    clearAllIconSelection();
    addIconSelection('user');
});
$('#reporting').on('click', function () {
    $("#moduleContainer").load("./pages/reporting.html");
    clearAllIconSelection();
    addIconSelection('reporting');
});
$('#microphone').on('click', function () {
    $("#moduleContainer").load("./pages/microphone.html");
    clearAllIconSelection();
    addIconSelection('microphone');
});
$('#github').on('click', function () {
    $("#moduleContainer").load("./pages/github.html");
    clearAllIconSelection();
    addIconSelection('github');
});

function loadPage(idName) {
    $("#moduleContainer").load("./pages/" + idName + ".html")
    clearAllIconSelection();
    addIconSelection(idName);
}

function clearAllIconSelection() {
    $('#list-view').parent().find('div').css("display", "none");
    $('#adjust').parent().find('div').css("display", "none");
    $('#next-modules').parent().find('div').css("display", "none");
    $('#calendar').parent().find('div').css("display", "none");
    $('#user').parent().find('div').css("display", "none");
    $('#reporting').parent().find('div').css("display", "none");
    $('#microphone').parent().find('div').css("display", "none");
    $('#github').parent().find('div').css("display", "none");
};

function addIconSelection(idName) {
    $("#" + idName).parent().find('div').css("display", "block");
};
