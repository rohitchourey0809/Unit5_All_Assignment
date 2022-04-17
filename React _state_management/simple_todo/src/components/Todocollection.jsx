export const Todocollection = ({ todo, handlestatus }) => {
    return (
        <div>
            {/* <div>id:{todo.id}</div> */}
            {todo.title} -{todo.status ? "Done" : "Not Done"}{" "}
            <button onClick={() => handlestatus(todo.id)}>Toggle</button>
        </div>
    );
};
