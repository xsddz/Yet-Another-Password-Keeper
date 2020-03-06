import * as React from 'react';
import Camera from './camera';
import Desktop from './desktop';

export default class AppRightBar extends React.Component {
    render() {
        return (
            <div className="right-content">
                <div className="box text-center">
                    <div className="sep20"></div>
                    <Camera />
                    <div className="sep20"></div>
                    <Desktop />
                    <div className="sep20"></div>
                    <section>
                        <h1>Getting Started</h1>
                        <p>To begin, you'll need to install sass-loader:</p>
                        <pre><code>
                        npm install sass-loader node-sass webpack --save-dev
                        </code></pre>
                        <p>sass-loader requires you to install either Node Sass or Dart Sass on your own (more documentation can be found below). This allows you to control the versions of all your dependencies, and to choose which Sass implementation to use.</p>
                        <p>Chain the sass-loader with the css-loader and the style-loader to immediately apply all styles to the DOM or the mini-css-extract-plugin to extract it into a separate file.</p>
                        
                    </section>
                </div>
            </div>
        )
    }
}
