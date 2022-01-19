const { defaultXyz } = require('../index.js');
var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {


    var url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args}`;
    
    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(async function (response) {
        var data = response.data
        var link = data.message;
        const media = await MessageMedia.fromUrl(link);
        client.sendMessage(msg.from, media, {caption: "*©️ Elsa Wa-Bot*"});
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Error occured" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "trump",
    description: "Text to trump tweet image",
    command: "!tweet <text>",
    commandType: "plugin",
    isDependent: false,
    help: 'Must include text.\n\nExample: !trump How are you?',
    execute,
  };
