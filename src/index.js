const messages = ["Cynthia", "Marcos", "Teo", "Mina", "Ceyene", "Mevv"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
