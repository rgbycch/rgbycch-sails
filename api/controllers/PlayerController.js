/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `PlayerController.getOne()`
     */
    getOne: function (req, res) {
        Player.getOne({
            id: req.param('id')
        }, function (err, player) {

            if (err) {
                console.error('error retrieving a player with id: '+ req.param('id'));
                return res.negotiate(err);
            }
            if (!player) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error retrieving a player with id: '+ req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('retrieved a player with id: ' + player.id +
                ' and name: ' + player.first_name + ' ' +player.user );

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, player);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, player);
        });
    },

    /**
     * `PlayerController.create()`
     *
     *  "first_name": "Blanda",
     *  "last_name": "Kutch",
     *  "nick_name": "Gerry",
     *  "dob": "2015-09-17T10:24:05.000Z",
     *  "email": "adonis@brakus.com",
     *  "phone_number": "123456789",
     *  "teams": []
     */
    create: function (req, res) {
        // check if a player with that email has already been registered

        PlayerService.createPlayer({
            first_name: req.param('first_name'),
            last_name: req.param('last_name'),
            nick_name: req.param('nick_name'),
            dob: req.param('dob'),
            email: req.param('email'),
            phone_number: req.param('phone_number')
        }, function (err, player) {

            if (err) {
                console.error('error creating a player');
                return res.negotiate(err);
            }
            if (!player) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('no player returned');
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('created a player with name: ' + player.first_name);
            if(player.user) {
                console.error('player has been associated with user id: '+player.user);
            }

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, player);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, player);
        });
    },

    /**
     * `PlayerController.update()`
     */
    update: function (req, res) {
        Player.update({
            id: req.param('id'),
            first_name: req.param('first_name'),
            last_name: req.param('last_name'),
            nick_name: req.param('nick_name'),
            dob: req.param('dob'),
            email: req.param('email'),
            phone_number: req.param('phone_number')
        }, function (err, player) {

            if (err) {
                console.error('error creating a player');
                return res.negotiate(err);
            }
            if (!player) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error updating player with id: '+req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('updated player with id: ' + player.id +
                ' and name: ' + player.first_name);

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, player);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, player);
        });
    }
};

