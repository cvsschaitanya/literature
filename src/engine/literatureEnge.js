
import fb from '../firebase/fb';

const gameId = 'abc';

let myId = null;

let proxy = null;

const addConcedeTxn = (counterParty, set, item) => {
    const txn = {
        type: 'concede',
        move: {
            counterParty, set, item,
        },
        playerId: myId,
        gameId,
    };
    fb.addTransaction(txn);
}

const addTakeoverTxn = () => {
    const txn = {
        type: 'takeover',
        playerId: myId,
        gameId,
    };
    fb.addTransaction(txn);
}

const havePiece = (piece) => {
    console.log(proxy.pieces);

    for (let p of proxy.pieces) {
        if (p[0] === piece[0] && p[1] === piece[1])
            return true;
    }
    return false;
};

const handleAsk = ({ move, playerId }) => {
    if (move.target !== myId)
        return;

    if (havePiece([move.set, move.item])) {
        // concede
        addConcedeTxn(playerId, move.set, move.item);
    }
    else {
        // refuse
        addTakeoverTxn();
    }
};

const handleConcedeByMe = (move) => {
    proxy.setPieces(proxy.pieces.filter(p => (p[0] !== move.set || p[1] !== move.item)))
};

const handleConcedeToMe = (move) => {
    proxy.setPieces([
        ...proxy.pieces,
        [move.set, move.item],
    ]);

    proxy.activate();
};


const handleConcede = ({ move, playerId }) => {
    if (playerId === myId)
        handleConcedeByMe(move);

    if (move.counterParty === myId)
        handleConcedeToMe(move);
};

const handleTakeover = ({ move, playerId }) => {
    if (playerId === myId)
        proxy.activate();
}

const onUpdate = (txn) => {
    if (txn.type === 'ask')
        handleAsk(txn);
    else if (txn.type === 'concede')
        handleConcede(txn);
    else if (txn.type === 'takeover')
        handleTakeover(txn);
    else
        throw Error;
}

const decodeId = (m) => {
    return ['ram', 'sita'].filter(n => n !== myId)[0];
}

let listeningToTransactions = false;

const engine = {
    init: (id) => {
        myId = id;
        if(!listeningToTransactions) {
            fb.registerForTransactions(gameId, onUpdate);
            listeningToTransactions = true;
        }
    },
    handoverStates: (aProxy) => {
        proxy = {
            ...proxy,
            ...aProxy,
        };
    },
    playMove: (move) => {
        move.target = decodeId(move.target);
        const txn = {
            type: 'ask',
            move,
            playerId: myId,
            gameId,
        };
        fb.addTransaction(txn);
    },
};

export default engine;


