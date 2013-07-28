



function template(templateString){
  var matches = templateString.match(/\{\{\s*(\w+)\s*\}\}/g),
      rendered = '';

  function transform(obj){
    if (!obj) {return null};

    var keys = Object.keys(obj);

    // For each of the input keys, loop through and swap them
    keys.forEach(function(key){
      matches.filter(function(i){
        i.match(/\w+/) === key ? true : false;
      });

      rendered = rendered.replace(item);

    });

    return rendered;
  }
  return transform;
}


/****************************************
                 EXPORTS
****************************************/

module.exports = template;



// var tpl = your_function("hello {{ world }} how is your {{ weekday }} going?")

// tpl({
//   world: 'dude'
// , weekday: 'tuesday'
// })  // == "hello dude how is your tuesday going?"