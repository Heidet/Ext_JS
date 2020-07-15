/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

Ext.application({
    requires: ['Ext.container.Viewport'],

    name: 'antoine',

    appFolder: 'app', //. chemin de correspondance avec l'application . 
     
    controllers: [
        'Users'
    ],
    

    launch: function() {
        Ext.create('Ext.container.Viewport', { // initialisation du conteneur. 
            layout: 'fit', // name 

            items: [
                {
                    xtype: 'userlist',
                    title: 'Consultation liste des utilisateurs',
                    html : 'Consultation liste des utilisateurs'
                }
            ]
        });
        //console.log('test1');
    }
});


