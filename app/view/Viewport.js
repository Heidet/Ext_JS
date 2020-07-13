Ext.define('antoine.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires:[
        'Ext.layout.container.Fit',
        'helloworld.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
