import Header from "./Header";
import ActionArea from "./ActionArea";
import DoubleLineSeperator from "./DoubleLineSeperator";
import { useState } from "react";

const GameBoard = () => {

    const [actionAreaState, setActionAreaState] = useState({
        isActive: true,
        chosenTarget: 1,
        chosenSet: 3,
        chosenItem: 3,
    });

    const stateSetter = (f, v) => setActionAreaState({
        ...actionAreaState,
        [f]: v,
    });

    return <div className="gameBoard">

        <Header />

        <DoubleLineSeperator />

        <ActionArea 
            actionAreaState={actionAreaState} 
            stateSetter={stateSetter}
        />
        
        <DoubleLineSeperator />

    </div>;
}

export default GameBoard;