import React from 'react';
import './recomendedVideo.styles.css';
import VideoCard from './videoCrad.component';

const RecomendedVideo = () => {
    return(
        <div className='recomendedVideos'>
            <h2>Recommended</h2>
            <div className='recomendedVideos__videos'>
                <VideoCard 
                    title="Kudi Nu Nach Ne De || Cover by Papiya ||Angrezi Medium || Trending Song"
                    views="1,025 views"
                    image="https://i.pinimg.com/originals/d4/aa/a8/d4aaa8288b2d3ca2279be50f7573fc3b.jpg"
                    channel="April Duffer"
                    timeStamp="May 4, 2020"
                    channelImage="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <VideoCard 
                    title="Lazy Lamhe - Full Song | Thoda Pyaar Thoda Magic | Saif Ali Khan | Ameesha Patel | Anusha Mani"
                    views="1,025 views"
                    image="https://i.ytimg.com/vi/ICwQKOqOrK4/maxresdefault.jpg"
                    channel="Jit Chanda"
                    timeStamp="May 4, 2020"
                    channelImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                />
                <VideoCard 
                    title="Aao Naa | Aishwariya Rai | Vivek Oberoi | Sadhana Sargam | Udit Narayan | Kyun Ho Gaya Na Songs"
                    views="1,025 views"
                    image="https://i.pinimg.com/originals/69/cd/02/69cd02713e8923a90cb7152f00052039.jpg"
                    channel="Jhonty Rhoads"
                    timeStamp="May 4, 2020"
                    channelImage="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg"
                />
                <VideoCard 
                    title="Let's Build a TINDER Clone with REACT JS for Beginners"
                    views="1,025 views"
                    image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/96873911/original/90fa0eacb90910edda3d11e140b373ceb76c0588/design-a-viral-youtube-thumbnail.jpg"
                    channel="Dani Daniels"
                    timeStamp="May 4, 2020"
                    channelImage="https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg"
                />
                <VideoCard 
                    title="4 things I wish I knew when I started programming"
                    views="1,025 views"
                    image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/110956907/original/3698ac489c922cb7020ec7c6fae9cc34ee5c5b99/design-attractive-3-youtube-thumbnail-in-24-hours.jpg"
                    channel="Luis Figo"
                    timeStamp="May 4, 2020"
                    channelImage="https://s3p6a2s2.stackpathcdn.com/wp-content/uploads/2018/02/Achieve-a-Youthful-V-Shape-Face.jpg"
                />
                <VideoCard 
                    title="Python Fundamentals Full Course (ideal for beginners)"
                    views="1,025 views"
                    image="https://i.ytimg.com/vi/izfu0RYdWrY/maxresdefault.jpg"
                    channel="Davi Luis"
                    timeStamp="May 4, 2020"
                    channelImage="https://www.nivea.co.uk/-/media/local/gb/advice/nice-skin/anti-aging-using-wrinkle-creams-158/nx1903_nivea_face_cleansing_1139-screen-screen.jpg"
                />
            </div>
        </div>
    )
}

export default RecomendedVideo;