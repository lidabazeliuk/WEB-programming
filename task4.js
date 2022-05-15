let prices = Array()
let used = Array()
for (let i = 1; i<= 10; i++ ) {
    prices.push(Random(-500, 500))
}
alert(prices)

let price=0
while (true) {
    let answear = promt("type number or 'stop'", "")
    if (answear == 'stop')
    {
        break
    }
    else{
        if (used.includes(answear))
        {
            alert("Такий номер елементу вже використовували, виберіть інший")
            continue
        }
        else
        {
            used.push(answear)
            prise += prises[parseInt(answear)-1]
            alert(prise)
            alert(used)
        }
    }
}
alert(`Result: ${prise}`)
