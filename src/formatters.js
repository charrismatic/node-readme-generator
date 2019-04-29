module.exports = {

  line: '---',
  br: '\n',
  h1: (txt) => { return "\n" + "# " + txt + "\n\n"; },
  h2: (txt) => { return "\n" + "## " + txt + "\n\n"; },
  h3: (txt) => { return "\n" + "### " + txt + "\n\n"; },
  h4: (txt) => { return "\n" + "#### " + txt + "\n\n"; },
  h5: (txt) => { return "\n" + "##### " + txt + "\n\n"; },
  h6: (txt) => { return "\n" + "###### " + txt + "\n\n"; },
  blockquot: (txt) => { return "\n" + "> " + txt + "\n\n"; },
  key_value: (key, value) => { return key + ": " + value;   },
  link: (text, href) => { return `[${text}](${href})` },
  create_output_header: function (url, title ) {
    let header = '\n\n';
    header += url + '\n\n';
    header += '# ' +  title + '\n\n';
    header += '---------------------------\n';
    return header;
  },
  clean_html_whitespace: (html) => {
    return html.replace(/\>[\s|\n|\t]+\</g,'><').replace(/ /g,' ').trim();
  },
  clean_text_whitespace: (text) => {
    return text.replace(/ /g,' ').replace(/\t/g,'  ').replace(/\n+/g,'\n\n').trim();
  },
  clean_url: (url) => {
    return url.replace(/http[s]?\:\/\/(www)?[\.]?/,'');
  },
  obj_to_list: (obj) => {
    let result_arr = [];
    for (item of Object.entries(obj)) {
      result_arr.push(`-  ${item[0]}: ` + JSON.stringify(item[1])) 
    }
    return result_arr.join('\n')
  },
  arr_to_list: (arr) => {
    let result_arr = [];
    arr.forEach(function(item){ result_arr.push('- ' + item) });
    return result_arr.join('\n')
  },
  render_form_data: (forms) => {
    var form_result = [];
    var result = [];
    result.push("\n---\n");
    for (form of forms){
      form_result = parse_node_properties( form, 'attributes' );
      result.push(form_result.trim());
      var inputs = form.querySelectorAll('input');
      var input_results = ['  '];
      for ( input of inputs ){
        input_row = parse_node_properties( input , 'attributes');
        input_results.push( "  " + input_row );
      }
      result.push( input_results.join('\n') );
      result.push("---\n");
    }
    var header = '### SITE FORMS \n\n';
    return (header + result.join('\n').trim());
  },
  doc_headers: (data) => {
    var header = "\n\n";
    header += href + "\n\n";
    header += "# " +  document.title + "\n\n";
    header += "---------------------------\n";
    return header;
  },
  get_site_meta_tags: (() => {
    var result = [];
    meta = document.querySelectorAll('head meta');
    meta.forEach( function( node ){
      var row = [];
      var attrs = node.attributes;
      for ( var attr of attrs ) {
        row.push("" + attr.name + "__" +  attr.value + "");
      }
      result.push("-  " + row.join(" || ") + '\n' );
    } );
    header = '### SITE META TAGS';
    return  "\n\n" + header + "\n\n " + result.join('\n') + "\n\n";
  })
}
