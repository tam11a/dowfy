import ytdl from "ytdl-core";

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
      case "GET": {
        return get(req, res);
      }
  
      case "POST": {
        return post(req, res);
      }
    }
  }


const get = async (req, res) => {
    try {
        const url = req.query.q;
        const videoID = ytdl.getVideoID(url);
        const info = await ytdl.getInfo(videoID);
    return res.json({
        message: {
            info: info,
            audio: ytdl.filterFormats(info.formats, 'audioonly'),
            video: ytdl.filterFormats(info.formats, 'videoonly'),
        },
        success: true,
        }); 
    } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}


const post = async (req, res) => {
    try {
        const url = req.body.url;
        console.log(url);
        res.setHeader('Content-Disposition', `attachment; filename="audio.mp3"`);
        /*ytdl(URL, {
            format: 'mp3'
            }).pipe(res);*/
        res.json({
            url: url
        })
    } catch (error) {
        // return the error
        return res.json({
          message: new Error(error).message,
          success: false,
        });
      }
}