const os = require('os');
const gpuInfo = require('gpu-info');

console.log("\nHostname: " + os.hostname());
console.log("OS version: " + os.type() + " " + os.release() + " " + os.arch());
console.log("Load Average: " + os.loadavg());
console.log("UpTime: " + (os.uptime()/3600).toFixed(2) + " hour(s)");
console.log("CPU Model: " + os.cpus()[0].model);
console.log("Total Memory: " + (os.totalmem()/1073741824).toFixed(2) +  " GB");
console.log("Free Memory: " + (os.freemem()/1073741824).toFixed(2) + " GB");
console.log("\n[+] Network Interfaces: " + Object.keys(os.networkInterfaces()).length )
for (let i=0; i<Object.keys(os.networkInterfaces()).length ; i++){
    console.log(" [-] Name: " + Object.keys(os.networkInterfaces())[i]);
    for(let y=0; y<Object.values(os.networkInterfaces())[i].length; y++){
        console.log("\t" + "IP" + y + ": " + Object.values(os.networkInterfaces())[i][y].address);
    }
}

gpuInfo().then(function(data) {
    console.log('\n[+] GPU List:')
    for (let i=0; i<data.length; i++){
        console.log(" [-] " + data[i].Caption);
        console.log("     Ram: " + (data[i].AdapterRAM/1073741824).toFixed(2) + " GB")
        console.log("     Driver Version: " + data[i].DriverVersion)
        console.log("     Device ID: " + data[i].DeviceID)    }
});