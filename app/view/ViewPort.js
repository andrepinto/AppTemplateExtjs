Ext.define('AdminSite.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: 'fit',
 
    requires: [
        'AdminSite.view.MainView'
    ],
 
    initComponent: function() {
        var me = this;
        console.log('app load');
        Ext.apply(me, {
            items: [
                {
                    xtype: 'mainview'
                }
            ]
        });
 
        me.callParent(arguments);
    }
});