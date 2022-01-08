import React from "react";
import axios from "axios";
import { useState } from "react";

export const YouTube = () => {
    const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
    const BAKI_PLAYLIST_ID = 'PLVs8KIyueUjUuezqLfT1w-37-dhP-AIAR'
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${BAKI_PLAYLIST_ID}&part=snippet&maxResults=3`

    let [videoId, setVideoId] = useState()

        axios.get(url)
        .then(response => {
            let jsonData = response.data
            setVideoId(
                videoId = jsonData.items[0].snippet.resourceId.videoId
            )
        })
        .catch(() => {
            console.log(Error)
        })
        
    return (
        <>
            <iframe 
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </>
    )

    
}