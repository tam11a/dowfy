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
        const url = req.query.xyz;
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
