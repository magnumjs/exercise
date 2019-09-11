module.exports = function StringSorter(inputString){
    let outputString = "";

    //1. remove punctuation (.,)

    outputString = inputString.replace(/[.,]/g,"");

    return outputString;
}