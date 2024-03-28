import { Container } from "./styles";

import { FiPlus, FiX, FiCheck } from "react-icons/fi"

export function AddTask({isNew = false, value, onClick, onCheck, status, ...rest}) {
    return(
        <Container isNew={isNew} status={status}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                className={isNew ? 'input-new' : 'input-old'}
                {...rest}
            />
            { isNew ? "" : <FiCheck size={24} className="check-btn" onClick={onCheck} /> }
            <button 
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                { isNew ? <FiPlus size={16}/> : <FiX size={16}/> }
            </button>
        </Container>
    )
}