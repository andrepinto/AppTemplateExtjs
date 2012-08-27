Ext.Loader.setConfig({
	enabled: true
});

Ext.application({

	name: 'AdminSite',

	controllers:['Main'],

	autoCreateViewport: true
})