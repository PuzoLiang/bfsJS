import HashTable from './hash';
import figlet  from 'figlet';
import clear from 'clear';
import CLI from 'clui';
import Queue from './Queue';
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

        console.log(`正在创建有向图.`);
        graph.set("you",["alice","bob","ciaire"]);
        graph.set("bob",["anuj","peggy"]);
        graph.set("alice",["peggy"]);
        graph.set("claire",["thom","jonny"]);
        graph.set("anuj",[]);
        graph.set("peggy",[]);
        graph.set("thom",[]);
        graph.set("jonny",[]);

        console.log(`有向图创建完毕`);
        console.log(`设置队列`);

        const search_queue = new Queue();

        search_queue.enqueue(graph.get("you"));
        while(search_queue.isEmpty()) {
            let person = search_queue.dequeue();
            if(is_person(person)) {
                console.log(`找到此人了`);
                return true;
            }else {
                search_queue.enquene(graph.get("person"));
            }
            return false;
        }
        
        function is_person(person) {
            if(person === "jonny") {
                return true;
            }else {
                return false;
            }
        }
    });
}