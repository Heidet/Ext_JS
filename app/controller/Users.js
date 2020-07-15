Ext.define('antoine.controller.Users', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Users'
    ], // inclure le magasin ( store ) pour retour modification. 

    views: [
        'user.List', // init vue /view/user/list 
        'user.Edit'
    ],

    models: [ // appel du model MVC . 
        'User'
    ],

    init: function() { // Fonction constructeur. 
        this.control({
            'viewport > panel': { //me trouver chaque panneau qui est un enfant direct d'une fenêtre
                render: this.onPanelRendered //mappe les noms d'événements aux fonctions de gestionnaire
            }
        });
    },

    onPanelRendered: function() {
        console.log('(render)Rendu du panneau');
    },

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser // ecoute utilisateur sur click. 
            }, 
            'useredit button[action=save]': {
                click: this.updateUser // methode d'enregistrement de valeur changer par l'utilisateur. 
            }
        });
    },

    updateUser: function(button) { // methode d'update information utilisateur. 
        //console.log('Bouton sauvegarder selectionner');
        var win    = button.up('window'), // obtien la référence de la fenetre à modifier . 
            form   = win.down('form'), // obtien le formulaire 
            record = form.getRecord(), // enregistrement valeurs tapé par l'user 
            values = form.getValues(); // recupere la nouvelle valeurs 

        record.set(values); // enregistrement des valeurs de la variable values 
        win.close();    // close window 

        this.getUsersStore().sync();// synchroniser le magasin après avoir édité l'enregistrement
    }, 

    editUser: function(grid, record) {
        //console.log('Vous avez selectionner ' + record.get('name'));
        var view = Ext.widget('useredit'); //création de la vue par widget 'useredit' // comme ext.create('widget.useredit')
        view.down('form').loadRecord(record);
    }
});