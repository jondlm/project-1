// Main function that accepts a string with {{ }} sections in it that will later be replaced
function template(templateString){
  var matches = templateString.match(/\{\{\s*\w+\s*\}\}/g)
    , rendered = templateString;
  function transform(obj){
    matches.forEach(function(item){
      var key = item.match(/\w+/);
      if (key && obj[key])
        rendered = rendered.replace(item, obj[key]);
    });
    return rendered;
  }
  return transform;
}

/****************************************
                 EXPORTS
****************************************/

module.exports = template;
