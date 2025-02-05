
const TodoData = (props) => {
    //props là một object {}
    // {
    //     name: "Eric",
    //     age: 25,
    //     data: {}
    // }
    //C1:
    const { todoList } = props;
    //C2:
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;
    console.log(">>> check props: ", todoList)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> check map: ", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button style={{ cursor: "pointer" }}>Delete</button>
                    </div>)
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;