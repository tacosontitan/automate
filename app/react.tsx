import * as React from 'react';
import * as ReactDOM from 'react-dom';

const message = "NEXT LEVEL SOURCE CONTROL MANAGEMENT";
const Loader = () => {
    let messageElements = [];
    for (let i = 0; i < message.length; i++) {
        let character = message.charAt(i);
        messageElements.push(<span key={character + i}>{character}</span>)
    }

    return <div>
        <h1 className="text-corn">AUTOMATE</h1>
        <h3 className="span loader-message">{messageElements}</h3>
        <i id="loading-message" className="loading-message">Loading <span id="loading-task">configurations</span>, please wait...</i>
    </div>;
}
ReactDOM.render(<Loader />, document.getElementById('loader'));