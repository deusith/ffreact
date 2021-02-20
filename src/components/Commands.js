import "../styles/Commands.css"

function Commands(props){
    const {avaliableCommands, check, executeCommand} = props;
    const avaliableCommandsKeys = Object.keys(avaliableCommands);

    return (
        <div className="Commands">
            { avaliableCommandsKeys.map( key => {
                const name = avaliableCommands[key].name;
                const desc = avaliableCommands[key].desc;

                return <button onClick={()=> executeCommand(key, 0, 'player')} key={key} title={desc}>{name}</button>
            })}
            <div className="debug-panel">
                <button onClick={check}>Check State</button>
            </div>
        </div>
    );
}

export default Commands