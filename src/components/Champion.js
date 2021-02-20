import "../styles/Champion.css"

function Champion(props){
    const {champData} = props;
    return (
        <div className="Champion">
            <div>{champData.shortName}</div>
            <div>{champData.hp}</div>
        </div>
    );
}

export default Champion