const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1", "salary": 100000}', (err) => {
    if (err) console.log(err);
});

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

fs.appendFile('employees.json', ',{"name": "Employee 2", "salary": 200000}', (err) => {
    if (err) console.log(err);
});

fs.unlink('employees.json', function (err) {
    if (err) console.log(err);
});