Ext.define('antoine.store.Users', {
    extend: 'Ext.data.Store',
    model: 'antoine.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json', // lis les données du fichier JSON 
            update: 'data/updateUsers.json'// enregistre les données modifier dans un nouveau fichier json. 
        },
        reader: { // lecteur 
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }

    /*data  : [ // donnée de la fenêtre
        {name: 'Ed',    email: 'ed@sencha.com', phone: 'blablabla'},
        {name: 'Tommy', email: 'tommy@sencha.com', phone: 'blablabla'}
    ]*/
});