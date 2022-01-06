import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css"
import TOP from "./top.js"

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <>
      <div>
        {/* <TopComponent />
        <BottomComponent /> */}

      </div>
      <TOP></TOP>
      {/* <form >
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{ width: "50%" }}>

            <div className="div-spacing">
              <div>
                <label>Project Name:</label>
              </div>
              <div>
                
                <select name="Project" id="Project">
                <option value="Project1">Project1</option>
                <option value="Project2">Project2</option>
                <option value="Project3">Project3</option>
                <option value="Project4">Project4</option>
                <option value="Project5">Project5</option>
                <option value="Project6">Project6</option>
                <option value="Project7">Project7</option>
                <option value="Project8">Project8</option>
                <option value="Project9">Project9</option>
                <option value="Project10">Project10</option>
                </select>
              </div>
            </div>

            <div className="div-spacing">
              <div>
                <label>Description:</label>
              </div>
              <div>
                <input
                  type="text"
                  name="description"
                  value={inputs.description || ""}
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>

          <div style={{ width: "50%", float: 'right' }}>

            <div className="div-spacing">
              <div>
                <label>Github Repo Link:</label>
              </div>
              <div>
                <input
                  type="url"
                  name="repourl"
                  value={inputs.repourl || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="div-spacing">
              <div>
                <label>API Link:</label>
              </div>
              <div>
                <input
                  type="url"
                  name="repourl"
                  value={inputs.repourl || ""}
                  onChange={handleChange}
                />
              </div>
            </div>



          </div>
        </div>
      </form> */}
    </>
  );
  /*return (
    <form onSubmit={handleSubmit}>
      <div className="div-spacing">

      <label>Project Name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
       </label>
       <label>Github Repo Link:
        <input 
          type="url" 
          name="repourl" 
          value={inputs.repourl || ""} 
          onChange={handleChange}
        />
        </label>

      </div>
      <div className="div-spacing">
      <label>Description:
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <label>API Link:
        <input 
          type="url" 
          name="apiurl" 
          value={inputs.repourl || ""} 
          onChange={handleChange}
        />
        </label>


      </div>
     
      
       
        
        <label>UserStories:
        <input 
          type="text" 
          name="storylabel" 
          value={inputs.storylabel || ""} 
          onChange={handleChange}
        />
        </label>
        <pre></pre>
        <input 
          type="checkbox" 
          id="userstoryread" 
          name="userstoryread" 
          value="yes">
        
        </input>
        <label for="userstoryread"> Read user story from github repo</label><br></br>
        
        <input type="submit" />
    </form>
  )*/
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
