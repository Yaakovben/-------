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
    console.log(arrNew);
    
    for(let i=0; i < arrNew.length; i++){
        if(arrNew[i][arrNew[i].length - 1] !=="."){
            arrNew[i] [0].toUpperCase() + arrNew[i].slice(1,arrNew[i].length-1)
        }
    return arrNew.join(" ")

}
}
console.log(capitalizeFirstLetter("bbobihbvyivu.  kiki"))


//4
function loadTasks() {
    const tasksString = localStorage.getItem("tasks");
    let tasks = [];
    if (tasksString) {
        tasks.add(JSON.parse(tasksString));
    }
    return tasks;
}


function saveTasks() {
    const tasks = [];
        tasks.push({ id: text, task: text });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}








