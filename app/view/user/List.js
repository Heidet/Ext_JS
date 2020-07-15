///****** Liste des Users *******///

Ext.define('antoine.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist', // définition alias ( astuce nous pouvons passer a xtype directement.)

    title: 'All Users',

    // nous ne définissons plus le magasin des utilisateurs dans la méthode `initComponent`
    store: 'Users',

    initComponent: function() {
        /*this.store = { // store de donnée pour affichage. Store = boite de données 
            fields: ['name', 'email', 'phone'], // Fields = Champs
            data  : [ // donnée de la fenêtre
                {name: 'Ed',    email: 'ed@sencha.com', phone: 'blablabla'},
                {name: 'Tommy', email: 'tommy@sencha.com', phone: 'blablabla'}
            ]
        };*/

        this.columns = [
            {header: 'Name',  dataIndex: 'name', flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Phone', dataIndex: 'phone', flex: 1}
        ];

        this.callParent(arguments);
    }
});