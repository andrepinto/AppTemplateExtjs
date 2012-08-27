Ext.define('AdminSite.view.ListCmps', {

    extend: 'Ext.view.View',
    alias: 'widget.listcmps',

    tpl: '<tpl for=".">' + '<div class="divMemu"><table><tbody>' + '<tr><td><img width="18" height="18" src="resources/images/{image}"/></td><td style="font-size: 11px; color: #888888;">&nbsp;&nbsp;{value}</td></tr>' + '</tbody></table></div>' + '</tpl>',
    itemSelector: 'div.divMemu',
    overItemCls: 'patient-over',
    selectedItemClass: 'patient-selected',
    singleSelect: true,
    store: 'Components',
    listeners: {
        render: function initializePatientDragZone(v) {
            console.log('andre');
            v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), {

                //      On receipt of a mousedown event, see if it is within a draggable element.
                //      Return a drag data object if so. The data object can contain arbitrary application
                //      data, but it should also contain a DOM element in the ddel property to provide
                //      a proxy to drag.
                getDragData: function(e) {
                    var sourceEl = e.getTarget(v.itemSelector, 10),
                        d;
                    if (sourceEl) {
                        d = sourceEl.cloneNode(true);
                        d.id = Ext.id();
                        return v.dragData = {
                            sourceEl: sourceEl,
                            repairXY: Ext.fly(sourceEl).getXY(),
                            ddel: d,
                            patientData: v.getRecord(sourceEl).data
                        };
                    }
                },

                //      Provide coordinates for the proxy to slide back to on failed drag.
                //      This is the original XY coordinates of the draggable element.
                getRepairXY: function() {
                    return this.dragData.repairXY;
                }
            });
        }
    },



})