Ext.define('antoine.controller.Users', {
    extend: 'Ext.app.Controller',
    
    views: [
        'user.List' // init vue /view/user/list 
    ],

    /*init: function() { // Fonction constructeur. 
        this.control({
            'viewport > panel': { //me trouver chaque panneau qui est un enfant direct d'une fenêtre
                render: this.onPanelRendered //mappe les noms d'événements aux fonctions de gestionnaire
            }
        });
    },

    onPanelRendered: function() {
        console.log('(render)Rendu du panneau');
    }*/

    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser // ecoute utilisateur sur click. 
            }
        });
    },

    editUser: function(grid, record) {
        console.log('Vous avez selectionner ' + record.get('name'));
    }
    
});