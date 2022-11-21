const test = (input, target) => {

    return typeof input !== 'object' ? false
    : Object.keys(input).length !== Object.keys(target).length ? false
    : JSON.stringify(input) !== JSON.stringify(target) ? false
    : true
}

const target =  {
    "name": "sheet2",
    "freeze": "A1",
    "styles": [],
    "merges": [],
    "rows": {},
    "validations": []
}

console.log(test("This is a string, not an object. This won't work!", target), 'false' ) 
console.log(test(100, target), 'false')
console.log(test({"name": "sheet2","freeze": "A1","styles": [],"merges": [],"rows": {}}, target), 'false')
console.log(test({"name": "sheet2", "freeze": "A1", "styles": [], "merges": [], "rows": {}, "validations": []}, target), 'true' )