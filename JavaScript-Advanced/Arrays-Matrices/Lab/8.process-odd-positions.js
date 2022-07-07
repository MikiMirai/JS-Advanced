function oddPos(nums){
    console.log(nums
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse()
        .join(' '));
}

oddPos([10, 15, 20, 25]);
oddPos([3, 0, 10, 4, 7, 3]);