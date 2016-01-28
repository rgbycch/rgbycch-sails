/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 't_user',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {

        email: {
            type: 'email',
            required: true,
            columnName: 'eml'
        },
        password: {
            type: 'string',
            required: true,
            columnName: 'psswrd'
        }
    },

    /**
    * Create a new user using the provided inputs,
    * but encrypt the password first.
    *
    * @param  {Object}   inputs
    *                     • name     {String}
    *                     • email    {String}
    *                     • password {String}
    * @param  {Function} cb
    */
    signup: function (inputs, cb) {
        // Create a user
        User.create({
            email: inputs.email,
            // TODO: But encrypt the password first
            password: inputs.password
        })
        .exec(cb);
    },

    /**
    * Check validness of a login using the provided inputs.
    * But encrypt the password first.
    *
    * @param  {Object}   inputs
    *                     • email    {String}
    *                     • password {String}
    * @param  {Function} cb
    */
    attemptLogin: function (inputs, cb) {
        console.error('attempting login for user: '+inputs.email);
        // Create a user
        User.findOne({
            email: inputs.email,
            // TODO: But encrypt the password first
            password: inputs.password
        })
        .exec(cb);
    }
};

