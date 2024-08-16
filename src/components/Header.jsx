import Dropdown from 'react-bootstrap/Dropdown';

const Header = ({ headerState }) => {
    if (!headerState.isActive)
        return <div className="inactiveHeader header"></div>

    return <div className="header activeHeader">
            <div className="targetChooserPanel">
                <div className="targetChooserContainer">
                    <div className={
                        `${headerState.chosen === 'left' ? "chosenTarget" : "unchosenTarget"} 
                            leftTargetChooser targetChooser`}>
                    </div>
                </div>
                <div className="targetChooserContainer">
                    <div className={
                        `${headerState.chosen === 'right' ? "chosenTarget" : "unchosenTarget"} 
                            rightTargetChooser targetChooser`}>
                    </div>
                </div>
            </div>
            
    </div>;
}

export default Header;