const names = [
    "Gerard",
    "Tania",
    "Richard",
    "Antonio",
    "Joe"
];

const getRandomName = () => {
    const message = names[Math.floor(Math.random() * names.length)];
    console.log('Welcome $(message)');
};

// Export function
module.exports = { getRandomName }
