'use strict'

/*
var me = 'Daniel'
let job = 'jobless'
const year = 1999

console.log(addDecl(1, 2)
)
console.log(addExpr(1, 2)
)
console.log(addArrow(1, 2)
)

function addDecl(a, b){
    return a + b
}

const addExpr = function (a, b){
    return a + b
}

const addArrow = (a, b) => a + b
*/
const daniel = {
    firstName: 'Daniel',
    year: 1991,
    calcAge: function () {
        console.log(2023 - this.year)

        const isMillenial = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial()
        /*
        const self = this
        const isMillenial = function () {
            console.log(self)
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillenial()
        */
    },
    greet: () => console.log(`Hey ${this.firstName}`)
}
daniel.greet()
daniel.calcAge()