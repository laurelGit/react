import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
    return ( 
        // https://www.bolde.com/wp-content/uploads/2015/11/iStock_000060883230_Small-400x400.jpg
        <div className="storyReel">
            <Story
                image="https://www.bolde.com/wp-content/uploads/2015/11/iStock_000060883230_Small-400x400.jpg"
                profileSrc="https://www.bolde.com/wp-content/uploads/2017/03/iStock-513808604-400x400.jpg"
                title="sonia"
            />
            <Story
                image="https://uploads.scratch.mit.edu/users/avatars/22559970.png"
                profileSrc="https://cms.fauna-flora.org/wp-content/uploads/2017/10/CBD-8127-JHO-400x400.jpg"
                title="lionista"
            />
            <Story
                image="https://sa411.co.za/wp-content/uploads/2019/02/1550733516_866_Cindy-Makhathini-has-her-boooty-game-on-point"
                profileSrc="https://i2.wp.com/www.ghgossip.com/wp-content/uploads/2020/03/c6Zshs0__400x400.jpg"
                title="dogistata"
            />
            <Story
                image="https://images.squarespace-cdn.com/content/v1/55b140cee4b0f7770edcc039/1513013317531-IR5I7FRQ96UUZX9A14HI/ke17ZwdGBToddI8pDm48kGfiFqkITS6axXxhYYUCnlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx1B3uKuIxKkeNobmVrkfsvhi7vfNIYPwuNoe0YQqN5qRcQyCP0lZkCSDZ8KLElTzs/Julia-McCoy.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiawRhFTWNAZ9QoZx3TwEX5IRF6Rak9_7yvQ&usqp=CAU"
                title="beautyb"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQASHpkEdHNJZtTX3zJ8ARTBK_VqZNAwkpmamyjoMkvYNlvLtVI9nBtDCK3K0zl8IzdFVM&usqp=CAU"
                profileSrc="https://superherojacked.com/wp-content/uploads/2020/06/The-Luffy-Workout-400x400.jpg"
                title="Lufytaro"
            />
            {/* Story */}
        </div>
     );
}
 
export default StoryReel;