/**
 * Created by jdgaffney on 1/28/16.
 */
module.exports = {

    createPlayer: function (playerObject, cb) {

        /**
         * For now, a player can be signed up without a user
         * when a user is registered, it can be then associated
         * with a player
         * FOR NOW
         */
        var player = {
            first_name: playerObject.first_name,
            last_name: playerObject.last_name,
            nick_name: playerObject.nick_name,
            dob: playerObject.dob
        }
        // check if User exists with that email
        console.error('finding a user with email: '+playerObject.email);
        var user = User.findOne({email: playerObject.email}, function (err, user) {
            if (user) {
                // user, associate with account
                console.error('found user with id: ' + user.id);
                player.user = user.id;
            }
            Player.createPlayer(player, cb);
        });
    }
}