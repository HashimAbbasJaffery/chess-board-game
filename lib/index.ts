import { Chess } from "../node_modules/chess.js/dist/esm/chess.js";

const chess: Chess = new Chess();


function onDragStart (source: any, piece: any, position: any, orientation: any) {
    // do not pick up pieces if the game is over
    if (chess.isGameOver()) return false
  
    // only pick up pieces for the side to move
    if ((chess.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (chess.turn() === 'b' && piece.search(/^w/) !== -1)) {
      return false
    }

  }

  function onDrop (source: any, target: any) {
    // see if the move is legal
    try {
        var move = chess.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
        })


        // illegal move
        if (move === null) return 'snapback'
    } catch(e) {

    }
}

function onSnapEnd () {
    board1.position(chess.fen())
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



// const startAutomaticGame = (): void => {
//     while (!chess.isGameOver()) {
//         const moves = chess.moves()
//         const move = moves[Math.floor(Math.random() * moves.length)]
//         const ChessMove: Moves = chess.move(move)
        
//         if(ChessMove === null) return; 
    
//         const ascii = chess.ascii();
//         console.log(ChessMove)
//         const color = ChessMove.color;
//         const piece = ChessMove.piece;
//         const from: string = ChessMove.from;
//         const to = ChessMove.to;
        
//         board1.move(`${from}-${to}`);
        

//         // console.log(chess.isCheckmate())
//         if(chess.isCheckmate()) {
//             if(chess.turn === "b") {
//                 console.log("White won!");
//             } else {
//                 console.log("black won");
//             }
//         }
//         if(chess.isStalemate() || chess.isDraw() || chess.isInsufficientMaterial()) {
//             console.log("draw!");
//         }
//         console.log(chess.turn())
        
//     }
// }
// start?.addEventListener("click", () => {
//     setInterval(() => {
//         startAutomaticGame()
//     }, 100)
// })


