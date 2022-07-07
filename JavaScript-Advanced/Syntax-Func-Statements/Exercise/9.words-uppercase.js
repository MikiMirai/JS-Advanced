function wordsUppercase(input) {
    return input.match(/\w+/g).join(", ").toLocaleUpperCase()
}

console.log(wordsUppercase('Hi, how are you?'));