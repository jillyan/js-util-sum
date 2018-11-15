const demoData = require('./metricLog');

let str = JSON.stringify(demoData);
const reg1 = /"[0-9a-zA-Z_@.]+":/g;
str.match(reg1).forEach(item => {
	if (item.indexOf('.') > -1 || item.indexOf('@') > -1) {
		str = str.replace(item, item.replace(/"/g, '\''));
	} else {
		str = str.replace(item, item.replace(/"/g, ''));
	}
});

const reg2 = /"(.*)"/g;
let match = str.match(reg2);
if (match && match.length > 0) {
	match.forEach(item => {
		const rightKey = item.replace(/"/g, '\'');
		str = str.replace(item, rightKey);
	});
}

const reg3 = /'}/g;
match = str.match(reg3);
if (match && match.length > 0) {
	match.forEach(item => {
		const rightKey = item.replace(/}/g, ',}');
		str = str.replace(item, rightKey);
	});
}

str = `module.exports = ${str};`;
console.log(str);
