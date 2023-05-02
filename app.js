const util = require('./util');
const data = require('./data').data;
const process = require('process');
const arg = process.argv[2];

if(arg.includes('--filter')) {
    const filter = arg.split('=')[1];
    console.log(util.getFilteredData(filter,data));
}
else if(arg.includes('--count')) {
    console.log(JSON.stringify(util.getDataWithChildrenAccount(data)));
}