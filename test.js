const StringSorter=require("./StringSorter")

const inputString = "When not studying nuclear physics, Bambi likes to playbeach volleyball."

const expectedOutput = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy"

describe('StringSorter', () => {

    it("StringSorter function removes punctuation", () => {

        const expected = /\.|\,/

        expect(StringSorter(inputString)).toEqual(expect.not.stringMatching(expected))
    })

    it("StringSorter function removes whitespace", () => {

        const expected = " "

        expect(StringSorter(inputString)).toEqual(expect.not.stringContaining(expected))
    })

    it("StringSorter function maps uppercase to lowercase", () => {
        const expected = /[A-Z]/

        expect(StringSorter(inputString)).toEqual(expect.not.stringMatching(expected))
    })

    it("StringSorter function returns sorted string", () => {
        expect(StringSorter(inputString)).toEqual(expectedOutput)
    })
})