export function formatVotes(votes) {
    if (votes === 0) return "Vote";
    if (votes >= 1000) return `${(votes / 1000).toFixed(1)}k`;
    if (votes >= 1000000) return `${(votes / 1000000).toFixed(1)}m`;
    return votes;
}
