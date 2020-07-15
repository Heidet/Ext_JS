///****** Edit Users *******///

Ext.define('antoine.view.user.Edit', {
    //extend: 'Ext.grid.Panel'
    extend: 'Ext.Window',
    xtype: 'useredit',  // alias pour xtype  ( astuce nous pouvons passer a xtype directement. )
 
    title: 'Edit User',
    
    layout: 'fit',
    autoShow: true,
    bodyStyle: 'opacity:1;',

    initComponent: function() { // Initialisation composant.
        
        this.items = [
            {
                xtype: 'form', // xtype de formulaire. 
                
                items: [
                    {
                        padding: 20,
                        xtype: 'textfield', // Type text input. 
                        name : 'name',
                        fieldLabel: 'Name',
                        
                    },
                    {
                        padding: 20,
                        xtype: 'textfield', // Type text input. 
                        name : 'email',
                        fieldLabel: 'Email'
                    },
                    {
                        padding: 20,
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