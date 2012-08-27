Ext.define('AdminSite.view.ProperList',{
	extend: 'Ext.grid.property.Grid',
	alias: 'widget.properList',

	 //width: 250,
     height:400,
        propertyNames: {
            tested: 'QA',
            borderWidth: 'Border Width'
        },
        source: {
            "(Nome)": "button1",
            "grouping": false,
            "autoFitColumns": true,
            "productionQuality": false,
            "created": Ext.Date.parse('10/15/2006', 'm/d/Y'),
            "tested": false,
            "version": 0.01,
            "borderWidth": 1
        }
})