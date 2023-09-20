const data = 'I love JS';

// await Bun.write('output.txt', data);


const file = await Bun.file('output.txt');
console.log(await file.text());
console.log(file.size);
