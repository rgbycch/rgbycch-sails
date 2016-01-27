/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 't_player',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {

        id : {
            type: 'integer',
            primaryKey: true,
            unique: true,
            columnName: 'pk'
        },

        first_name : {
            type: 'string',
            columnName: 'frst_nm'
        },

        last_name : {
            type: 'string',
            columnName: 'lst_nm'
        },

        nick_name : {
            type: 'string',
            columnName: 'nck_nm'
        },

        dob : {
            type: 'string',
            columnName: 'dob'
        },

        userId : {
            type: 'integer',
            columnName: 'usr_fk'
        },

        //email : {
        //    type: 'string',
        //    columnName: 'eml'
        //},
        //
        //phone_number : {
        //    type: 'string',
        //    columnName: 'phn_nmbr'
        //},

        teams : {
            collection: 'team',
            via: 'players'
        }
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

    getOne: function (inputs, cb) {
        console.error('retrieving player by id: '+inputs.id);
        // Find a player
        var player = Player.findOne({
                id: inputs.id
            });
        var user = User.findOne({ id: player.userId });
        //player.attributes.email = user.email;
        player.exec(cb);
    }
};

