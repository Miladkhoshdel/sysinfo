const os = require('os');

console.log("\nHostname: " + os.hostname());
console.log("OS version: " + os.type() + " " + os.release() + " " + os.arch());
console.log("Load Average: " + os.loadavg());
console.log("UpTime: " + (os.uptime()/3600).toFixed(2) + " hour(s)");
console.log("CPU Model: " + os.cpus()[0].model);
console.log("Total Memory: " + (os.totalmem()/1073741824).toFixed(2) +  " GB");
console.log("Free Memory: " + (os.freemem()/1073741824).toFixed(2) + " GB");
console.log("Network Interfaces: " + Object.keys(os.networkInterfaces()).length )