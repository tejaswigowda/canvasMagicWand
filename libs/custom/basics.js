/*Basics*/
var PATH = "libs/custom/";
var CURRTOOL = null;

var inspectorDisp = {
  default: "doc",
  show: function(mu){
    mu = mu || inspectorDisp.default;
    $(".inspector").hide();
    $("#insp-" + mu).stop().show();
  },
  __showActive: function(type){
      if(type === "path"){
        inspectorDisp.show("freeHand");
      }
      else{
        inspectorDisp.show();
      }
  }, 
  showActive: function(){
    var el = theCanvas.getActiveObject()
    if(el){
      inspectorDisp.__showActive(el.type);
      return;
    }
    var ty = [];
    var el1 = theCanvas.getActiveGroup()
    if(el1){
      for(var i = 0; i < el1.length; i++){
        var t = el1[i].type;
        if(ty.indexOf(t) >= 0){
          ty[ty.length] = t;
        }
      }
      if(ty.length == 1){
        inspectorDisp.__showActive(ty[0]);
      }
      else{
        inspectorDisp.show();
      }
    }
  }
}

var header = {
  show: function(mu){
    mu = mu || "";
    document.getElementById("headerTitle").innerHTML = mu;
    $("#header").slideDown();
  },
  close: function(){
     deactivateTool();
     $("#header").slideUp();
  }
}


function showInsp(f)
{
  if(f){
    $("body").addClass("showInsp");
  }
  else{
    $("body").toggleClass("showInsp");
  }
 // if(CURRTOOL == null) 
}

function toolSelected(tool)
{
  deactivateTool();

  CURRTOOL = tool;
  inspectorDisp.show(CURRTOOL)

  setTimeout(tool + "Active()", 100);
  theCanvas.deactivateAll().renderAll();

}



function applyAttr(attr, value)
{
  var el = theCanvas.getActiveObject()
  if(el){
    el[attr] = value;
    theCanvas.renderAll();
    return;
  }

  var el1 = theCanvas.getActiveGroup()
  if(el1){
    for(var i = 0; i < el1.length; i++){
      el1[i][attr] = value;
    }
    theCanvas.renderAll();
  }
}

function applyShadow(attr, value)
{
  var el = theCanvas.getActiveObject()
  if(el){
    el.setShadow({attr:value});
    theCanvas.renderAll();
    return;
  }

  var el1 = theCanvas.getActiveGroup()
  if(el1){
    for(var i = 0; i < el1.length; i++){
      el1[i].setShadow({attr:value});
    }
    theCanvas.renderAll();
  }
}

function deactivateTool()
{
  inspectorDisp.show();
  if(CURRTOOL == null) return;
  setTimeout(CURRTOOL + "DeActive()",0);
  CURRTOOL = null;
}



