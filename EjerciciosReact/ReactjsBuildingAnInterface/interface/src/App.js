import { useState, useEffect, useCallback } from "react";
import { BiArchive } from "react-icons/bi";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
// import appointmentList from "./data.json";
import AppointmentInfo from "./components/AppointmentInfo";

// console.log(appointmentList);

function App() {

  let [appointmentList, setAppoinmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState('asc');


  const filteredAppointments = appointmentList.filter(
    item =>{
      return(
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
      ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {setAppoinmentList(data)})
  },[])

  useEffect(()=>{
    fetchData()
  },[fetchData])

  return (
    <>
      <div className="App container mx-auto mt-3 font-thin">
        <h1 className="text-5xl">
          <BiArchive className="inline-block text-red-400 align-top" />
          Your Appointments
        </h1>

        <AddAppointment 
          onSendAppointment={myAppointment => setAppoinmentList([...appointmentList, myAppointment])}
          lastId={appointmentList.reduce((max, item)=> Number(item.id)> max ? Number(item.id):max,0)}
        />
        <Search  query={query}
          onQueryChange={myQuery => setQuery(myQuery)}
          orderBy={orderBy}
          onOrderByChange={mySort => setOrderBy(mySort)}
          sortBy={sortBy}
          onSortByChange={mySort => setSortBy(mySort)}
        />

        <ul className="divide-y divide-gray-200">
          {filteredAppointments.map((appointment) => (
              <AppointmentInfo  
              key={appointment.id}
                appointment={appointment}
                onDeleteAppointment={
                  appointmentId => setAppoinmentList(appointmentList.filter(appointment=>
                   appointment.id !== appointmentId))
                }
              />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
