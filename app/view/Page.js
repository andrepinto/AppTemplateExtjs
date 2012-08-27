Ext.define('AdminSite.view.Page', {

	extend: 'Ext.container.Container',
	alias: 'widget.page',

	id: 'xxxxxx',
	//height: 600,
	width: 500,
	padding: '0 0 0 0',
	cls: 'page',

	layout: 'vbox',

	items: [{

		xtype: 'container',
		margin: '0 0 0 0',
		width: 500,
		height: 20
	}, {
		xtype: 'container',
		cls: 'lines1',
		id: 'pTitle',
		margin: '0 0 0 0',
		width: 500,
		height: 120,
		layout:'absolute',

		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s',
		},

		items: [{
			xtype: 'button',
			id:'btn1',
			cls:'x-rz',
			resizable: {
				target: 'btn1',
			    pinned:false,
			    dynamic:true,
			    handles: 'all'
			},

			draggable: {
				constrain: true,
				constrainTo: 'pTitle'
			},


		}]



	}, {
		xtype: 'container',
		cls: 'lines1',
		margin: '0 0 0 0',
		height: 40,
		width: 500,
		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s'

		},



	},

	{
		xtype: 'container',
		cls: 'lines1',
		margin: '0 0 0 0',
		height: 80,
		width: 500,
		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s'

		}

	}, {
		xtype: 'container',
		cls: 'lines1',
		margin: '0 0 0 0',
		height: 120,
		width: 500,
		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s'

		}

	}, {
		xtype: 'container',
		cls: 'lines1',
		margin: '0 0 0 0',
		height: 80,
		width: 500,
		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s'

		}

	}, {
		xtype: 'container',
		cls: 'lines1',
		id:'pFooter',
		margin: '0 0 0 0',
		height: 100,
		width: 500,
		layout:'absolute',
		resizable: {
			dynamic: true,
			pinned: false,
			handles: 'n s'

		},

		listeners: {
			render: function initializeHospitalDropZone(v) {
				console.log(v);
				var gridView = v,
					grid = gridView.up('container');
				//var cc = Ext.ComponentQuery.query('#pFooter')[0];
				console.log(v.el);
				grid.dropZone = Ext.create('Ext.dd.DropZone', v.el, {

					//      If the mouse is over a target node, return that node. This is
					//      provided as the "target" parameter in all "onNodeXXXX" node event handling functions
					getTargetFromEvent: function(e) {
						console.log(e);
						return e.getTarget('.lines1');
					},

					//      On entry into a target node, highlight that node.
					onNodeEnter: function(target, dd, e, data) {
						//Ext.fly(target).addCls('hospital-target-hover');
					},

					//      On exit from a target node, unhighlight that node.
					onNodeOut: function(target, dd, e, data) {
						console.log('c');
						//Ext.fly(target).removeCls('lines1Over');
					},

					//      While over a target node, return the default drop allowed class which
					//      places a "tick" icon into the drag proxy.
					onNodeOver: function(target, dd, e, data) {
						return Ext.dd.DropZone.prototype.dropAllowed;
					},

					//      On node drop, we can interrogate the target node to find the underlying
					//      application object that is the real target of the dragged data.
					//      In this case, it is a Record in the GridPanel's Store.
					//      We can use the data set up by the DragZone's getDragData method to read
					//      any data we decided to attach.
					onNodeDrop: function(target, dd, e, data) {
						console.log(target);
						/*var rowBody = Ext.fly(target).findParent('.x-grid-rowbody-tr', null, false),
			                mainRow = rowBody.previousSibling,
			                h = gridView.getRecord(mainRow),
			                targetEl = Ext.get(target);

			            targetEl.update(data.patientData.name + ', ' + targetEl.dom.innerHTML);
			            Ext.Msg.alert('Drop gesture', 'Dropped patient ' + data.patientData.name +
			                ' on hospital ' + h.data.name);*/
						v.add([{xtype: 'label',
							text:'label',
							cls:'x-rz',
							id:'xtext',
						resizable: {
							dynamic: true,
							pinned: false,
							handles: 'all'
						},

						draggable: {
							constrain: true,
							constrainTo: target.id
						}}
						]);
						var cc = Ext.ComponentQuery.query('#xtext')[0];
						console.log(cc);
						return true;
					}
				});
			}
		}



	}, {
		xtype: 'container',
		cls: 'lines',
		margin: '0 0 20 0',
		height: 20,

	}]



	/*
	{
			xtype: 'button',

			 resizable: {
            dynamic: true,
            pinned: true,
            handles: 'all'
        },

			draggable: {
				constrain: true,
				constrainTo: 'page-1021'
			},
		}

	*/



})