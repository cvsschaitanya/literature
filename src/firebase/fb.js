// Import the functions you need from the SDKs you need
import app from './init';
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";

const db = getDatabase(app);

const evaluated = {

};

const fb = {
    addTransaction: (t) => {
        const tref = push(ref(db, `games/${t.gameId}/transactions/`));
        set(tref, t);
    },
    registerForTransactions: (gameId, onUpdate) => {
        const tref = ref(db, `games/${gameId}/transactions/`);
        onChildAdded(tref, (data) => {
            console.log("OnChildAdded called");
            
            // if (data.key in evaluated)
            //     return;

            // evaluated[data.key] = true;
            console.log(data.key);
            console.log(data.val());
            
            onUpdate(data.val());
        });
    }
};

export default fb;