class Reverse {
    constructor(word) {
        this.word = word;
    };

    doIt() {
        let result = this.word.split('').reverse().join('');
        return result;
    };
};

const write = new Reverse('napis');
console.log(write.doIt());
