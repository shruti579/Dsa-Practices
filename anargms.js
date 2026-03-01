function anargms(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let newstr1 = {};
    for (let item of str1) {
        newstr1[item] = (newstr1[item] || 0) + 1;
    }
    console.log(newstr1);

    let newstr2 = {};
    for (let item of str2) {
        newstr2[item] = (newstr2[item] || 0) + 1;
    }
    console.log(newstr2);

    for (let key in newstr1) {
        if (newstr1[key] !== newstr2[key]) {
            return false
        }
        //    console.log( key)
    }

    return true
}
console.log(anargms("mom", "omm"));
