import React from 'react';
import './head.scss';

const menu = [
    {
        name: '首页',
        path: '/main/home'
    },
    {
        name: '关于',
        path: '/main/about'
    }, {
        name: '文章',
        path: '/main/article'
    },
]

const Head = (props) => {
    const { history } = props;
    return (
        <header className="app-header">
            <div className="app-logo">
                <span className="app-logo"></span>
                <span className="app-name">my-app</span>
            </div>
            <ul className="link-box">
                {
                    menu.map((item, index) => {
                        let { name, path } = item;
                        let pathname = history.location.pathname;
                        let clName = pathname === path ? 'active' : '';
                        return (
                            <li className={"link-item " + clName} key={index} onClick={() => {
                                history.push(path);
                            }}>{name}</li>
                        )
                    })
                }
            </ul>
        </header>
    )
}

export default Head;