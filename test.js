const StringSorter=require("./StringSorter");

const inputString = "When not studying nuclear physics, Bambi likes to playbeach volleyball.";

const expectedOutput = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";

it("StringSorter function removes punctuation", ()=>{
    expect(StringSorter(inputString)).toEqual(expectedOutput)
})

it("StringSorter function maps uppercase to lowercase", ()=>{
    expect(StringSorter(inputString)).toEqual(expectedOutput)
})

it("StringSorter function returns sorted string", ()=>{
    expect(StringSorter(inputString)).toEqual(expectedOutput)
})