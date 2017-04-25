function myFunc() {
    var x = location.host;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://" + x + "/",
        "method": "GET",
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "58d49772-b7fe-2e10-4417-4f95c339311b"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert(response);
    });
}
