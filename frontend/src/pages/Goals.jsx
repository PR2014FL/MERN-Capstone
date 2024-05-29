import NavBar from "../components/NavBar";
import axios from "axios";

export default function Goals({
  src,
  alt,
  dimensions,
  goals,
  setGoals,
  createForm,
  setCreateForm,
  updateForm,
  setUpdateForm,
}) {
  const createGoal = async (event) => {
    event.preventDefault();
    //1. create goal
    const res = await axios.post("http://localhost:3000/goals", createForm);
    console.log(res);
    // Axios Req -> POST (formData => {state})
    setGoals(() => [...goals, res.data.goals]);
    // This should add the new goal to the rest of existing goals in db.
    setCreateForm({
      title: "",
      dimension: "Social",
      body: "",
    });
    //this clears the form.
  };

  const updateCreateFormField = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    //making sure it's working by console logging inputs
    setCreateForm(() => ({
      ...createForm,
      [name]: value,
    }));
  };
  //----------------------------------[CREATE]

  //----------------------------------[UPDATE]
  const deleteGoal = (_id) => {
    //!.find Goal
    const res = axios.delete(`http://localhost:3000/${_id}`);
    //2. Update
    const newGoals = [...goals].filter((goal) => {
      return goal._id !== _id;
    });
    setGoals(newGoals);
  };
  //----------------------------------[DELETE]
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
              const { dimension, description, _id } = dim;
              const lowerDim = dimension.toLowerCase();
              return (
                <div key={_id} className="dim1" id={lowerDim}>
                  <h3>{dimension}</h3>
                  <div className="hidden-div">{description}</div>
                </div>
              );
            })}
          </div>
          <div className="rightSide">
            <form onSubmit={createGoal}>
              <div className="upperGoalSection">
                <div className="first3rd">
                  <h2>
                    <span>&#43;</span> New Goal
                  </h2>
                  <input
                    className="goalInput"
                    type="text"
                    name="title"
                    value={createForm.title}
                    placeholder="Goal Title.."
                    onChange={updateCreateFormField}
                  />
                  <br></br>
                  <p>Choose Dimension:</p>
                  <select name="dimension" onChange={updateCreateFormField}>
                    <option value="Social">Social</option>
                    <option value="Occupational">Occupational</option>
                    <option value="Environmental">Environmental</option>
                    <option value="Intellectual">Intellectual</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Emotional">Emotional</option>
                    <option value="Physical">Physical</option>
                    <option value="Financial">Financial</option>
                  </select>
                </div>
                <div className="textAndSubmit">
                  <textarea
                    name="body"
                    value={createForm.body}
                    onChange={updateCreateFormField}
                    id="goalBody"
                    cols="50"
                    rows="8"
                    placeholder="What can you do right now to improve your overall satisfaction in this dimension?"
                    maxLength="185"
                  ></textarea>
                  <input className="submitBtn" type="Submit"></input>
                </div>
              </div>
            </form>
            {goals.map((goal) => {
              // console.log(goal);
              if (goal) {
                const { title, dimension, body } = goal;
                const lowerDim = dimension.toLowerCase();
                return (
                  <div className="lowerGoalSection" id={lowerDim}>
                    <div className="goalNote">
                      <div className="noteTitle">
                        <p>{dimension} Dimension</p>
                        <h2>{title}</h2>
                      </div>
                      <div className="noteBody">{body}</div>
                      <div className="btnDiv">
                        <button className="noteBtn">Edit</button>
                        <button className="noteBtn" onClick={deleteGoal(goal)}>Delete</button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return <div>Loading...</div>;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
