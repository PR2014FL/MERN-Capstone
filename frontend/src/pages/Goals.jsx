import NavBar from "../components/NavBar";

export default function Goals({ src, alt, dimensions, goals, setGoals }) {
  return (
    <>
      <div className="body">
        <NavBar
          src={src}
          alt={alt}
          title="Wellness Goal Chart"
          link1="/breaths"
          link1Name="Breathing Techniques"
          link2="/meditations"
          link2Name="Guided Meditation"
        />
        <div className="bodyContainer">
          <div className="leftSide">
            <h2>8 Dimensions of Wellness</h2>
            {dimensions.map((dim) => {
              const { dimension, description } = dim;
              const lowerDim = dimension.toLowerCase();
              return (
                <div className="dim1" id={lowerDim}>
                  <h3>{dimension}</h3>
                  <div className="hidden-div">{description}</div>
                </div>
              );
            })}
          </div>
          <div className="rightSide">
            <div className="upperGoalSection">
              <div className="first3rd">
              <h2><span>&#43;</span> New Goal</h2>
              <input className="goalInput" type="text" placeholder="Goal Title.."/><br></br>
              <p>Choose Dimension:</p><select name="Dimension" id="">
                        <option value="1" selected>Social</option>
                        <option value="2">Occupational</option>
                        <option value="3">Environmental</option>
                        <option value="4">Intellectual</option>
                        <option value="5">Spiritual</option>
                        <option value="6">Emotional</option>
                        <option value="7">Physical</option>
                        <option value="8">Financial</option>
                    </select>
              </div>
                    <textarea name="goalDetails" id="goalBody" cols="50" rows="8"
                    placeholder="What can you do right now to improve your overall satisfaction in this dimension?"
                    maxlength="185"></textarea>
                    <input class="submitBtn" type="Submit"></input>
            </div>
            {/* <div className="lowerGoalSection"> */}
              {goals.map((goal) => {
                const {title, dimension, body} = goal;
                const lowerDim = dimension.toLowerCase();
                return (
                  <div className="lowerGoalSection" id={lowerDim}>
                  <div className="goalNote">
                    <div className="noteTitle">
                      <p>{dimension} Dimension</p>
                      <h2>{title}</h2>
                      <div className="noteBody">
                        {body}
                      </div>
                      <div className="btnDiv">
                        <button className="noteBtn">Edit</button>
                        <button className="noteBtn">Delete</button>
                      </div>
                    </div>
                  </div>
                  </div>
                )
              })}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
