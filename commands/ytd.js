 /*
  =====================================================
  ÂŠī¸ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
function splitStr(str, separator) {
    var string = str.split(separator);
    return string;
}
const { defaultXyz } = require('../index.js');
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {



    var str = `${args}`;

    var separator = ".be/";

    var code = splitStr(str, separator);

    var url = code[1];
    console.log(url);

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
        params: { id: url },
        headers: {
            'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com',
            'x-rapidapi-key': defaultXyz.xyz
        }
    };

    axios.request(options).then(async function (response) {
        var data = response.data;

        var title = data.title;
        var thumb = data.thumb;
        var length = data.length;
        var channel = data.author;
        var views = data.view_count;
        //
        var list = data.link;
        //
        var low = list[17];
        var low_name = low[3];
        var low_size = low[1];
        var low_url = low[0];

        var medium = list[18];
        var medium_name = medium[3];
        var medium_size = medium[1];
        var medium_url = medium[0];


        var message = `*â¨ Title : ${title}*\n*âŗ Length :* ${length}\n*đ Channel :* ${channel}\n*đ Views :* ${views}\n\n*đģ Low : ${low_name}*\n_đ size :_ ${low_size}\n_đĨ Download :_ ${low_url}\n\n*đŽ Medium :* ${medium_name}\n_đ Size :_ ${medium_size}\n_đĨ Download :_ ${medium_url}\n\n*ÂŠ Elsa Wa-Bot*`;
        const media = await MessageMedia.fromUrl(thumb);
        client.sendMessage(msg.from, media, {caption: message});
        
    }).catch(function (error) {
        console.error(error);
    });

}

module.exports = {
    name: "ytd",
    description: "To download YouTube videos.",
    command: "!ytd",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
