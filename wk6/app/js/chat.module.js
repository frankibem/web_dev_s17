var app = angular.module('chat', ["pubnub.angular.service"]);

app.run(function (Pubnub) {
    // Sign up for free at https://www.pubnub.com/ 
    // Create a new app and key set
    Pubnub.init({
        publishKey: 'PUBLISH_KEY_HERE',
        subscribeKey: 'SUBSCRIBE_KEY_HERE'
    });
});