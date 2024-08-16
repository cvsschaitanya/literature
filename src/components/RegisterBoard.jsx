import { Button } from "react-bootstrap";
import '../styles/RegisterBoard.css'

export default function RegisterBoard({ setName, setIsRegistered }) {
    return <div className="registerBoard">
        <div className="container">
            <input placeholder="Your name" className="center" type="text"
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="container">
            <Button className="center" onClick={() => setIsRegistered(true)}>
                JOIN
            </Button>
        </div>
    </div>
}