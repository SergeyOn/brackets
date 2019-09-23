module.exports = function check(str, bracketsConfig) {
    // your solution

    if (str.length % 2 !== 0) return false; // return if not enough brackets ex: ()[](

    function recursion(el1, el2, str) { // recursion helper

        let left = str.lastIndexOf(el1); //index of left bracket
        const right = str.indexOf(el2, left); //index of right bracket

        if (left === -1 && right === -1) return true; //if both not found OK

        if (left > -1 && left === right) left = str.lastIndexOf(el1, left - 1); //if both same type and have same index refind index

        if ((right - left) % 2 === 0) return false; //if left and right brackets contains even amount of brackets between

        const leftString = str.slice(0, left);
        const rightString = str.slice(right + 1);
        const newString = leftString + rightString; //make new string

        return recursion(el1, el2, newString);
    }

    let flag = true; //to check for fails

    for (let i = 0, length = bracketsConfig.length; i < length; i++) {
        const config = bracketsConfig[i];

        const leftB = config[0];
        const rightB = config[1];

        flag = recursion(leftB, rightB, str);

        if (!flag) break;
    }

    return flag;
}
