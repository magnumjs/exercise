module.exports = function StringSorter(inputString){
    let outputString = "";

    //1. remove punctuation (.,)

    outputString = inputString.replace(/[.,]/g,"");

    //2. remove whitespace ( )

    outputString = outputString.replace(/\s/g,"");

    //3. change case

    outputString = outputString.toLowerCase();


    //4. sort string alphabetically

    var arr = outputString.split('');
    var sorted = arr.sort();
    return sorted.join('');

}