app.controller('chatCtrl', function ($scope, Pubnub) {
    var msgChannel = 'demo';
    $scope.username = "Frank";
    $scope.messages = [];
    $scope.messageContent = '';

    $scope.sendMessage = function () {
        // Don't send an empty message
        if (!$scope.messageContent || $scope.messageContent === '') {
            return;
        }

        // Send the message
        Pubnub.publish({
            channel: msgChannel,
            message: {
                content: $scope.messageContent,
                sender: $scope.username,
            }
        }, function (status, response) {
            if (status.error) {
                console.log(status);
            } else {
                console.log('Sent message at ' + (new Date()).toLocaleTimeString());
            }
        });

        // Clear the input
        $scope.messageContent = '';
    }

    $scope.enterPressed = function ($event) {
        if ($event.keyCode == 13) {
            $scope.sendMessage();
        }
    }

    // Subscribe to message events
    Pubnub.subscribe({
        channels: [msgChannel],
    });

    Pubnub.addListener({
        message: function (data) {
            $scope.$apply(function () {
                $scope.messages.push(data.message);
            })
        }
    });

    $scope.getPicUrl = function (username) {
        return `https://robohash.org/${username}.png?size=50x50`;
    }
});