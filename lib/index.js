import HashTable from './hash';
import figlet  from 'figlet';
import clear from 'clear';
import CLI from 'clui';

const Spinner = CLI.Spinner;
 
var countdown = new Spinner('正在初始化图...  ', ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷']);
 
countdown.start();
 
var number = 5;
setInterval(function () {
  number--;
  countdown.message('剩余 ' + number + ' 秒...  ');
  if (number === 0) {
    countdown.stop();
    run();
  }
}, 1000);

function run() {
    clear();
    figlet('Amazing BFS', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
        console.log(`\n欢迎来到BFS算法世界,即将展示一个简单的Demo\n`);
        const graph = new HashTable();
    });
}