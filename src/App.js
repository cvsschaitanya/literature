import GameBoard from './components/GameBoard';
import RegisterBoard from './components/RegisterBoard';
import { useState } from 'react';

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [name, setName] = useState(null);
    return (
        !isRegistered
            ? <RegisterBoard setName={setName} setIsRegistered={setIsRegistered}/>
            : <GameBoard playerId={name}/>
    );
}

export default App;
