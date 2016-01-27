/**
 * ClubController
 *
 * @description :: Server-side logic for managing clubs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /**
     * `ClubController.getOne()`
     */
    getOne: function (req, res) {
        Club.getOne({
            id: req.param('id')
        }, function (err, club) {

            if (err) {
                console.error('error retrieving a club with id: '+ req.param('id'));
                return res.negotiate(err);
            }
            if (!club) {
                // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
                // send a 200 response letting the user agent know the login was successful.
                // (also do this if no `invalidRedirect` was provided)
                if (req.wantsJSON) {
                    return res.badRequest('error retrieving a club with id: '+ req.param('id'));
                }
                // Otherwise if this is an HTML-wanting browser, redirect to /login.
                return res.redirect('/login');
            }

            console.error('retrieved a club with id: ' + club.id +
                ' and name: ' + club.name);

            // "Remember" the user in the session
            // Subsequent requests from this user agent will have `req.session.me` set.
            //req.session.me = user.id;

            // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
            // send a 200 response letting the user agent know the login was successful.
            // (also do this if no `successRedirect` was provided)
            if (req.wantsJSON) {
                return res.json(200, club);
            }

            // Otherwise if this is an HTML-wanting browser, redirect to /.
            //return res.redirect('/');
            //TODO make this a rendered view of a club
            return res.json(200, club);
        });
    }
};

