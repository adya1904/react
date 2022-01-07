function TOP() {
    return (
        <>
            <h4 style={{ textAlign: 'center' }}> Generate Testcase from User Stories - Retrive Project</h4>
            <div class="add-customers">
                <div class="add-left-col">
                    <div class="label-div">
                        <label for="Project Name">Project Name<span style={{ color: "#ff0000" }}>*</span></label>
                        <label for="Decription">Decription<span style={{ color: "#ff0000" }}>*</span></label>

                    </div>
                    <div class="input-div">
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
                        <input type="text" name="cust_no" id="cust_no" required />

                    </div>
                </div>
                <div class="add-right-col">
                    <div class="label-div add-label-2">
                        <label for="Github Repo Link">Github Repo Link<span style={{ color: "#ff0000" }}>*</span></label>
                        <label for="API URL">API URL<span style={{ color: "#ff0000" }}>*</span></label>
                    </div>
                    <div class="input-div">
                        <input type="text" name="invoice_no" id="invoice_no" required />
                        <input type="text" name="invoice_amount" id="invoice_amount" required />
                    </div>
                </div>
            </div>
            <div className="user-stories">
                <h4 style={{ textAlign: 'center' }}> User Stories</h4>
                <div className="wrapper">
                    <textarea id="w3review" name="" rows="6" cols="50">
                    </textarea>
                </div>

                <div class="add-left-col testleft">
                    <div class="label-div">
                        <label for="Decription">Testcase Description<span style={{ color: "#ff0000" }}>*</span></label>

                    </div>
                    <div class="input-div">
                        <input type="text" name="cust_no" id="cust_no" />

                    </div>
                    
                </div>
            
                        <input type="checkbox" id="testcase" name="testcase" value="abc" />
                        <label style={{color: 'rgb(136, 131, 131)'}} for="testcase">Cucumber test framework compatible</label><br />
            
                

            </div>




        </>
    );
}
export default TOP
