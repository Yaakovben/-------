//////////1



function filterAndSortEvenNumbers(num){
    const arrFilter = num.filter(nums => {return nums % 2 == 0})
    const arrNew = arrFilter.sort()
    return arrNew;

}

console.log(filterAndSortEvenNumbers([1,8,9,1,6,2 ]));


///2
function removeDuplicates(list){
let arryNew = [];
for(i = 0; i <list.length; i++){
    for(x = 0; x <list.length -1 ; x++){
        if (i != x ){
            continue;
        }
        else{
            arryNew.push(list[i])
        }
    }
    
}
return arryNew;
}

console.log(removeDuplicates([1, 3, 7, 4, 5, 1, ]));



//3
function capitalizeFirstLetter(s) {
const arrNew = s.split(" ")
for(i=0; i < arrNew.length; i++){
    if(arrNew[-1] =="."){
        arrNew[0].toA
    }
}
}


console.log(capitalizeFirstLetter("bbobihbvyivu"))






