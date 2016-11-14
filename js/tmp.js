

Control.registerController("/", {


  track: function (paths, params, url, event) {

    var urlHash = Url.toHash(url);
    var tracknum = urlsToTrackNums["/track/" + paths[0] + urlHash.hash];

    if (tracknum) {
      var content = "_lyrics_" + tracknum;
      var thingToExpand = "lyrics_div_" + tracknum;
      var parentOfThingToExpand = "lyrics_row_" + tracknum;

      Expando.toggle(content, thingToExpand, parentOfThingToExpand);

    }

    else {
      document.location = url;
    }

  },



  video: function (paths, params, url, event) {

    if (!paths[0] || paths[0] != "t") {
      window.location = url;
      return;
    }

    var caption = null;

    for (var i = 0; i < TralbumData.trackinfo.length; i++) {
      if (TralbumData.trackinfo[i].video_id == paths[1]) {
        caption = TralbumData.trackinfo[i].video_caption;
        break;
      }
    }
    tracklistVideoPlayer.doVideo(paths[0], paths[1], caption, true, true);
  }


});


var SiteData = {
  supportEmail: "support@vidyavox.bandcamp.com"
};

var BandData = {
  id: 4161503944,
  name: "Vidya",
  fan_email: null,
  account_id: 2997289997,
  has_discounts: null,
  image_id: 5743291
};

var EmbedData = {
  tralbum_param: { name: "album", value: 3726123743 },
  album_title: "Covers + Mashups",
  linkback: "http://vidyavox.bandcamp.com" + "/album/covers-mashups",
  art_id: 3476096403,
  artist: "Vidya",
  swf_base_url: "https://bandcamp.com",
  embed_info: { "public_embeddable": "10 Jul 2015 05:19:09 GMT", "item_public": true, "no_track_preorder": false, "exclusive_embeddable": null }
};

var FanData = {
  logged_in: false,
  name: null,
  image_id: null
};

var TralbumData = {
  // For the curious:
  // http://bandcamp.com/help/audio_basics#steal
  // http://bandcamp.com/terms_of_use
  current: { "credits": "Music produced, mixed, and mastered by Shankar Tucker at Shrutibox Music", "title": "Covers + Mashups", "purchase_url": null, "auto_repriced": null, "download_desc_id": null, "selling_band_id": 4161503944, "featured_track_id": 475244870, "purchase_title": null, "set_price": 7.0, "download_pref": 2, "mod_date": "31 Oct 2015 17:41:35 GMT", "about": "This is a compilation of all the songs I have put online so far! Hope you enjoy!", "is_set_price": null, "art_id": 3476096403, "private": null, "new_desc_format": 1, "id": 3726123743, "publish_date": "10 Jul 2015 05:19:09 GMT", "minimum_price_nonzero": 12.0, "require_email": null, "killed": null, "type": "album", "upc": null, "release_date": "10 Jul 2015 00:00:00 GMT", "artist": null, "new_date": "10 Jul 2015 04:48:31 GMT", "audit": 0, "band_id": 4161503944, "require_email_0": null, "minimum_price": 12.0 },
  is_preorder: null,
  album_is_preorder: null,
  album_release_date: "10 Jul 2015 00:00:00 GMT",
  preorder_count: null,
  hasAudio: true,
  art_id: 3476096403,
  trackinfo: [{ "video_featured": null, "has_lyrics": false, "title": "Love Me Like You Do / Hosanna", "video_source_type": null, "duration": 214.737, "encodings_id": 2574813498, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 1, "encoding_error": null, "is_downloadable": true, "track_id": 475244870, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 475244870, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/love-me-like-you-do-hosanna", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=e117c6c044522ea2986fe598e531d3c6&id=475244870&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Lean On / Jind Mahi - ft. Ricky Jatt, Raginder Momi, Raashi Kulkarni", "video_source_type": null, "duration": 179.388, "encodings_id": 727136338, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 2, "encoding_error": null, "is_downloadable": true, "track_id": 3317247953, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 3317247953, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/lean-on-jind-mahi-ft-ricky-jatt-raginder-momi-raashi-kulkarni", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=7ef1dda1d44a42deb98ebc95cb291c00&id=3317247953&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Same Old Love / Mere Sapno Ki Rani", "video_source_type": null, "duration": 239.455, "encodings_id": 2533578045, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 3, "encoding_error": null, "is_downloadable": true, "track_id": 2581805091, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 2581805091, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/same-old-love-mere-sapno-ki-rani", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=ae071a3e2caf2250c488f869a6ade587&id=2581805091&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Dive Deep / Tujhme Rab Dikhta Hai", "video_source_type": null, "duration": 198.947, "encodings_id": 3377548529, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 4, "encoding_error": null, "is_downloadable": true, "track_id": 2425457110, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 2425457110, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/dive-deep-tujhme-rab-dikhta-hai", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=972e1d0c78143a60e3fd8d64e56e5a71&id=2425457110&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Yeh Duriya / Am I Wrong - ft. Rohan Kymal", "video_source_type": null, "duration": 179.377, "encodings_id": 2945231658, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 5, "encoding_error": null, "is_downloadable": true, "track_id": 3899126343, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 3899126343, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/yeh-duriya-am-i-wrong-ft-rohan-kymal", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=3827ac20614520af32a62ba12576efb7&id=3899126343&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Where Are Ü Now (Tamil Remix)", "video_source_type": null, "duration": 248.571, "encodings_id": 1950881878, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 6, "encoding_error": null, "is_downloadable": true, "track_id": 1182708485, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 1182708485, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/where-are-now-tamil-remix", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=69af455796fc73d6d1d2de55523c49c7&id=1182708485&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Prisoner / Ang Laga De", "video_source_type": null, "duration": 246.222, "encodings_id": 3864213957, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 7, "encoding_error": null, "is_downloadable": true, "track_id": 2756896219, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 2756896219, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/prisoner-ang-laga-de", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=6dc24b8365edae11468588bf8106b212&id=2756896219&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "I See Fire", "video_source_type": null, "duration": 224.211, "encodings_id": 2535055299, "alt_link": null, "video_id": null, "has_info": false, "video_source_id": null, "is_draft": false, "lyrics": null, "track_num": 8, "encoding_error": null, "is_downloadable": true, "track_id": 4084395390, "video_mobile_url": null, "streaming": 1, "album_preorder": false, "private": null, "encoding_pending": null, "has_free_download": null, "video_poster_url": null, "unreleased_track": false, "id": 4084395390, "play_count": 0, "free_album_download": false, "video_caption": null, "title_link": "/track/i-see-fire", "license_type": 1, "file": { "mp3-128": "//popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=945fc1950fc2f436af7978aec3330ec0&id=4084395390&stream=1&ts=1478736174.0" }, "is_capped": false, "sizeof_lyrics": 0 }, { "video_featured": null, "has_lyrics": false, "title": "Blank Space / Mental Manadhil", "video_source_type": null, "dura…