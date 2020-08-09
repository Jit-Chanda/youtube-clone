import React from 'react';
import './videoCard.styles.css';
import Avatar from '@material-ui/core/Avatar';

const VideoCard = ({image, title, channel, views, timeStamp, channelImage}) => {
    return(
       <div className='videoCard'>
           <img className='videoCard__thumbNail' src={image} alt=""/>
           <div className='videoCard__info'>
                <Avatar className='video_avatar' alt={channel} src={channelImage} />
                <div className='videoCard__text'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} . {timeStamp}</p>
                </div>
           </div>
       </div>
    )
}

export default VideoCard;