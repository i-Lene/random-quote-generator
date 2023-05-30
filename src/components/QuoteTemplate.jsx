import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function QuoteTemplate(props) {

    const tweetText = encodeURIComponent(props.content);

    return (
        <div id="quote-box">
            <div className="quote-text">
                <span id="text">{props.content}</span>
            </div>
            <div className="quote-author">
                <span id="author"> - {props.author}</span>
            </div>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${tweetText}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <button id="new-quote" onClick={props.newQuote} >New Quote</button>
        </div>
    )
}