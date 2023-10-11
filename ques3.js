// Write polyfill of filter (same function which works as array filter does)
function myFilter(arr, callBack) {
  if (!arr.length || !callBack) return arr;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
      const ans = callBack(arr[i], i, arr);
      if (ans!=null||ans!=undefined) {
          newArr.push(ans)
      }
  }

  return newArr;
}

function callBackFun(elem, idx, arr) {
  if(elem%2==0) return elem
}

console.log(myFilter([2, 3, 4, 5], callBackFun));