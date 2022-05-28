import ytdl from "ytdl-core";

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return get(req, res);
    }

    // case "POST": {
    //   return post(req, res);
    // }
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
        audio: ytdl.filterFormats(info.formats, "audioonly"),
        video: ytdl.filterFormats(info.formats, "videoandaudio"),
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
};
