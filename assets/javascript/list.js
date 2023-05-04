function add(mod, type) {
	const format = `
		<img src="https://steamuserimages-a.akamaihd.net/ugc/${mod.img}/" alt="${mod.name}">
		<div>
			<h1>${mod.name}</h1>
			<p>${mod.desc}</p>
		</div>
		<a class="click" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${mod.link}" target="_blank"></a>\n
	`;

	const modCreate = document.createElement('section');
	modCreate.innerHTML = format;
	document.querySelector(`.${type}`).appendChild(modCreate);
}

for(let mod of client) {
	add(mod, 'client');
}
for(let mod of server) {
	add(mod, 'server');
}