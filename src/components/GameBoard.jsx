import Header from "./Header";
import ActionArea from "./ActionArea";
import DoubleLineSeperator from "./DoubleLineSeperator";
import ViewArea from "./ViewArea";

import engine from "../engine/literatureEnge";
import { useEffect, useState } from "react";
import '../styles/GameBoard.css'

const GameBoard = ({playerId}) => {
    useEffect(()=>{
        engine.init(playerId);
    }, [playerId]);

    const [actionAreaState, setActionAreaState] = useState({
        isActive: true,
        myTurn: playerId === "sita",
        chosenTarget: 1,
        chosenSet: 3,
        chosenItem: 3,
    });

    const [pieces, setPieces] = useState(playerId.length % 2 ===0 ? [
        [1, 3],
        [7, 4],
    ] : [
        [3, 5],
        [2, 1],
    ]);
    useEffect(()=>{
        engine.handoverStates({
            pieces, setPieces,
            activate: () => {
                setActionAreaState({
                    ...actionAreaState,
                    myTurn: true,
                })
            },
        });
    }, [actionAreaState, pieces]);

    const stateSetter = (f, v) => setActionAreaState({
        ...actionAreaState,
        [f]: v,
    });

    const onAsk = () => {
        if (!actionAreaState.myTurn)
            return;

        setActionAreaState({
            ...actionAreaState,
            myTurn: false,
        });

        engine.playMove({
            target: actionAreaState.chosenTarget,
            set: actionAreaState.chosenSet,
            item: actionAreaState.chosenItem,
        });
    };

    return <div className="gameBoard">

        <Header />

        <DoubleLineSeperator />

        <ActionArea 
            actionAreaState={actionAreaState} 
            stateSetter={stateSetter}
            onAsk={onAsk}
        />
        
        <DoubleLineSeperator />

        <ViewArea pieces={pieces}/>

    </div>;
}

export default GameBoard;