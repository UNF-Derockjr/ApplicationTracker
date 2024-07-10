import Popup from 'reactjs-popup';
import { SlArrowRight } from "react-icons/sl";
import { MdClose } from "react-icons/md";
import { useState } from 'react';



function ApplicationTracker() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('http://localhost:9000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();
      console.log(result); // handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
    }
    addApplication(formData);
  };
  const addApplication = (data) => {
    const list = document.getElementById("list");
    var newP;
    var newC;
    var newS;
    var newDA;
    console.log(data);
    for (const [key, value] of data) {
      switch (key) {
        case "position":
          newP = value;
          break;
        case "company":
          newC = value;
          break;
        case "status":
          newS = value;
          break;
        case "date_applied":
          newDA = value;
          console.log(value);
          break;

        default:
          break;
      }
    }
    const date = new Date();
    newDA = new Date(newDA);
    console.log(date);
    var daysAgo = parseInt((date - newDA) / (1000 * 60 * 60 * 24), 10);
    var newApplication = `<li class='bg-slate-400 w-60 h-60 rounded-3xl p-3'>
          <div class='h-3/5'>
            <p class='text-3xl'>${newP}</p>
            <p class='text-xl'>${newC}</p>
          </div>
          <div class='h-2/5 flex relative flex-col justify-end text-xl'>
            <p>${newS}</p>
            <p>${daysAgo} days ago</p>
            <SlArrowRight class='absolute top-12 right-1' />
          </div>
        </li>`;
    list.innerHTML += (newApplication);
  };
  return (
    <div className="bg-slate-800 h-screen w-screen flex flex-col items-center font-lexend">
      <div className='mt-10 w-1/2 flex justify-evenly'>
        <input className='w-96 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md'></input>
        <NewEntry func={handleSubmit} />
      </div>
      <ul id="list" class="grid grid-cols-2 gap-4 mt-10 overflow-auto">
        
      </ul>
    </div>
    // <form className='bg-slate-800 h-screen w-screen text-white flex items-center justify-center' onSubmit={handleSubmit}>
    //   <label name='' >Name: </label>
    //   <input className='bg-slate-500 rounded-xl ml-5' name='fname'></input>
    //   <input className='bg-slate-500 rounded-xl ml-5' name='lname'></input>
    //   <button type="submit" className='bg-slate-500 rounded-xl ml-5 w-20'>Submit</button>
    // </form>
  );
}

const NewEntry = ({ func }) => (
  <Popup trigger={<button className='bg-slate-500 w-20 rounded-lg text-lg font-bold text-slate-100'>New</button>} position="right center" modal nested closeOnEscape>
    {close => (
      <div className='bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center'>
        <form className=' font-lexend bg-slate-700 w-96 h-auto flex flex-col shadow-lg shadow-slate-900 rounded-xl p-3 space-y-2 items-left text-white relative' onSubmit={func}>
          <MdClose className='absolute right-0 top-0 m-3' onClick={close} />
          <label className='h-5'>Position</label>
          <input required name='position' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label >Company</label>
          <input required name='company' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label >Location</label>
          <input required name='location' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label >Data Applied</label>
          <input required name='date_applied' type='date' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label >Application Progress</label>
          <input required name='application_progress' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Status</label>
          <input required name='status' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label >Comments</label>
          <input required name='comments' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <button className='bg-slate-500 w-32 h-10 self-center rounded-2xl shadow-md shadow-slate-900 active:bg-slate-800' >Submit</button>

        </form>
      </div>
    )}
  </Popup>
);

export default ApplicationTracker;
