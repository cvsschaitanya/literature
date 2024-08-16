
import { Button } from "react-bootstrap";

const targets = ['left', 'right'];

const sets = [
    "red",
    "aqua",
    "purple",
    "green",
    "chocolate",
    "yellow",
    "grey",
    "deeppink",
];
const items = [1, 2, 3, 4, 5, 6];

export default function ActionArea({ actionAreaState, stateSetter, onAsk }) {
    return !actionAreaState.isActive ? (<div className="inactiveActionArea actionArea"></div>) : (
        <div className="actionArea activeActionArea">
            <div className="chooserPanel">
                {
                    targets.map((target, index) => (
                        <div key={`target-${index}`} className="chooserContainer targetChooserContainer">
                            <div onClick={() => stateSetter('chosenTarget', index)} className={
                                `${actionAreaState.chosenTarget === index ? "chosenTarget" : "unchosenTarget"} chooser`}
                            />
                        </div>
                    ))
                }
            </div>

            <div className="chooserPanel">
                {
                    sets.map((setColor, index) => (
                        <div key={`set-${index}`} className="chooserContainer setChooserContainer">
                            <div onClick={() => stateSetter('chosenSet', index)} style={{ backgroundColor: setColor }} className={
                                `${actionAreaState.chosenSet === index ? "chosenSet" : "unchosenSet"} chooser setChooser`}>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="chooserPanel">
                {
                    items.map((item, index) => (
                        <div key={`item-${index}`} className="chooserContainer itemChooserContainer">
                            <div onClick={() => stateSetter('chosenItem', index)} className={
                                `${actionAreaState.chosenItem === index ? "chosenItem" : "unchosenItem"} chooser itemChooser`}>
                                {item}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="chooserPanel">
                <div className="chooserContainer">
                    <Button>
                        Ask
                    </Button>
                </div>
            </div>
        </div>
    );
}