/**
* Team.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 't_team',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {

        id : {
            type: 'integer',
            primaryKey: true,
            unique: true,
            columnName: 'pk'
        },

        title : {
            type: 'string',
            columnName: 'nm'
        },

        players : {
            collection: 'Player',
            owner: 'teams'
        },

        clubs : {
            model: 'Club',
            columnName: 'clb_fk'
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
        console.error('retrieving club by id: '+inputs.id);
        // Create a user
        var team = Team.findOne({
                id: inputs.id
            });
        team.exec(cb);
    }
};
