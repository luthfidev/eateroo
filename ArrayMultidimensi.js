function toArray() {
    let array = [1, 2, [3, 4], 5, [6, 7], 8];
    var result=[];

    function toarray(array) {
        for (var l=array.length,i=0;i<l;i++) {
            if (Array.isArray(array[i])) {
                toarray(array[i]);
            } else {
                result.push(array[i]);
            }
        }
        return result;
    }

    return toarray(array);
}

console.log(toArray())
