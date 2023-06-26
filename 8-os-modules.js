const os = require('os');
// // os = sistema operativo or operating sistem 

// const user = os.userInfo();
// console.log(user);


// // console.log(`Il sistema del temo è ${os.uptime()} in secondi `);

// // let secondi = 793702.125;
// // let ore = 1 ;
// // let minuti = 60;
// // let secondiDiUnOra= minuti * minuti *ore;

// // let tempo = secondiDiUnOra;

// // console.log(tempo);

// // let secondiDivisiOre = secondi/tempo;
// // console.log(secondiDivisiOre);


// const datiOs= {
// // a:os.EOL(),
// b:os.arch(),
// c:os.availableParallelism(),
// // d:os.constants(),
// e:os.cpus(),
// // f:os.devNull(),
// g:os.endianness(),
// h:os.freemem()
// ,i:os.getPriority()
// ,j:os.homedir()
// ,k:os.hostname()
// ,l:os.loadavg()
// ,m:os.machine()
// ,n:os.networkInterfaces()
// ,o:os.platform()
// ,p:os.release()
// ,q:os.setPriority()
// ,r:os.tmpdir()
// ,s:os.user()
// ,t:os.require()
// ,u:os.version()
// ,v:os.userInfo()
// ,w:os.uptime()
// ,x:os.type()
// ,
// }
// console.log(datiOs);

const sistemaOs= {
    nome: os.type(),
    rilascio: os.release(),
    totalmem:os.totalmem(),
    freemem: os.freemem(),
}

console.log(sistemaOs);