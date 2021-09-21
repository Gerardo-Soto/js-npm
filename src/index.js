const names = [
    "Gerard",
    "Tania",
    "Richard",
    "Antonio",
    "Joe"
];

const getRandomName = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    //console.log('Welcome $(message)');
    console.log(`Welcome ${name}`);
};

// Export function
module.exports = { getRandomName }
