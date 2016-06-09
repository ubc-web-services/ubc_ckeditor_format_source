(function(){
    CKEDITOR.on('instanceReady', function(e){
      
      els = ['table','thead','tbody','tfooter','div'];
      for (i in els) {
        e.editor.dataProcessor.writer.setRules(els[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : true,
          breakBeforeClose : true,
          breakAfterClose : true
        });
      }
      
      elsTwo = ['p','hr','h1','h2','h3','h4','h5','h6'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsTwo[i], {
          indent : false,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
      
      elsThree = ['tr','th','ul','ol'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsThree[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
      
      elsFour = ['td','li','img','figure','figcaption','blockquote','ul','ol'];
      for (i in elsTwo) {
        e.editor.dataProcessor.writer.setRules(elsFour[i], {
          indent : true,
          breakBeforeOpen : true,
          breakAfterOpen : false,
          breakBeforeClose : false,
          breakAfterClose : true
        });
      }
    });
})();