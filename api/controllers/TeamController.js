/**
 * TeamController
 *
 * @description :: Server-side logic for managing teams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `TeamController.getOne()`
     */
    getOne: function (req, res) {
        Team.getOne({
            id: req.param('id')
        }, function (err, team) {

            if (err) {
                console.error('error retrieving a team with id: '+ req.param('id'));
                return res.negotiate(err);
            }
            if (!team) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error retrieving a team with id: '+ req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('retrieved a team with id: ' + team.id +
                ' and name: ' + team.title);

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, team);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, team);
        });
    },

    /**
     * `TeamController.create()`
     *     "team": {
     *      "id": 1,
     *      "title": "International U21 Team",
     *      "players": [
     *         ],
     *       "club": null
     *     }
     */
    create: function (req, res) {
        Team.createTeam({
            // will not have an id
            title: req.param('title')
        }, function (err, team) {

            if (err) {
                console.error('error retrieving a team with id: '+ req.param('id'));
                return res.negotiate(err);
            }
            if (!team) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error retrieving a team with id: '+ req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('retrieved a team with id: ' + team.id +
                ' and name: ' + team.title);

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, team);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, team);
        });
    },

    /**
     * `TeamController.update()`
     */
    update: function (req, res) {
        Team.update({
           // TODO add the update details from the request
        }, function (err, team) {

            if (err) {
                console.error('error retrieving a team with id: '+ req.param('id'));
                return res.negotiate(err);
            }
            if (!team) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error retrieving a team with id: '+ req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('retrieved a team with id: ' + team.id +
                ' and name: ' + team.title);

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, team);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a team
            return res.json(200, team);
        });
    }
};

