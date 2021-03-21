const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const mysql = require("mysql");


var con = mysql.createConnection({
    host: "localhost",
    user: "USER",
    password: "PASS",
    database: "DB"
});

con.connect(err => {
    if(err) throw err;
    console.log('Connected to database!');
});
client.on("ready", async () => {
console.log(`${client.user.username} is online`);

client.user.setActivity('!help | !donate');
});

client.on("message", async message => {

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray. slice(1);


    if(cmd ===`${prefix}start`) {
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription('Welcome Adventurer!')
            .setColor("#4286f4")
            .setURL(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setImage('https://i.imgur.com/noMKq62.jpg')
            .addField("Create a character", 'Use !race to show the race selection list', true)
            .setFooter('To pull up a list of commands at any time use !help')
        return message.channel.send(embed);

    }

    if(cmd ===`${prefix}race`) {
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Race List: use !racename to choose. ex. !woodelf")
            .setColor("#4286f4")
            .addField('1.', "Wood Elf", true)
            .addField('6.', "Dark Elf", true)
            .addField('11.', "High Elf", true)
            .addField('2.', "Blood Elf", true)
            .addField('7.', "Gnome", true)
            .addField('12.', "Human", true)
            .addField('3.', "Dragonborne", true)
            .addField('8.', "Orc", true)
            .addField('13.', "Undead", true)
            .addField('4.', "Troll", true)
            .addField('9.', "Tiefling", true)
            .addField('14.', "Aasimar", true)
            .addField('5.', "Dwarf", true)
            .addField('10.', "Halfling", true)
            .addField('15.', "Lycan", true)
        return message.channel.send(embed);

    }
    if(cmd ===`${prefix}class`) {
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Class List")
            .setColor("#4286f4")
            .addField('1.', "Warrior", true)
            .addField('6.', "Ranger", true)
            .addField('9.', "Thief", true)
            .addField('2.', "Wizard", true)
            .addField('7.', "Necromancer", true)
            .addField('10.', "Druid", true)
            .addField('3.', "Paladin", true)
            .addField('8.', "Cleric", true)
            .addField('11.', "Warlock", true)
            .addField('4.', "Monk", true)
            .addField('5.', "Death Knight")
            return message.channel.send({embed});
    }








//RACES
    if(cmd ===`${prefix}darkelf`) {
        var Darkelf = "Darkelf"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Darkelf}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("dark Elf")
            .setColor("#4286f4")
            .addField("You have chosen dark Elf", 'Use !class to see class menu')
         return message.channel.send({embed});

    }

    if(cmd ===`${prefix}highelf`) {
        var Highelf = "Highelf"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Highelf}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("High Elf")
            .setColor("#4286f4")
            .addField("You have chosen High Elf", 'Use !class to see class menu')
         return message.channel.send({embed});
    }

    
    if(cmd ===`${prefix}bloodelf`) {
        var Bloodelf = "Bloodelf"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
        if (err) throw err;
        if(rows.length < 1) {
        sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Bloodelf}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Blood Elf")
            .setColor("#4286f4")
            .addField("You have chosen Blood Elf", 'Use !class to see class menu')
         return message.channel.send({embed});
    }

    if(cmd ===`${prefix}dragonborne`) {
        var Dragonborne = "Dragonborne"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
        if (err) throw err;
        if(rows.length < 1) {
        sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Dragonborne}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Dragonborne")
            .setColor("#4286f4")
            .addField("You have chosen Dragonborne", 'Use !class to see class menu')
         return message.channel.send({embed});
    }

    if(cmd ===`${prefix}dwarf`) {
        var Dwarf = "Dwarf"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
        if (err) throw err;
        if(rows.length < 1) {
        sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Dwarf}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Dwarf")
            .setColor("#4286f4")
            .addField("You have chosen Dwarf", 'Use !class to see class menu')
         return message.channel.send({embed});
    }

    if(cmd ===`${prefix}gnome`) {
        var Gnome = "Gnome"
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
        if (err) throw err;
        if(rows.length < 1) {
        sql = `INSERT INTO race (id, race) VALUES ('${message.author.username}', '${Gnome}')`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Gnome")
            .setColor("#4286f4")
            .addField("You have chosen Gnome", 'Use !class to see class menu')
         return message.channel.send({embed});
    }







//CLASSES
    if(cmd ===`${prefix}warlock`) {
        var Warlock = "Warlock"
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO classStats (id, class, xp, lvl, str, wis, stam, speech, hp) VALUES ('${message.author.username}', '${Warlock}', '${1}', '${1}', '${1}', '${10}', '${8}', '${7}', '${50}' )`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Warlock")
            .setColor("#4286f4")
            .addField("You have chosen Warlock", 'Good luck!')
            .setFooter('Use !quest1 to begin the first quest.')
         return message.channel.send({embed});
    }

    if(cmd ===`${prefix}warrior`) {
        var Warrior = "Warrior"
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO classStats (id, class, xp, lvl, str, wis, stam, speech, hp) VALUES ('${message.author.username}', '${Warrior}', '${1}', '${1}', '${12}', '${3}', '${7}', '${6}', '${55}' )`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Warrior")
            .setColor("#4286f4")
            .addField("You have chosen Warrior", 'Good luck!')
            .setFooter('Use !quest1 to begin the first quest.')
         return message.channel.send({embed});
    }
    if(cmd ===`${prefix}wizard`) {
        var Wizard = "Wizard"
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO classStats (id, class, xp, lvl, str, wis, stam, speech, hp) VALUES ('${message.author.username}', '${Wizard}', '${1}', '${1}', '${1}', '${12}', '${5}', '${10}', '${50}' )`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Wizard")
            .setColor("#4286f4")
            .addField("You have chosen Wizard", 'Good luck!')
            .setFooter('Use !quest1 to begin the first quest.')
         return message.channel.send({embed});
    }

    if(cmd ===`${prefix}paladin`) {
        var Paladin = "Paladin"
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
        if(rows.length < 1) {
            sql = `INSERT INTO classStats (id, class, xp, lvl, str, wis, stam, speech, hp) VALUES ('${message.author.username}', '${Paladin}', '${1}', '${1}', '${10}', '${7}', '${3}', '${8}', '${50}' )`;
        }
        con.query(sql, console.log);

        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Paladin")
            .setColor("#4286f4")
            .addField("You have chosen Paladin", 'Good luck!')
            .setFooter('Use !quest1 to begin the first quest.')
         return message.channel.send({embed});
    }


    //QUESTS

    if(cmd ===`${prefix}quest1`) {
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
            if (rows.length < 1) {
            message.reply('You must choose a race before starting a quest')
        }
        });
        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription('Quest: A Promise of Dragons')
            .setColor("#4286f4")
            .setURL(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setImage('https://i.imgur.com/iaBQC6F.jpg')
            .addField('TO ACCEPT USE:', "!playdice", true)
            .addField("Vistengard City", 'Year: 2391 Time: 6:45PM', true)
            .setFooter('To pull up a list of commands at any time use !help')
        return message.channel.send({embed}) , message.reply('Your latest adventures bring you to the bustling city of Vistengard, a marketplace hub of the western country and refuge for travelers and scoundrels alike. As the sun sets you find your way to Geralds Tavern & Inn, along with many of the establishments regulars. Once inside you are approached by a hooded traveler. "Hello friend, name is Salazar. Care for a game of Pirates Dice? You seem like a gambler to me! If you win, I will tell you the location of a dragon egg. If you lose, you must help me on a quest of mine. What do you say? "');

    }

    if(cmd ===`${prefix}playdice`) {
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if (err) throw err;
            if (rows.length < 1) {
            message.reply('You must choose a race before starting a quest')
        }
        });
        message.reply('You agree to play. Salazar pulls up a chair and grabs some dice from an inside pocket of his cloack. As he does, you spot a small scroll sticking out from the pocket. He hands you three dice and you both roll. You roll two 4s and a 1,')
    }

//ACTIONS



//ROLLS
    if(cmd ===`${prefix}roll6`) {
            var roll = Math.floor(Math.random() * 6) + 1;
            message.reply("You rolled a " + roll);
    }

    if(cmd ===`${prefix}roll4`) {
        var roll = Math.floor(Math.random() * 4) + 1;
        message.reply("You rolled a " + roll);
    }

    if(cmd ===`${prefix}roll8`) {
        var roll = Math.floor(Math.random() * 8) + 1;
        message.reply("You rolled a " + roll);
    }

    if(cmd ===`${prefix}roll10`) {
        var roll = Math.floor(Math.random() * 10) + 1;
        message.reply("You rolled a " + roll);
    }

    if(cmd ===`${prefix}roll12`) {
        var roll = Math.floor(Math.random() * 12) + 1;
        message.reply("You rolled a " + roll);
    }

    if(cmd ===`${prefix}roll20`) {
        var roll = Math.floor(Math.random() * 20) + 1;
        message.reply("You rolled a " + roll);
        if(roll >= 15) {
            message.reply('success!');

        }
        if(roll < 15) {
            message.reply('failure!');
        }
    }


//CHARACTER INFOS

    if(cmd ===`${prefix}inventory`) {
        con.query(`SELECT * FROM inventory WHERE id = '${message.author.username}'`, (err, rows) => {
            if(err) throw err;
            let one = rows[0].one;
            let two = rows[0].two;
            let three = rows[0].three;
            let four = rows[0].four;
            let five = rows[0].five;
            let six = rows[0].six;
            let seven = rows[0].seven;
            let eight = rows[0].eight;
            let nine = rows[0].nine;
            let ten = rows[0].ten;

            var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("Inventory")
            .setColor("#4286f4")
            .setURL(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .addField("Slot One", one, true)
            .addField('Slot Two', two, true)
            .addField('Slot Three', three, true)
            .addField('Slot Four', four, true)
            .addField('Slot Five', five, true)
            .addField('Slot Six', six, true)
            .addField('Slot Seven', seven, true)
            .addField('Slot Eight', eight, true)
            .addField('Slot Nine', nine, true)
            .addField('Slot Ten', ten, true)
         return message.channel.send({embed});


        })
    }

    if(cmd ===`${prefix}character`) {
        con.query(`SELECT * FROM race WHERE id = '${message.author.username}'`, (err, rows) => {
        if(err) throw err;
    let infor = rows[0].race;
        con.query(`SELECT * FROM classStats WHERE id = '${message.author.username}'`, (err, rows) => {
            if(err) throw err;
        let infoc = rows[0].class;
        let infos = rows[0].str;
        let infox = rows[0].xp;
        let infol = rows[0].lvl;
        let infow = rows[0].wis;
        let infost = rows[0].stam;
        let infosp = rows[0].speech;
        let infoh = rows[0].hp;

        var embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("character sheet")
            .setColor("#4286f4")
            .setURL(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .addField("Class", infoc, true)
            .addField('Race', infor, true)
            .addField('LEVEL', infol, true)
            .addField('XP', infox, true)
            .addField('Hp', infoh, true)
            .addField('Strength', infos, true)
            .addField('Wisdom', infow, true)
            .addField('Stamina', infost, true)
            .addField('Charisma', infosp, true)
         return message.channel.send({embed});
        });
    });
    }
});


client.login(botconfig.token);
