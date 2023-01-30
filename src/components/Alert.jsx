import { useEffect } from "react";

export const Alert = (props) => {
    const { name = "", closeAlert = Function.prototype } = props; //терминология. процедута {...}=props - деструктуризация

    useEffect(
        () => {
            const timerId = setTimeout(closeAlert, 1000);
            return () => {
                clearTimeout(timerId);
            };
        },
        // ниже способ принудительно выключить ворниг от eslint-а, т.к. не все ворниги правильные
        // eslint-disable-next-line
        [name]
    );

    return (
        <div id='toast-container'>
            <div className='toast'>{name} добавлен в корзину</div>
        </div>
    );
};
