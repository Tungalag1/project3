function Cs142TemplateProcessor(template) {
  this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
  var str = this.template;
  var regExp = /{{[^}}]*}}/g;
  var temp = str.match(regExp); // stringee match hiine tgeed  replace hiine
  var i = 0;
  for (i of temp) {
    var value = i.replace("{{", "");
    value = value.replace("}}", "");
    //console.log(i);
    //console.log(dictionary[value]);
    str = str.replace(i, dictionary[value]);
  }
  //console.log(str);
  return str;
};
