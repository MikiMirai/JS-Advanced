class Request {
    method;
    uri;
    version;
    message;
    response = undefined;
    fulfilled = false;

    constructor(method, uri, version, message) {
        this.message = message;
        this.method = method;
        this.uri = uri;
        this.version = version;
    }
}