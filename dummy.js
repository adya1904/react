import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Project Name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
       </label>
       <pre></pre>
       <label>Description:
        <input 
          type="text" 
          name="description" 
          value={inputs.description || ""} 
          onChange={handleChange}
        />
        </label>
        <pre></pre>
        <label>Github Repo Link:
        <input 
          type="url" 
          name="repourl" 
          value={inputs.repourl || ""} 
          onChange={handleChange}
        />
        </label>
        <pre></pre>
        <label>API Link:
        <input 
          type="url" 
          name="apiurl" 
          value={inputs.repourl || ""} 
          onChange={handleChange}
        />
        </label>
        <pre></pre>
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
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

/*
Click F12 and navigate to the "Console view"
to see the result when you submit the form.
*/
