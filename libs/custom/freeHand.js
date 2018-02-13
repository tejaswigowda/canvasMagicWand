var toolName = "freeHand";
initTool(toolName, "fa fa-pencil", fhInit);

/** FREE HAND */
function freeHandActive()
{
  header.show("Free hand");
  theCanvas.isDrawingMode = true
}

function freeHandDeActive()
{
  theCanvas.isDrawingMode = false;
  //inspectorDisp.show();
}


function fhInit(){
  document.getElementById("drawing-color").onchange = function() {
    theCanvas.freeDrawingBrush.color = this.value;
    applyAttr("stroke", this.value);
  };
  document.getElementById("drawing-shadow-color").onchange = function() {
    theCanvas.freeDrawingBrush.shadowColor = this.value;
    applyShadow("color", this.value);
  };
  document.getElementById("drawing-line-width").onchange = function() {
    var x = parseInt(this.value, 10) || 1;
    theCanvas.freeDrawingBrush.width = x;
    this.previousSibling.innerHTML = this.value;
    applyAttr("strokeWidth", x);
  };
  document.getElementById("drawing-shadow-width").onchange = function() {
    var x = parseInt(this.value, 10) || 0;
    theCanvas.freeDrawingBrush.shadowBlur = x;
    this.previousSibling.innerHTML = this.value;
    applyShadow("blur", x);
  };
  document.getElementById("drawing-shadow-offset").onchange = function() {
    var x = parseInt(this.value, 10) || 0;
    theCanvas.freeDrawingBrush.shadowOffsetX = x;
    theCanvas.freeDrawingBrush.shadowOffsetY = x;
    this.previousSibling.innerHTML = this.value;
    applyShadow("offsetX", x);
    applyShadow("offsetY", x);
  };
}

