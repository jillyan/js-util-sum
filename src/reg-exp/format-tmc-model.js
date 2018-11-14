const demoData = require('./DemoService');
let str = JSON.stringify(demoData);
const reg1 = /"[a-z,A-Z]+":/g;
str.match(reg1).forEach(item => {
	const rightKey = item.replace(/"/g, '');
	str = str.replace(item, rightKey);
});
const reg2 = /"(.*)"/g;
str.match(reg2).forEach(item => {
	const rightKey = item.replace(/"/g, '\'');
	str = str.replace(item, rightKey);
});
const reg3 = /'}/g;
str.match(reg3).forEach(item => {
	const rightKey = item.replace(/}/g, ',}');
	str = str.replace(item, rightKey);
});
str = `module.exports = ${str};`;
console.log(str);
