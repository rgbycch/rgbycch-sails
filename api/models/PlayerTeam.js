/**
* Playerteam.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    tableName: 't_team_member',
    autoCreatedAt: false,
    autoUpdatedAt: false,

    attributes: {

        id : {
            type: 'integer',
            primaryKey: true,
            unique: true,
            columnName: 'pk'
        },

        team : {
            model: 'Team',
            columnName: 'tm_fk'
        },

        player : {
            model: 'Player',
            columnName: 'ply_fk'
        }
    }
};

