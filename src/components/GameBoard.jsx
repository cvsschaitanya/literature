import Header from "./Header";

const GameBoard = () => {
    return <div className="gameBoard">
        <Header headerState={{
            isActive: true,
            chosen: 'left',
        }}/>
    </div>;
}

export default GameBoard;