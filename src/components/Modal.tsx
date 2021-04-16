import React from 'react';

const Modal: React.FC<{changeStile(value: boolean): void; stile: boolean; firstName: string; lastName: string}> = (props) => {

return(

    <div className={`modal ${props.stile? 'show': 'hide'}`}>
    <div className="modal__dialog">
        <div className="modal__content">
            <div>
                <div className="modal__close" onClick={()=> props.changeStile(false)}>&times;</div>
                <div className="modal__title">Здравствуйте {props.lastName} {props.firstName}</div>
            </div>
        </div>
    </div>
</div>
)
}

export default Modal;