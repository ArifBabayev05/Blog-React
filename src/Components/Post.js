import React from 'react'

const Post = () => {
    return (
        <div className='post'>
            <div className='image'>
                <img src='https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/2023-Reddit-AMA/reddit_recap_2023_20230104_homepage-hero_568x408.ashx' alt='ImageValue' />
            </div>
            <div className='texts'>
                <h2>Climate change, AI, and more from my latest AMA</h2>
                <p className="info">
                    <a href="/#" className='author'>Bill Gates</a>
                    <time>2023-01-23 16:43</time>
                </p>
                <p className='summary'>This week I did my 11th Ask Me Anything on Reddit. I love the AMA format—its unfiltered approach allows me to answer smart questions on a range of topics in real time. This year Redditors asked about everything from climate change and the rising cost of living to veganism to my views on Scotland.</p>
            </div>
        </div>
    )
}

export default Post