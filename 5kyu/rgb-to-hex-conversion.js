function checkRange (n) {
  if (n < 0) return 0;
  else if (n > 255) return 255;
  else return n;
}

function hex (c) {
  col = c.toString(16);
  return col.length == 1 ? "0" + col : col;
}

function rgb(r, g, b){
  
  return (hex(checkRange(r)) + hex(checkRange(g)) + hex(checkRange(b))).toUpperCase();

}