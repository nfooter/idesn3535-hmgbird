const testString = "<div>I own a {{animal}}.</div>";
//open brackets so the name of the animal can change
//objects are curly brackets and arrays are square brackets
const testContext = {animal: "dog", age: 7};

function replaceString(string, key, value){
  const searchTerm = "{{"+key+"}}";
  return string.replace(searchTerm, value);
}

function processTemplate(template, context){
  Object.keys(context).forEach(function(key){
    //first time we loop it's set to animal
    //second time it's set to age
    template = replaceString(template, key, context[key]);
  });
  return template;
}

function getTemplate(template, context){
  return $(processTemplate(template, context));
  //when you wrap jquery it turns into a html
  //will return $("I own a dog")
}
