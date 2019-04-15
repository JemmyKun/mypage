import React, { Component } from 'react';
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.dp = null;
    }

    componentDidMount() {
        let options = {
            container: document.getElementById('player'),
            autoplay: false,
            theme: '#FADFA3',
            loop: true,
            lang: 'zh-cn',
            screenshot: true,
            hotkey: true,
            preload: 'auto',
            logo: 'logo.png',
            volume: 0.7,
            mutex: true,
            video: {
                url: '',
                pic: '',
                thumbnails: 'thumbnails.jpg',
                type: 'auto'
            },
            subtitle: {
                url: 'dplayer.vtt',
                type: 'webvtt',
                fontSize: '25px',
                bottom: '10%',
                color: '#b7daff'
            },
            danmaku: {
                id: '9E2E3368B56CDBB4',
                api: 'https://api.prprpr.me/dplayer/',
                token: 'tokendemo',
                maximum: 1000,
                addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'],
                user: 'DIYgod',
                bottom: '15%',
                unlimited: true
            },
            contextmenu: [
                {
                    text: 'custom1',
                    link: 'https://github.com/DIYgod/DPlayer'
                },
                {
                    text: 'custom2',
                    click: (player) => {
                        console.log(player);
                    }
                }
            ],
            highlight: [
                {
                    time: 20,
                    text: '这是第 20 秒'
                },
                {
                    time: 120,
                    text: '这是 2 分钟'
                }
            ]
        }
        this.dp = new DPlayer(options);
    }

    render() {
        const style = {
            width: 600,
            height: 400,
            margin: '0 auto'
        }
        return (
            <div className="content-container">
                <div id="player" style={style}></div>
            </div>
        )
    }
}


export default About;