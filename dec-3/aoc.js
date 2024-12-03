import Wreath from "../wreath.js";
const wreath = new Wreath('dec-3', process.argv[2] || false);

const part1 = (fn) => {
  const regex = /mul\((-?\d+),(-?\d+)\)/g;

  let input = '';
  wreath.onEachLine(line => input += line);

  wreath.endOfFile(() => {
    let regex = /mul\((-?\d+),(-?\d+)\)/g;
    let sum = 0;
    let match;
    while((match = regex.exec(input)) !== null) {
      // match[1] is the first integer, match[2] is the second integer
      let [, lhs, rhs] = match;
      sum += parseInt(lhs) * parseInt(rhs);
    }

    fn(sum);
    // console.log(matches)

  })
}

const part2 = () => {
  
}
part1(result => console.info(`Part 1: ${result}`)); // 213
// part2(result => console.info(`Part 2: ${result}`)); // 285 
