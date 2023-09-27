// Remember js does not have builtin objects or functions which can be use for testing.
// Jest test is a framework used in testing JavaScript code. Not only Js but other libraries as well.
expect(concatStrings("123", "456")).toBe ("123456")


function addNum (val){
    return val +5
}
module.exports = addNum;