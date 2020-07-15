Ext.define('antoine.store.Users', {
    extend: 'Ext.data.Store',
    model: 'antoine.model.User',

    data  : [ // donnée de la fenêtre
        {name: 'Ed',    email: 'ed@sencha.com', phone: 'blablabla'},
        {name: 'Tommy', email: 'tommy@sencha.com', phone: 'blablabla'}
    ]
});