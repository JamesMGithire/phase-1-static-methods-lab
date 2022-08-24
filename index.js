class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(str) {
    const except = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const lowStrArr = str.split(" ")
    const result = lowStrArr
      .map((word) => {
        if (!(word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from")) {
          // console.log(this.capitalize(word))
          return (this.capitalize(word))
        }
        else {
          return word;
        }
      }
      )
    result[0] = this.capitalize(result[0]);
    result[result.length - 1] = this.capitalize(result[result.length - 1]);
    return (result.join(" "));
  }
}
Formatter.titleize("Chicken Soup With Rice and a Few other Songs");