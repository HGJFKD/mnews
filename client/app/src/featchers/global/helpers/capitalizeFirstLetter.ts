function capitalizeFirstLetter(inputString: string): string {
    if (!inputString) {
        return inputString;
    }

    const words = inputString.split(' ');
    const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    const restOfWords = words.slice(1).map(word => word.toLowerCase());

    return [firstWord, ...restOfWords].join(' ');
}


export default capitalizeFirstLetter
