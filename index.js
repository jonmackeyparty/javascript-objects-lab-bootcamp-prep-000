var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { prop2: 2 });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign ({}, recipes);
  delete recipes.prop;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.prop;
  return recipes;
}