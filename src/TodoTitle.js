import './TodoTitle.css';

function TodoTitle( {total, completed} ){
    return (
    <h1 className='TodoTitle'>
        Has completado <span>{completed}</span> de <span>{total}</span> ToDos
    </h1>
    );
}

export { TodoTitle };