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
        <div>
            смотри логи в консоли
        </div>

        <button
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Поиграй со мной!
        </button>

    </>
), document.querySelector('#root'));


ReactDOM.render((
    <input
        onFocus={(e) => {
            console.log('Получен фокус на поле ввода');
        }}
        placeholder="onFocus выполнится при нажатии на это поле ввода."
    />

), document.querySelector('#root2'));


ReactDOM.render((
    <input
        onBlur={(e) => {
            console.log('Пропал фокус с поля ввода');
        }}
        placeholder="onBlur выполнится в случае изменения фокуса с этого поля ввода на любой другой элемент."
    />


), document.querySelector('#root3'));


