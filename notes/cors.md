#### about CORS
- Origin in CORS means "scheme(protocol) + host(domain) + port"
    - e.g., https://www.example.com
- is a web browser mechanism/rule(CORS rule) for whether to allow requests to other origins while visiting a website.
- same origin example:
    - http://example.com/pathA
    - http://example.com/pathB
- different origin example:
    - http://www.example.com/path1
    - http://sub.example.com/path1
- requests won't be fulfilled unless the other origin allows for the requests, using CORS headers (access-control-allow-origin)
- pre-flight in CORS is not about enhancing security measures. it is about not breaking old servers/web

#### CORS mechanism
- web server sends a client files for web like html, js, and so on.
- in some files, they need to send cross origin requests
- web client sends a **pre-flight** cross origin request(PR) to web server with those headers:
    - method: options
    - host: ${cross-origin-target-server-host} // e.g., www.other.com
    - origin: ${cross-origin-origin-server-host} // e.g., https://www.example.com
- cross origin target server then returns a response with those headers:
    - access-control-allow-origin: ${cross-origin-origin-server-host} // e.g., https://www.example.com
    - access-control-allow-methods: GET, PUT, DELETE
- then, web client sends a real request(RR) with origin header (https://www.example.com)

[what-is-the-motivation-behind-the-introduction-of-preflight-cors-requests]: https://stackoverflow.com/questions/15381105/what-is-the-motivation-behind-the-introduction-of-preflight-cors-requests
