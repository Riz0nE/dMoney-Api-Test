const newman = require('newman');
require('dotenv').config();
newman.run({
    collection:`https://api.postman.com/collections/45481527-5578db22-abc8-45d6-90fd-97256b54c950?access_key=${process.env.pmatKey}`,
    reporters:'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html'
        }
    }
}, function (err){
    if (err) {throw err;}
    console.log('collection run complete')
});