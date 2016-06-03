(function(){
    CKEDITOR.on('instanceReady', function(e){
        var instance = e.editor;
        var rules = {
                indent : false,
                breakBeforeOpen : false,
                breakAfterOpen : false,
                breakBeforeClose : false,
                breakAfterClose : true
        }
        var blockRules = {
                indent : false,
                breakBeforeOpen : true,
                breakAfterOpen : true,
                breakBeforeClose : true,
                breakAfterClose : true
        }
        var childRules = {
                indent : true,
                breakBeforeOpen : true,
                breakAfterOpen : false,
                breakBeforeClose : false,
                breakAfterClose : true
        }
        instance.dataProcessor.writer.setRules( 'p',rules);
        instance.dataProcessor.writer.setRules( 'div',blockRules);
        instance.dataProcessor.writer.setRules( 'blockquote',rules);
        instance.dataProcessor.writer.setRules( 'hr',rules);
        instance.dataProcessor.writer.setRules( 'h1',rules);
        instance.dataProcessor.writer.setRules( 'h2',rules);
        instance.dataProcessor.writer.setRules( 'h3',rules);
        instance.dataProcessor.writer.setRules( 'h4',rules);
        instance.dataProcessor.writer.setRules( 'h5',rules);
        instance.dataProcessor.writer.setRules( 'h6',rules);
        instance.dataProcessor.writer.setRules( 'ul',rules);
        instance.dataProcessor.writer.setRules( 'ol',rules);
        instance.dataProcessor.writer.setRules( 'li',childRules);
        instance.dataProcessor.writer.setRules( 'img',childRules);
        instance.dataProcessor.writer.setRules( 'figure',childRules);
    });
})();