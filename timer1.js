const args = process.argv;
const command = args.slice(2);
// console.log(command);
const orderCommand = command.sort((a,b) => a - b);
// console.log(orderCommand);
const realNum = orderCommand.filter(num => num > 0);
// console.log(realNum);

const timer = (realNum) =>{
  for(let i = 0; i < realNum.length; i++){
    setTimeout(() =>{
      process.stdout.write(`\x07 bee in ${realNum[i]} second \n`);
    }, realNum[i] * 1000);
  }
}
timer(realNum)
