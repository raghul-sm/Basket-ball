let N1 = document.getElementById("n-1")
let N2 = document.getElementById("n-2")

let count = 0
let ccount = 0

function plus1() {
        count += 1
        N1.textContent = count 
}

function plus2() {
        count += 2
        N1.textContent = count 
}

function plus3() {
        count += 3
        N1.textContent = count 
}


function Plus1() {
        ccount += 1
        N2.textContent = ccount 
}

function Plus2() {
        ccount += 2
        N2.textContent = ccount 
}

function Plus3() {
        ccount += 3
        N2.textContent = ccount 
}