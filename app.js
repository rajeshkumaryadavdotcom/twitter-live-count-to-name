const Twit = require('twit');
const axios = require('axios');
const config = require('./config');
const NumberToEmoji = require('number-to-emoji');
const T = new Twit(config);

let currentFollowerCount ;
const getFollowersCount = () => {
    const params = {
        screen_name: 'rky_com',
    }
    T.get('users/show', params, (err, data, response) => {
        if(err) {
            console.log(err);
        }
        else {
            //console.log(data);
            currentFollowerCount = data.follower_count;
            const displayName = data.name;
            const followerCount = +displayName.match(/\d/g).join();
            if (followerCount !== currentFollowerCount) {
                currentFollowerCount = NumberToEmoji.toEmoji(currentFollowerCount);
                updateDisplayName();
            }            
        }
    })
}


setInterval(getFollowersCount, 2000);

const updateDisplayName = () => {
    const params = {
        name: `Rajesh Kumar Yadav | ${currentFollowerCount} Followers`
    }
    T.post('account/update_profile', params, (err, data, response) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('display name updated');
        }
    })
}

console.log("server started");