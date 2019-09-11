const StringSorter=require("./StringSorter");

const inputString = "When not studying nuclear physics, Bambi likes to playbeach volleyball.";

const expectedOutput = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";

it("StringSorter function returns sorted string", ()=>{
    expect(StringSorter(inputString)).toEqual(expectedOutput)
})