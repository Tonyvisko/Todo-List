
const TodoNew = (props) => {
    console.log(">>> check point: ", props)
    const { addNewTodo } = props;
    // addNewTodo("Eric")
    return (
        <div className="todo-new">
            <input type="text"></input>
            <button>Add</button>
        </div>
    )
}

export default TodoNew;