///****** Edit Users *******///

Ext.define('antoine.view.user.Edit', {
    extend: 'Ext.window.Window',
    xtype: 'useredit',  // alias pour xtype  ( astuce nous pouvons passer a xtype directement. )
 
    title: 'Edit User',
    
    layout: 'fit',
    autoShow: true,

    initComponent: function() { // Initialisation composant.
        this.items = [
            {
                xtype: 'form', // xtype de formulaire. 
                items: [
                    {
                        xtype: 'textfield', // Type text input. 
                        name : 'name',
                        fieldLabel: 'Name'
                    },
                    {
                        xtype: 'textfield', // Type text input. 
                        name : 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        xtype: 'textfield', // Type text input. 
                        name : 'phone',
                        fieldLabel: 'telephone'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Sauvegarder',
                action: 'save'
            },
            {
                text: 'Quitter',
                scope: this,  // porté 
                handler: this.close // gestionnaire 
            } 
        ];

        this.callParent(arguments);
    }
});