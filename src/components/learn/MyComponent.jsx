// () => { }
//component = html + css + js

import './style.css';
const MyComponent = () => {
    return (
        <>
            <div> eric & hoidanit update </div> //tag
            <div className="child"
                style={{ borderRadius: "10px" }}
            >child</div>
        </>
    );
}

export default MyComponent;