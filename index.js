



function template(string){
  var matches = string.match(/\{\{\s*(\w+)\s*\}\}/g);

  function transform(obj){


    return rendered;
  }
  return transform;
}

module.exports = template;



// var tpl = your_function("hello {{ world }} how is your {{ weekday }} going?")

// tpl({
//   world: 'dude'
// , weekday: 'tuesday'
// })  // == "hello dude how is your tuesday going?"