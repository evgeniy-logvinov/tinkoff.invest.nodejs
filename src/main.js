// var tinkoff_v2 = require ('../tinkoff_v2.js');

// console.log(process.argv[1])
// console.log(process.argv[2])
// var api = new tinkoff_v2({
// 	'isDebug' : false,
// 	'token': process.argv[2]
// });

// var call = api.OrdersStreamService.TradesStream();

// call.on('data', function(msg) {
//   console.log('msgCount: ', ' | msg: ', msg);
// });
// call.on('error', function(e) {
//   console.log('error: ', e);
// });
// call.on('status', function(status) {
//   console.log('status: ', status);
// });
// call.on('end', function() {
//   console.log('socket end');
// }); 



// setTimeout(function(){
// 	console.log('close first');
// 	call.cancel();
// }, 1000);
var tinkoff_v2 = require ('../tinkoff_v2.js');
var api = new tinkoff_v2({'token' : process.argv[2], 'appName' : "evgeniy.logvinov.k"});

(async function main(){	
    try {
        let operations = await api.Operations.GetOperations({
            'account_id' : "2116136876",
            'state' : "OPERATION_STATE_EXECUTED",
            'from'  : (new Date('2021-04-26')),
            'to'    : (new Date('2022-04-27')),
        });
        console.log(operations);    
    } catch (err) {
        console.log(err);
    }
})();
