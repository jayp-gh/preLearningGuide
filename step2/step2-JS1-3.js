function getWordAt (str, pos) {


    str = String(str);
    pos = Number(pos) >>> 0;


    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);


    if (right < 0) {
        return str.slice(left);
    }



}

//Word Position
