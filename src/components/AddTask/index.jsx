import { Container } from "./styles";

import { FiPlus, FiX, FiCheck } from "react-icons/fi"

export function AddTask({isNew = false, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                className={isNew ? 'input-new' : 'input-old'}
                {...rest}
            />
            { isNew ? "" : <FiCheck size={24} className="check-btn" /> }
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