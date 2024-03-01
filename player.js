let player = function(name, type) {
    let score = 0;
    let addPoint = () => score++;

    return { score, type, name, addPoint };
}
export default player;