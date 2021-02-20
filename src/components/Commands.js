import "../styles/Commands.css"

function Commands(props){
    return (
        <div className="Commands">
            <button onClick={() => props.action('weak')}>Weak</button>
            <button onClick={() => props.action('strong')}>Strong</button>
            <button onClick={() => props.action('heal')}>Heal</button>

            <div className="debug-panel">
                <button onClick={props.check}>Check State</button>
            </div>
        </div>
    );
}

export default Commands