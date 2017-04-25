function onLastLoad() {
    var myRecord = getCookie("record");
    document.getElementById("recordID").innerHTML = myRecord;
}

function gotoStart() {
    window.location.href = ('citizenPageP1.html');
}
