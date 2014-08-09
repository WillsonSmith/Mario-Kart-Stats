function Connect(method, location) {

    var request = new XMLHttpRequest(),
        response;

    request.open(method, location, false);
    request.send();

    if (request.status === 200) {

        response = request.responseText;

    }

    this.respond = function() {

        return response;

    };

}
