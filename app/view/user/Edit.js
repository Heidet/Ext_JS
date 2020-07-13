///****** Edit Users *******///

Ext.define('antoine.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',  // alias pour xtype  ( astuce nous pouvons passer a xtype directement. )
 
    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() { // Composant d'ajout des utilisateurs. 
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
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,  // porté 
                handler: this.close // gestionnaire 
            } 
        ];

        this.callParent(arguments);
    }
});