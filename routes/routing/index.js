const { Router } = require('express');
const db = require('quick.db');

module.exports.Router = class Routes extends Router {
	constructor() {
		super();

		this.get('/', function (req, res) {

      if(req.query.search) {
        return res.redirect(`https://www.hypeds.tv/s?q=${req.query.search}`)
      }

      let videoSize = db.get("HTV_VideoSize")
      
      let randomVideoId1 = GetRandomVideo(videoSize)
      let randomVideoId2 = GetRandomVideo(videoSize)
      let randomVideoId3 = GetRandomVideo(videoSize)
      let randomVideoId4 = GetRandomVideo(videoSize)
      let randomVideoId5 = GetRandomVideo(videoSize)
      let randomVideoId6 = GetRandomVideo(videoSize)
      let randomVideoId7 = GetRandomVideo(videoSize)
      let randomVideoId8 = GetRandomVideo(videoSize)
      let randomVideoId9 = GetRandomVideo(videoSize)
      let randomVideoId10 = GetRandomVideo(videoSize)
      let randomVideoId11 = GetRandomVideo(videoSize)
      let randomVideoId12 = GetRandomVideo(videoSize)
      
			return res.render('index.ejs', {
        title: "TV",
        videoTitle_1: db.get(`HTV_VideoTitle_${randomVideoId1}`),
        videoThumbnail_1: db.get(`HTV_VideoThumbnail_${randomVideoId1}`),
        videoID_1: randomVideoId1,
        videoChannelIMG_1: db.get(`HTV_VideoChannelIMG_${randomVideoId1}`),
        videoChannelHandle_1: db.get(`HTV_VideoChannelHandle_${randomVideoId1}`),
        videoViews_1: db.get(`HTV_VideoViews_${randomVideoId1}`),
        videoDuration_1: db.get(`HTV_VideoDuration_${randomVideoId1}`),
        videoTitle_2: db.get(`HTV_VideoTitle_${randomVideoId2}`),
        videoThumbnail_2: db.get(`HTV_VideoThumbnail_${randomVideoId2}`),
        videoID_2: randomVideoId2,
        videoChannelIMG_2: db.get(`HTV_VideoChannelIMG_${randomVideoId2}`),
        videoChannelHandle_2: db.get(`HTV_VideoChannelHandle_${randomVideoId2}`),
        videoViews_2: db.get(`HTV_VideoViews_${randomVideoId2}`),
        videoDuration_2: db.get(`HTV_VideoDuration_${randomVideoId2}`),
        videoTitle_3: db.get(`HTV_VideoTitle_${randomVideoId3}`),
        videoThumbnail_3: db.get(`HTV_VideoThumbnail_${randomVideoId3}`),
        videoID_3: randomVideoId3,
        videoChannelIMG_3: db.get(`HTV_VideoChannelIMG_${randomVideoId3}`),
        videoChannelHandle_3: db.get(`HTV_VideoChannelHandle_${randomVideoId3}`),
        videoViews_3: db.get(`HTV_VideoViews_${randomVideoId3}`),
        videoDuration_3: db.get(`HTV_VideoDuration_${randomVideoId3}`),
        videoTitle_4: db.get(`HTV_VideoTitle_${randomVideoId4}`),
        videoThumbnail_4: db.get(`HTV_VideoThumbnail_${randomVideoId4}`),
        videoID_4: randomVideoId4,
        videoChannelIMG_4: db.get(`HTV_VideoChannelIMG_${randomVideoId4}`),
        videoChannelHandle_4: db.get(`HTV_VideoChannelHandle_${randomVideoId4}`),
        videoViews_4: db.get(`HTV_VideoViews_${randomVideoId4}`),
        videoDuration_4: db.get(`HTV_VideoDuration_${randomVideoId4}`),
        videoTitle_5: db.get(`HTV_VideoTitle_${randomVideoId5}`),
        videoThumbnail_5: db.get(`HTV_VideoThumbnail_${randomVideoId5}`),
        videoID_5: randomVideoId5,
        videoChannelIMG_5: db.get(`HTV_VideoChannelIMG_${randomVideoId5}`),
        videoChannelHandle_5: db.get(`HTV_VideoChannelHandle_${randomVideoId5}`),
        videoViews_5: db.get(`HTV_VideoViews_${randomVideoId5}`),
        videoDuration_5: db.get(`HTV_VideoDuration_${randomVideoId5}`),
        videoTitle_6: db.get(`HTV_VideoTitle_${randomVideoId6}`),
        videoThumbnail_6: db.get(`HTV_VideoThumbnail_${randomVideoId6}`),
        videoID_6: randomVideoId6,
        videoChannelIMG_6: db.get(`HTV_VideoChannelIMG_${randomVideoId6}`),
        videoChannelHandle_6: db.get(`HTV_VideoChannelHandle_${randomVideoId6}`),
        videoViews_6: db.get(`HTV_VideoViews_${randomVideoId6}`),
        videoDuration_6: db.get(`HTV_VideoDuration_${randomVideoId6}`),
        videoTitle_7: db.get(`HTV_VideoTitle_${randomVideoId7}`),
        videoThumbnail_7: db.get(`HTV_VideoThumbnail_${randomVideoId7}`),
        videoID_7: randomVideoId7,
        videoChannelIMG_7: db.get(`HTV_VideoChannelIMG_${randomVideoId7}`),
        videoChannelHandle_7: db.get(`HTV_VideoChannelHandle_${randomVideoId7}`),
        videoViews_7: db.get(`HTV_VideoViews_${randomVideoId7}`),
        videoDuration_7: db.get(`HTV_VideoDuration_${randomVideoId7}`),
        videoTitle_8: db.get(`HTV_VideoTitle_${randomVideoId8}`),
        videoThumbnail_8: db.get(`HTV_VideoThumbnail_${randomVideoId8}`),
        videoID_8: randomVideoId8,
        videoChannelIMG_8: db.get(`HTV_VideoChannelIMG_${randomVideoId8}`),
        videoChannelHandle_8: db.get(`HTV_VideoChannelHandle_${randomVideoId8}`),
        videoViews_8: db.get(`HTV_VideoViews_${randomVideoId8}`),
        videoDuration_8: db.get(`HTV_VideoDuration_${randomVideoId8}`),
        videoTitle_9: db.get(`HTV_VideoTitle_${randomVideoId9}`),
        videoThumbnail_9: db.get(`HTV_VideoThumbnail_${randomVideoId9}`),
        videoID_9: randomVideoId9,
        videoChannelIMG_9: db.get(`HTV_VideoChannelIMG_${randomVideoId9}`),
        videoChannelHandle_9: db.get(`HTV_VideoChannelHandle_${randomVideoId9}`),
        videoViews_9: db.get(`HTV_VideoViews_${randomVideoId9}`),
        videoDuration_9: db.get(`HTV_VideoDuration_${randomVideoId9}`),
        videoTitle_10: db.get(`HTV_VideoTitle_${randomVideoId10}`),
        videoThumbnail_10: db.get(`HTV_VideoThumbnail_${randomVideoId10}`),
        videoID_10: randomVideoId10,
        videoChannelIMG_10: db.get(`HTV_VideoChannelIMG_${randomVideoId10}`),
        videoChannelHandle_10: db.get(`HTV_VideoChannelHandle_${randomVideoId10}`),
        videoViews_10: db.get(`HTV_VideoViews_${randomVideoId10}`),
        videoDuration_10: db.get(`HTV_VideoDuration_${randomVideoId10}`),
        videoTitle_11: db.get(`HTV_VideoTitle_${randomVideoId11}`),
        videoThumbnail_11: db.get(`HTV_VideoThumbnail_${randomVideoId11}`),
        videoID_11: randomVideoId11,
        videoChannelIMG_11: db.get(`HTV_VideoChannelIMG_${randomVideoId11}`),
        videoChannelHandle_11: db.get(`HTV_VideoChannelHandle_${randomVideoId11}`),
        videoViews_11: db.get(`HTV_VideoViews_${randomVideoId11}`),
        videoDuration_11: db.get(`HTV_VideoDuration_${randomVideoId11}`),
        videoTitle_12: db.get(`HTV_VideoTitle_${randomVideoId12}`),
        videoThumbnail_12: db.get(`HTV_VideoThumbnail_${randomVideoId12}`),
        videoID_12: randomVideoId12,
        videoChannelIMG_12: db.get(`HTV_VideoChannelIMG_${randomVideoId12}`),
        videoChannelHandle_12: db.get(`HTV_VideoChannelHandle_${randomVideoId12}`),
        videoViews_12: db.get(`HTV_VideoViews_${randomVideoId12}`),
        videoDuration_12: db.get(`HTV_VideoDuration_${randomVideoId12}`),
      })
		});
	}
};

module.exports.page = '/';

function GetRandomVideo(videoSize) {
  let postID = db.get(`HTV_post_definition_${Math.floor(Math.random() * videoSize)}`);
  
  return postID;
}