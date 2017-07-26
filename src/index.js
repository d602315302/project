import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function tick() {
    const element = (
        <div className="wrap">
        <div className="cover"></div>
            <div className="content">
                <div></div>
                <h1> -p的含义!</h1>
                <p>"文件体积大小优化"</p>
            </div>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);



