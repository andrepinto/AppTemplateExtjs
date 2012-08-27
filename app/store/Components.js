Ext.define("AdminSite.store.Components", {

  extend: "Ext.data.Store",

  config: {
    model: 'AdminSite.model.Component',
    

     data: [
       { image: 'stock_draw_line_with_arrows.png',   type: 'Fatura do mês de  Janeiro', value:'linha'  },
       { image: 'picture.png',   type: 'Fatura do mês de  Janeiro', value:'imagem'  },
       { image: 'text_field_rename.png',   type: 'Fatura do mês de  Janeiro', value:'textbox'  },
       { image: 'mime_txt.png',   type: 'Fatura do mês de  Janeiro', value:'label'  }

       

   ],

     autoLoad: true
  }

});