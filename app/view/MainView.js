Ext.define('AdminSite.view.MainView', {

    extend: 'Ext.container.Container',
    alias: 'widget.mainview',

    layout: 'border',

    items: [{
        region: 'north',
        xtype: 'container',
        cls: 'head',
        height: 70,
        layout: {
            type: 'absolute'
        },
        items: [{
            xtype: 'image',
            src: 'resources/images/newPrj.png',
            x: 48,
            y: 8
        }, {
            xtype: 'label',
            text: 'Novo Projecto',
            x: 28,
            y: 42,
            cls: 'menu_text'
        },

        {
            xtype: 'image',
            src: 'resources/images/newDoc.png',
            x: 158,
            y: 8
        }, {
            xtype: 'label',
            text: 'Novo Documento',
            x: 128,
            y: 42,
            cls: 'menu_text'
        },

        {
            xtype: 'image',
            src: 'resources/images/tools.png',
            x: 260,
            y: 8
        }, {
            xtype: 'label',
            text: 'Definições',
            x: 248,
            y: 42,
            cls: 'menu_text'
        }

        ]
    }, {
        region: 'west',
        collapsible: true,
        title: 'Barra Componentes',
        width: 250,
        split: true,
        items:[{
            xtype:'listcmps',
            
        }]
        // could use a TreePanel or AccordionLayout for navigational items
    }, {
        region: 'east',
        title: 'Configurações',
        collapsible: true,
        split: true,
        width: 250,
        layout:'border',
        items:[
        {
            xtype:'panel',
            title:'Estrutura',
            items:[{
                //xtype:'properList',
            }],
            region:'north'
            
        },
        {   xtype:'panel',
            title:'Propriedades',
            items:[{
                xtype:'properList',
            }],
            region:'south'  
            
        }]
    }, {
        region: 'center',
        xtype: 'container',
        // TabPanel itself has no title
        cls: 'container',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        overflowY: 'auto',
        bodyPadding: 50,
        items: [ {
            xtype: 'page',

        }]

    }, {
        xtype: 'container',
        region: 'south',
        height: 13
    }]


});