import { Chess } from "../node_modules/chess.js/dist/esm/chess.js";
const chess = new Chess();
function onDragStart(source, piece, position, orientation) {
    if (chess.isGameOver())
        return false;
    if ((chess.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (chess.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }
}
function onDrop(source, target) {
    try {
        var move = chess.move({
            from: source,
            to: target,
            promotion: 'q'
        });
        if (move === null)
            return 'snapback';
    }
    catch (e) {
    }
}
function onSnapEnd() {
    board1.position(chess.fen());
}
var board1 = new Chessboard("board1", {
    draggable: true,
    dropOffBoard: 'trash',
    position: "start",
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
});
board1.start();
//# sourceMappingURL=index.js.map