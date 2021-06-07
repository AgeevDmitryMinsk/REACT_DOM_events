function handleClick() {
    console.log('Не дави на меня! - событие onClick');
}

function handleMouseEnter() {
    console.log('Ты мне солнце заслонил! - событие onMouseEnter');
}

function handleMouseLeave() {
    console.log('Ну ты чего, нормально же общались! - событие onMouseLeave');
}

ReactDOM.render((
    <>
    <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        Поиграй со мной!
    </button>
    <div>
        смотри логи в консоли
    </div>
    </>
), document.querySelector('#root'));