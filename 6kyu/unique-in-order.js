var uniqueInOrder=function(iterable){
  if (iterable.length == 0) return [];
  else if (typeof iterable == "string") arr = iterable.split('');
  else arr = iterable;

  result = [arr[0]];

  for (i = 1; i < arr.length; i++) {
    if (!(arr[i] == arr[i-1])) result.push(arr[i]);
  }

  return result;
}