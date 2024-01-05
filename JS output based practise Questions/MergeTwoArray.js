// Create Two Array's having Arr1 and Arr2 having 2 objects each with the key's 
// for the Array1 as the Name and Id and in case of the Array2 the key's RolNo and Id
const array1=[{
    name:"YourName",
    id:1
}
    
    ,{
        name:"YourName2",
        id:2
    }]
    const array2=[{
        rollNo:1,
        id:1
    },{
        rollNo:2,
        id:2

    }]

    const newArray =array1.map((elem1)=>
    {const newElems=array2.find(item2=>item2.id==elem1.id)
    return {
        id:elem1.id,
        rollNo:newElems.rollNo,
        name:elem1.name,
    }
}
    )
    console.log(newArray)