class Formatter {
  //add static methods here
  static capitalize(string){
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // Removes all non-alphanumeric characters except for dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g,'');
  }
    // Capitalizes all words in a sentence except specific small words, but always capitalizes the first word
    static titleize(string){
      const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      const words = string.split(' ');

      return words.map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return Formatter.capitalize(word);
        }else {
          return word;
        }

      }).join(' ');
    }
}

module.exports = Formatter;
