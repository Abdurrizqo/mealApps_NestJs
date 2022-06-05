import React from 'react';
import ReactPlayer from 'react-player/lazy'

export default function VideoTag({vid}){
    function _onReady(e) {
        e.target.pauseVideo();
    }


    return (
        <div className="lg:h-[24rem] mx-auto p-5">
            <ReactPlayer url={vid} width='100%' height='100%'/>
        </div>
    )
}