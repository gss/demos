function $(el,container){
  var container = typeof container != "undefined" ? container : document;
  if(el.substring(0,1) == "."){
    return container.getElementsByClassName(el.substring(1));
  }else if(el.substring(0,1) == "#"){
    return container.getElementById(el.substring(1));
  }else{
    return container.getElementsByTagName(el);
  }
}