module.exports = function StringSorter(inputString){
    let outputString = "";

    //1. remove punctuation (.,)

    outputString = inputString.replace(/[.,]/g,"");

    //2. remove whitespace ( )

    outputString = outputString.replace(/\s/g,"");

    //3. change case

    outputString = outputString.toLowerCase();


    //4. sort string alphabetically

    const arr = outputString.split('');
    const sorted = arr.sort();
    return sorted.join('');

}