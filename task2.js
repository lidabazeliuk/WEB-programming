let arr = [1,20,11,21,26,11,53]
for (el in arr){
    for (let i = 0 ; i < arr.length ; i++){
        if(el < 20){
            window.alert('Менше 20 було в день', arr.Indexof(el)+1)
        }
    }

    window.alert('Мінімальна кількість відвідувачів у день ' , arr.indexOf(Math.min(arr))+1)
    window.alert('Максимальна кількість відвідувачів у день ' , arr.indexOf(Math.max(arr))+1)
    let sumOfCustInWorkDays = 0
    for(let i =  0; i < 5; i++){
        sumOfCustInWorkDays += arr[i]
    }
    window.alert('Загальна кількість відвідувачів у робочі дні', sumOfCustInWorkDays)
    window.alert('Загальна кількість відвідувачів у вихідні', arr[5]+ arr[6])
}
