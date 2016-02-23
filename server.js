var express = require('express');
var bodyParser = require('body-parser');

// create a server (so that we can build an api)
var app = express();

// intercept all request
// req: incoming request
// res: response we send back
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // public, no security needed
    res.header("Access-Control-Allow-Headers", "X-Requested-With", "Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next(); // server will freeze if next() is omitted
});

// convert our request to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

var tutorials = [
    {
        id: 1,
        title: "Android Studio Tutorial For Beginners",
        description: "Learn how to install Android Studio and then go through this tutorial to build your very first app",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F-k5gwz_91o" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "http://static1.squarespace.com/static/53f50ebde4b0fdae82313485/t/53fbce70e4b01bd08e4954c2/1408594048840/android.png"
    }, {
        id: 2,
        title: "iOS App Icon Design In Photoshop",
        description: "Learn how to install Android Studio and then go through this tutorial to build your very first Android app",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F-k5gwz_91o" frameborder="0" allowfullscreen></iframe>',
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2000px-Octicons-mark-github.svg.png"
    }
];

app.get('/tutorials', function (req, res) {
    console.log("GET from server");
    res.send(tutorials);
});

app.listen(6069); // anything above 5000 to be safe