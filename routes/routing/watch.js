const { Router } = require('express');
const db = require('quick.db');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/watch', function (req, res) {
      let videoSize = db.get("HTV_VideoSize")
      let videoID = req.query.videoID

      let statement = "Seguir"
      
      if(!req.query.videoID) videoID = GetRandomVideo(videoSize);

      if(req.query.search) {
        return res.redirect(`https://www.hypeds.tv/s?q=${req.query.search}`)
      }
      
			return res.render('watch.ejs', {
        title: db.get(`HTV_VideoTitle_${videoID}`),
        videoTitle: db.get(`HTV_VideoTitle_${videoID}`),
        videoThumbnail: db.get(`HTV_VideoThumbnail_${videoID}`),
        videoContent: db.get(`HTV_VideoContent_${videoID}`),
        videoID: videoID,
        videoChannelIMG: db.get(`HTV_VideoChannelIMG_${videoID}`),
        videoChannelID: db.get(`HTV_VideoChannelID_${videoID}`),
        videoChannelHandle: db.get(`HTV_VideoChannelHandle_${videoID}`),
        videoChannelFollowers: db.get(`HTV_VideoChannelFollowers_${videoID}`),
        videoViews: db.get(`HTV_VideoViews_${videoID}`),
        videoDate: db.get(`HTV_VideoDate_${videoID}`),
        videoDescription: db.get(`HTV_VideoDescription_${videoID}`),
        videoDuration: db.get(`HTV_VideoDuration_${videoID}`),
        followStatement: statement,
      })
		});
	}
};

module.exports.page = '/';

function GetRandomVideo(videoSize) {
  let postID = db.get(`HTV_post_definition_${Math.floor(Math.random() * videoSize)}`);
  
  return postID;
}