import React, { useState } from "react";
import "./vote-block.css";
import { formatVotes } from "../../helpers/utils";

function VoteBlock(votes) {
    const [voteCount, setVoteCount] = useState(votes.votes);

    function voteUp() {
        const newCount = voteCount + 1;
        setVoteCount(newCount);
    }

    function voteDown() {
        const newCount = voteCount - 1;
        setVoteCount(newCount);
    }

    return (
        <div className="vote-block">
            <svg
                className="vote upvote"
                onClick={voteUp}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 310.6c-12.5 12.5-32.75 12.5-45.25 0L256 221.3L166.6 310.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l112-112C239.6 147.1 247.8 144 256 144s16.38 3.125 22.62 9.375l112 112C403.1 277.9 403.1 298.1 390.6 310.6z" />
            </svg>

            <p className="vote-count">{formatVotes(voteCount)}</p>

            <svg
                className="vote downvote"
                onClick={voteDown}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z" />
            </svg>
        </div>
    );
}

export default VoteBlock;
