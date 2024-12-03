import Wreath from "../wreath.js";

const part1 = (fn) => {
  const wreath = new Wreath('dec-2', false);
  let reports = [];

  wreath.onEachLine(line => {
    let report = line.trim().split(/\s+/);
    report = report.map(level => Number(level));
    reports.push(report);
  });

  wreath.endOfFile(() => {

    const isMonotonic = (arr) => {
      if(arr.length <= 1) {
        return true;
      }

      let isIncreasing = true;
      let isDecreasing = true;

      for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
          isDecreasing = false;
        }
        if(arr[ i ] < arr[i - 1]) {
          isIncreasing = false;
        }
      }
      return isIncreasing !== isDecreasing;
    }

    const processReport = (report) => {
      if(!isMonotonic(report)) return 0;
      for(let i = 0; i < report.length; i++) {
        if(report[i + 1]) {
          let current = report[ i ];
          let next = report[ i + 1 ];
          let diff = Math.abs(current - next);

          
          if(!(diff > 0 && diff < 4)) {
            return 0; 
          }

        } else {
          return 1;
          // end of list
        }
      }
    }


    // console.log(processReport(reports[1]))
      const result = reports.reduce((acc, curr) => {
        const processed = processReport(curr);
        console.log(processed, curr)
       acc += processReport(curr);

      return acc;
    }, 0);

    fn(result);
  });
};


part1(result => console.info(`Part 1: ${result}`)); // 1938424
// part2(id => console.info(`Part 2: ${id}`)); // 54390
