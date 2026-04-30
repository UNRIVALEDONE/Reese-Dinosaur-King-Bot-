export default {
    name: "starter",

    async execute(message, args) {

        const starters = {
            ace: {
                name: "Ace 🦖 (Carnotaurus / Wind)",
                image: "https://cdn.discordapp.com/attachments/xxx/ace.png"
            },
            paris: {
                name: "Paris 🌿 (Parasaurolophus / Grass)",
                image: "https://cdn.discordapp.com/attachments/xxx/paris.png"
            },
            chomp: {
                name: "Chomp ⚡ (Triceratops / Thunder)",
                image: "https://cdn.discordapp.com/attachments/xxx/chomp.png"
            },
            spiny: {
                name: "Spiny 🌊 (Spinosaurus / Water)",
                image: "https://cdn.discordapp.com/attachments/xxx/spiny.png"
            },
            tank: {
                name: "Tank 🌍 (Saichania / Earth)",
                image: "https://cdn.discordapp.com/attachments/xxx/tank.png"
            },
            terry: {
                name: "Terry 🔥 (Tyrannosaurus Rex / Fire)",
                image: "https://cdn.discordapp.com/attachments/xxx/terry.png"
            }
        };

        // no input → show list
        if (!args[0]) {
            return message.reply(
                "🦖 choose your starter:\n\n" +
                Object.keys(starters).map(k => `• ${k}`).join("\n") +
                "\n\nuse: !starter <name>"
            );
        }

        // 🔥 normalize input (THIS is the important part)
        const choice = args[0].toLowerCase().trim();

        const dino = starters[choice];

        if (!dino) {
            return message.reply(
                "❌ that dinosaur doesn't exist.\ntry: ace, paris, chomp, spiny, tank, terry"
            );
        }

        const embed = {
            title: "🦖 Starter Selected!",
            description: `You chose **${dino.name}**`,
            image: { url: dino.image },
            color: 0x00ff99
        };

        message.channel.send({ embeds: [embed] });
    }
};
