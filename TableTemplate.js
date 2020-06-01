function TableTemplate() {}
TableTemplate.fillIn = function (id, dict, columnName) {
  var table = document.getElementById(id);
  var row = table.rows;
  var head = row.item(0);
  var elem = new Cs142TemplateProcessor(head.innerHTML);
  var newHeader = elem.fillIn(dict);
  head.innerHTML = newHeader;
  var i;
  if (columnName === undefined) {
    for (i = 1; i < row.length; i++) {
      var v = row.item(i);
      var el = new Cs142TemplateProcessor(v.innerHTML);
      v.innerHTML = el.fillIn(dict);
    }
  } else {
    var x;
    if (columnName === head.cells[0].innerHTML) {
      x = 0;
    } else {
      x = 1;
    }

    for (i = 1; i < row.length; i++) {
      var val = row.item(i).cells[x];
      var elm = new Cs142TemplateProcessor(val.innerHTML);
      val.innerHTML = elm.fillIn(dict);
    }
  }

  if (table.style.visibility === "hidden") {
    table.style.visibility = "visible";
  }
};
