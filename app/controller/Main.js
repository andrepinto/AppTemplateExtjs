Ext.define('AdminSite.controller.Main',{
	extend: 'Ext.app.Controller',

	models:['Component'],

	stores:['Components'],

	views:['Page', 'ListCmps', 'ProperList'],

	init:function(){
		console.log('main ctr init');

		this.control({

		});


	}

});