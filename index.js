var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
<<<<<<< HEAD
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  object = {key: object[key]};
  var newObj = Object.assign({}, object);
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]; 
}
=======
  return Object.assign({}, object, {[key]: value});
  
});
}

>>>>>>> 981dcf26530a5b48797358f81ee84eb9d306f0a8
