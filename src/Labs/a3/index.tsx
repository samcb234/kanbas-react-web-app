import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import Add from "./Add";
import PathParameters from "./routing/PathParameters";
import Highlight from "./Highlight";

function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <ConditionalOutput/>
        <Classes/>
        <Styles/>
        <JavaScript/>
        <PathParameters/>
        <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4}/>
      </div>
    );
  }
  export default Assignment3;