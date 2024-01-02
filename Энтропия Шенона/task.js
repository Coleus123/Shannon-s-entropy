const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введите строку: ', (str) => {
  console.log('Вы ввели: ' + str);


let alph = new Object();

for(let i = 0; i < str.length; i++){
	if(alph[str.charAt(i)])
		alph[str.charAt(i)]++;
	else
		alph[str.charAt(i)] = 1;
}

let power = 0;

for(let i in alph){
	power++;
	alph[i] /= str.length;
}

let entropy = 0;
if (power > 1){
	for(let i in alph){
		entropy -= alph[i] * Math.log(alph[i]);
	}
	entropy /= Math.log(power);
}
console.log(entropy);
  rl.close();
});