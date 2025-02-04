
const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const { addNewTodo } = props;
    // addNewTodo("Eric") //fire
    const handleClick = () => {
        alert("click me")
    }
    const handleOnChange = (name) => {
        console.log(">>>handleOnChange", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}// muon thuc thi fn thi boc no vao mot cai arrow fn () => ..
            ></input>
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;