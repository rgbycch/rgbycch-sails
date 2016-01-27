/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.login()`
   */
  login: function (req, res) {
    // Look up the user
    User.attemptLogin({
      email: req.param('email'),
      password: req.param('password')
    }, function (err, user) {
      if (err) return res.negotiate(err);
      if (!user) {

          // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
          // send a 200 response letting the user agent know the login was successful.
          // (also do this if no `invalidRedirect` was provided)
          if (req.wantsJSON) {
              console.log('Invalid username/password combination');
              return res.badRequest('Invalid username/password combination.');
          }
          // Otherwise if this is an HTML-wanting browser, redirect to /login.
          return res.redirect('/login');
      }

      // "Remember" the user in the session
      // Subsequent requests from this user agent will have `req.session.me` set.
      req.session.me = user.id;

      // If this is not an HTML-wanting browser, e.g. AJAX/sockets/cURL/etc.,
      // send a 200 response letting the user agent know the login was successful.
      // (also do this if no `successRedirect` was provided)
      if (req.wantsJSON) {
          return res.ok();
      }

      // Otherwise if this is an HTML-wanting browser, redirect to /.
      return res.redirect('/');
    });

    //return res.json({
    //  todo: 'login() is not implemented yet!'
    //});
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    return res.json({
      todo: 'signup() is not implemented yet!'
    });
  }
};

