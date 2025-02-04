import { useState } from "react";

const TodoNew = (props) => {

    //useState hook (getter/setter)
    // const valueInput = "Eric";
    const [valueInput, setValueInput] = useState("Eric")

    const { addNewTodo } = props;

    // addNewTodo("Eric") //fire
    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}// muon thuc thi fn thi boc no vao mot cai arrow fn () => ..
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