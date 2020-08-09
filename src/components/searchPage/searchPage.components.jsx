import React from 'react';
import './searchPage.styles.css';
import VideoRow from './videoRow.component';
import ChannelRow from './channelRow.component';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

const SearchPage = () => {
    return(
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image="https://i.pinimg.com/originals/0a/0a/00/0a0a003e3f2973b1aafd98e327765cd1.jpg"
                channel="Jit's Channel"
                varified
                subs="999k"
                noOfVideos={123}
                description="Just Visit and you will be amazed"
            />
            <hr/>
            <VideoRow 
                views="1.5M"
                subs="126K"
                description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum "
                timestamp="58 secs ago"
                channel="Just Do it"
                title="Let's build a small Youtube"
                image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/110956907/original/3698ac489c922cb7020ec7c6fae9cc34ee5c5b99/design-attractive-3-youtube-thumbnail-in-24-hours.jpg"
            />
        </div>
    )
}

export default SearchPage;