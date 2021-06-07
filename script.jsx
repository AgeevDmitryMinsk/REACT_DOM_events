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
    <>
        <div> <br /> </div>
        <div>событие onFocus:</div>
    <input
        onFocus={(e) => {
            console.log('Получен фокус на поле ввода');
        }}
        placeholder="onFocus выполнится при нажатии на это поле ввода."
    />
    </>
), document.querySelector('#root2'));


ReactDOM.render((
    <>
        <br />
        <div>событие onBlur:</div>
        <input
            onBlur={(e) => {
                console.log('Пропал фокус с поля ввода');
            }}
            placeholder="onBlur выполнится в случае изменения фокуса с этого поля ввода на любой другой элемент."
        />

    </>
), document.querySelector('#root3'));


ReactDOM.render((
    <>
        <br />
        <div>события currentTarget и relatedTarget:</div>
        <div
            tabIndex={1}
            onFocus={(e) => {
                if (e.currentTarget === e.target) {
                    console.log('фокус на родительском элементе установлен');
                } else {
                    console.log('фокус на дочернем элементе установлен', e.target);
                }
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    // Не срабатывает при перемещении фокуса между дочерними элементами
                    console.log('фокус находится внутри родительского элемента');
                }
            }}
            onBlur={(e) => {
                if (e.currentTarget === e.target) {
                    console.log('фокус на родительском элементе снят');
                } else {
                    console.log('фокус на дочернем элементе снят', e.target);
                }
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    // Не срабатывает при перемещении фокуса между дочерними элементами
                    console.log('фокус потерян изнутри родительского элемента');
                }
            }}
        >
            <input id="1"/>
            <input id="2"/>
        </div>
    </>), document.querySelector('#root4'));


