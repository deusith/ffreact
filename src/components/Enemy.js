import "../styles/Enemy.css"

function Enemy(props){
    return (
        <div className="Enemy">
        RAWR!!!
        <p>HP: {props.hp}</p>
        </div>
    );
}

export default Enemy