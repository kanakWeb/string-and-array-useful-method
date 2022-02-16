const products = [
    'hp laptop',
    'dell notepad laptop',
    'redmi note 8',
    'walton laptop',
    'dell Laptop'
];

//const searching = 'LAPTOP';
const searching = 'laptop';
const output = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product)
    }

}
console.log(output)

/* for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output) */


//'kanak is a student'.startsWith('kanak'); 	//startsWith akta 1st word search kora jai.
//true

/* for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output) */

//'kanak is a student'.endsWith('student');	//last er word khoje dekhay 
//true

for (const product of products) {
    if (product.toLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)