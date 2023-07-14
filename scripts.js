async function getpost(link) {
    const res = await fetch(link)
    const data = await res.json();
    console.log(data)
}
getpost('https://aiplex.lol')

