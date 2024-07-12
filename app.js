const express = require('express');
const { Telegraf } = require('telegraf');
const path = require('path');

const app = express();
const bot = new Telegraf('7220985219:AAHaI_hLerXCpCkLcgvZJNEepAjEvu3mHkY');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send('Form submitted successfully!');
});

bot.start((ctx) => ctx.reply('Welcome to TRONIX! Use /open to start the app.'));
bot.command('open', (ctx) => {
    ctx.replyWithGame('tronix_game');
});
bot.launch();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});