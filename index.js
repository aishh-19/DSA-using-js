let arr = [23,24,25,27,28,40,41];
let key = 41;
let binarySearch=(arr, key)=> {
let low = 0 ;
let high = arr.length-1;
while(low <= high){
    mid = Math.floor(low + high)/2;
if(arr[mid] == key){
    return mid;
}
else if(arr[mid]>key){
    high = mid - 1
}
else if(arr[mid] < key ){
    low = mid + 1 
}
}
return -1
}

console.log(binarySearch(arr, key))