const telebot = require("telebot");
const CONSTANTS = require("./constants");

const bot = new telebot({
    token: CONSTANTS.TELEGRAM_TOKEN,
});

bot.on(["/plaalfa3", "/plaalfa 3"], (msg) => {
    bot.sendMessage(msg.chat.id, `A banda del tancament de massisos el Pla Alfa 3 comporta:

    ⛔️ Aturada dels treballs forestals
    ⛔️ Aturada dels treballs que generen risc d'incendi forestal, com el manteniment de vegetació de vorals de carreteres, ús de bufadors i radials, etc. i que havien d'estar prèviament autoritzats.
    ⛔️ Prohibició de la caça.
    🚭 Prohibició de fumar en terreny forestal.
    ⛺️🚫 Prohibició d'acampar en terrenys forestals.
    
    
    ❗️Els treballs de la sega del cereal 🌾🌾, mantenen la regulació: recol·lectores i embaladores han de disposar dels elements d'extinció 🧯🧯🧯🧯 i si volen treballar de 14 🕑 a 17 🕔hores, han de ☎️ trucar als Agents Rurals (935617000) per indicar la posició de la màquina. Els tractors amb remolc que hi donin suport han de dur un 🧯extintor amb base d'aigua. 
    ⛔️ No es poden usar picadores. 
    ℹ️ 🚜 La resta de treballs agrícoles no estan sotmesos a regulació, però es recomana evitar les hores centrals del dia pel risc d'accidents.`);
})

bot.start();