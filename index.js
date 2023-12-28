let totalelement = document.getElementById('a')
let amount = 0
function give(){amount = amount + 1 
    totalelement.innerHTML = amount
}

function take(){amount = amount - 1 
    totalelement.innerHTML = amount
}