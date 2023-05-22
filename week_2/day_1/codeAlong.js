let nums = [13, 45, 10, 19, 56, 85]

let smallest = nums[0]
let largest = nums[0]

for(let i = 0; i < nums.length; i++){
    if(smallest > nums[i]){
        smallest = nums[i]
    } else if(largest < nums[i]){
        largest = nums[i]
    }

    // switch(true) {
    //     case nums[i] > largest:
    //         largest = nums[i]
    //     break;

    //     case nums[i] < smallest:
    //         smallest = nums[i]
    //     break;
    // }
}

console.log(smallest,largest)