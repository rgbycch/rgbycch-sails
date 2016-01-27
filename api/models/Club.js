/**
* Club.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 't_club',
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
        url: {
            type: 'string',
            columnName: 'url'

        },
        founded: {
            type: 'string',
            columnName: 'fndd'
        },
        teams: {
            collection: 'team',
            owner: 'club'
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
        Club.findOne({
            id: inputs.id
        })
        .exec(cb);
    }
};

