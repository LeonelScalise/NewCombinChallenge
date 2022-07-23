import '../App.css';
import { Inputs } from './inputs';
import { useState, useEffect } from 'react';
import axios from 'axios';

export function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  }

  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/members").then(res => setMembers(res.data))
  }, []);

  let arraySSN = []

  for (let i = 0; i < members.length; i++) { // Carga de Array de SSN ya en el server
    if (!arraySSN.includes(members[i]["ssn"])) {
      arraySSN.push(members[i]["ssn"])
    }
  }

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [addr, setAddr] = useState("");
  const [ssn, setSSN] = useState("");
  const [msjError, setError] = useState(null);

  function handleChange(setValue) {
    return (event) => {
      setError(null);
      setValue(event.target.value);

    };
  }

  const postReq = () => {
    if (!arraySSN.includes(ssn)) {
      axios.post("http://localhost:8081/api/members", {

        firstName: fName.trim(),
        lastName: lName.trim(),
        address: addr.trim(),
        ssn: ssn,

      });
    }
    else {
      console.log("Error: el SSN no se puede repetir")
    }
  }

  let botonHabilitado = false

  const validSSN = /^\d{3}-\d{2}-\d{4}$/

  if (fName.trim().length > 1 && lName.trim().length > 1 && addr.trim().length > 1 && validSSN.test(ssn) === true) {
    botonHabilitado = true
  }

  return (
    <div className="flex bg-red-200 justify-center items-center h-screen w-screen p-20">
      <div className='flex flex-row gap-10 w-full h-3/4 border-2 border-black justify-center items-center bg-red-500 p-10'>
        <form className='w-full h-full border-2 bg-white p-6'>

          <Inputs placeholder='First Name' onChange={handleChange(setFName)} />
          <Inputs placeholder='Last Name' onChange={handleChange(setLName)} />
          <Inputs placeholder='Address' onChange={handleChange(setAddr)} />
          <Inputs placeholder='SSN' onChange={handleChange(setSSN)} />

          <div className='flex items-center justify-around mt-2 w-full h-20'>
            <button type="submit" onClick={() => handleSubmit()} className='h-14 w-14 border-2 border-black rounded-full'>
              Reset
            </button>
            <button type="sumbit" disabled={(!botonHabilitado)} onClick={() => { postReq(); handleSubmit() }} className='h-14 w-14 border-2 border-black rounded-full'>
              Save
            </button>
          </div>
        </form>
        <div className='w-full h-full border-2 bg-white'>
          <table className='w-full'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>SSN</th>
              </tr>
            </thead>
            <tbody>
              {members &&
                members.map((miembros, i) => {
                  return (
                    <tr key={i}>
                      <td>{miembros.firstName}</td>
                      <td>{miembros.lastName}</td>
                      <td>{miembros.address}</td>
                      <td>{miembros.ssn}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

