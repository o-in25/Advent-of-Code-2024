import Wreath from "../wreath.js";

const part1 = (fn) => {
  const wreath = new Wreath('dec-1');
  const lhs = [];
  const rhs = [];

  wreath.onEachLine(line => {
    const [left, right] = line.trim().split(/\s+/);
    lhs.push(Number(left));
    rhs.push(Number(right));
  });

  wreath.endOfFile(() => {
    const findSmallest = (arr) => {
      let smallest = {
        value: arr[0],
        index: 0
      }

      arr.forEach((element, index) => {
        if(element < smallest.value) {
          smallest.value = element;
          smallest.index = index;
        }
      });

      return smallest;
    }

    let id = 0;
    while(lhs.length > 0) {
      let lhsSmallest = findSmallest(lhs);
      let rhsSmallest = findSmallest(rhs);
      id += Math.abs(lhsSmallest.value - rhsSmallest.value)
      lhs.splice(lhsSmallest.index, 1);
      rhs.splice(rhsSmallest.index, 1);

    }

    fn(id)
  });
};

const part2 = (fn) => {
  const wreath = new Wreath('dec-1');
  const lhs = [];
  const rhs = [];

  wreath.onEachLine(line => {
    const [left, right] = line.trim().split(/\s+/);
    lhs.push(Number(left));
    rhs.push(Number(right));
  });

  wreath.endOfFile(() => {
    const findCount = (arr, num) => {
      return arr.reduce((acc, curr) => {
        if(curr === num) acc++;
        return acc;
      }, 0);
    }
    let score = 0;
    
    for(let i = 0; i < lhs.length; i++) {
      let count = findCount(rhs, lhs[i]);
      score += count * lhs[i]
    }

    fn(score);

  });
};

part1(id => console.info(`Part 1: ${id}`)); // 1938424
part2(id => console.info(`Part 2: ${id}`)); // 54390
