import React,{useState} from 'react'
import moment from 'moment';
const Userprofile = () => {
    let date = moment(new Date()).format('YYYY-MM-DD')

    // const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    // const navigate = useNavigate();
    // const { name, email, password,cpassword} = credentials
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
        
    //     if (password === cpassword) {
    //         const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
    //             method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, password })
    //         });
    //         // eslint-disable-next-line 
    //         const json = await response.json();
    //         if (json.success) {
    //             localStorage.setItem('token', json.authtoken)
    //             navigate('/');
    //             props.showAlert(" Account created successfully ", "success")
    //             setCredentials({ name: "", email: "", password: "", cpassword: "" })

    //         }
    //         else {
    //             props.showAlert("Sorry a user with this email already exists", "danger")
    //         }
    //     }
    //     else {
    //         props.showAlert("Confirm Password does not match", "danger")
    //     }
    // }
    // const onChange = (e) => {
    //   setCredentials({ ...credentials, [e.target.name]: e.target.value })
    // }
  return (
    <div className=" ui container mt-5">
      <h2 className="ui dividing header">User  Profile</h2>
      <form className=" ui large form  mb-0" >
        <div className="two fields ms-2">
          <div className="  field" >
              <label  htmlFor="fname">First name</label>
            <div className="ui  input">
              <input type="text" id="fname"  name="fname"  placeholder="First name"  />
            </div>
          </div>
          <div className="  field" >
              <label  htmlFor="lname">Last name</label>
            <div className="ui  input">
              <input type="text" id="lname"  name="lname"  placeholder="Last name" />
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
              <label className="" htmlFor="dob">Date of Birth</label>
            <div className="ui  input">
              <input type="date" id="dob" name="dob"  max={date}  placeholder="Date of birth" />
            </div>
          </div>
          <div className="  field" >
              <label className="" htmlFor="gender">Gender</label>
            <div className="ui  input">
              <select  id="gender" name="gender"  >
                <option selected>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
              </select>
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
              <label className="" htmlFor="phoneno">Phone No</label>
            <div className="ui labeled input">
                <div className="input-group-text">+91</div>
                <input type="tel"  name="phoneno"  className="form-control" pattern="[6789][0-9]{9}" title="Please enter valid phone number" id="phoneno" placeholder="Enter the Phone-no" />
            </div>
          </div>
          <div className="  field" >
              <label className="" htmlFor="email">Email</label>
            <div className="ui  input">
              <input type="email"  name="email" id="email" pattern="/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/" placeholder="email@.xyz" />
            </div>
          </div>
        </div>
        <div className=" wide field ms-3">
            <label  htmlFor="address">Residence Address</label>
          <div className="ui  input">
            <input type="text"  name="address"  id="address" placeholder="Residence address... " />
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
              <label  htmlFor="city">City</label>
            <div className="ui  input">
              <input type="text" name="city"  id="city" placeholder="City...."   />
            </div>
          </div>
          <div className="  field" >
              <label  htmlFor="pincode">Pin Code</label>
            <div className="ui  input">
              <input type="text" id="pincode" name="pincode"  pattern="[1-9]{1}[0-9]{5}" title="Six digit pin code" placeholder="Pin code....." />
            </div>
          </div>
        </div>
        <div className="two fields ms-2">
          <div className="  field" >
              <label  htmlFor="state">State</label>
            <div className="ui  input">
              <select name="state" id="state"   className="ui dropdown">
                <option selected>State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <div className="  field" >
              <label  htmlFor="country">Country</label>
            <div className="ui  input">
              <input type="text"  name="country" id="country"  placeholder="Country..." />
            </div>
          </div>
        </div>
        <div className="float-end ">
          <button type="submit" className="btn btn-primary btn-rounded"
            style={{ backgroundColor: "#0062CC" }}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default Userprofile