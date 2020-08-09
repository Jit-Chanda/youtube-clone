import React from 'react';
import './channelRow.styles.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const ChannelRow = ({image, channel, varified,subs, noOfVideos, description}) => {
    return(
        <div className='channelRow'>
            <Avatar className='channelRow__logo' alt={channel} src={image}/>
            <div className='channelRow__text'> 
                <h4>{channel} {varified && <CheckCircleOutlineOutlinedIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;