Ext.define('antoine.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist', // définition alias 

    title: 'All Users',

    initComponent: function() {
        this.store = { // store de donnée pour affichage. 
            fields: ['name', 'email'],
            data  : [
                {name: 'Ed',    email: 'ed@sencha.com'},
                {name: 'Tommy', email: 'tommy@sencha.com'}
            ]
        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});