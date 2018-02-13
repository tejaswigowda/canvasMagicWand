function lockAll()
{
  theCanvas.forEachObject(function(o) {
    o.lockMovementX = true;  o.lockMovementY = true;  o.lockScalingX = true; o.lockScalingY = true; o.lockRotation = true;
  });
}
