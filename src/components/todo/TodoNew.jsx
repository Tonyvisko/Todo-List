import { useState } from "react";

const TodoNew = (props) => {

    //useState hook (getter/setter)
    // const valueInput = "Eric";
    const [valueInput, setValueInput] = useState("")

    const { addNewTodo } = props;

    // addNewTodo("Eric") //fire
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("");

    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}// muon thuc thi fn thi boc no vao mot cai arrow fn () => ..
                value={valueInput}
            ></input>
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text input is ={valueInput}
            </div>
        </div>
    )
}

export default TodoNew;