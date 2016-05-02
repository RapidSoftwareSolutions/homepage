var apis = new Vue({
    el : 'body',
    data: {
        api : {
            title : "a"
        },
        apis : [
        	   {
                   title: "Facebook",
                   desc : "Conect to the Facebook API",
                   icon: "img/services_icons/facebook.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Twillio",
                   desc : "Send and recieve SMS & calls",
                   icon: "img/services_icons/tw.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Twitter",
                   desc : "Connect to the Twitter API",
                   icon: "img/services_icons/twe.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "PubNub",
                   desc : "Use real time Pub-Sub in your app",
                   icon: "img/services_icons/pn.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Stripe",
                   desc : "Process credit card payments",
                   icon: "img/services_icons/st.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "MailChimp",
                   desc : "Send marketing emails and newsletters",
                   icon: "img/services_icons/mc.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Google",
                   desc : "Connect to the Google API",
                   icon: "img/services_icons/go.png",
                   creator: "@danielckv",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "MongoDB",
                   desc : "Write and query to a built-in database",
                   icon: "img/services_icons/mdb.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "PostgreSQL",
                   desc : "Write and query to a built-in database",
                   icon: "img/services_icons/psql.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "HTTP_Request",
                   desc : "Make HTTP requests to external APIs",
                   icon: "img/services_icons/http.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Verify",
                   desc : "Verify data sent to cloud actions",
                   icon: "img/services_icons/verify.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Auth",
                   desc : "Authenticate users with OAuth standards",
                   icon: "img/services_icons/auth.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Machiene Learning",
                   desc : "Connect to a neural network and perform predictions",
                   icon: "img/services_icons/ml.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               },
               {
                   title: "Notifications",
                   desc : "Send notifications to iOS and Android",
                   icon: "img/services_icons/notif.png",
                   creator: "@iddo",
                   installs: "491",
                   updates: "03/19/2016"
               }
        ]
    }
});

function getParameterByName (name)
{
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name.toLowerCase() + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}

function load() {
    //get package name
    var apiName = getParameterByName("api");


    var api = {};
    console.log(apis.apis);
    apis.apis.forEach(function(a) {
        if (a.title == apiName)
            api = a;
    });

    apis.$set('api', api);

    console.log('https://rapidapi.com/api/package/'+apiName);
    $.get('https://rapidapi.com/api/package/'+apiName, function(data) {
        console.log("sdfsdfsdfsdfs");
        console.log(data);
    });
}