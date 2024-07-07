import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import { SlArrowRight } from "react-icons/sl";


const NewEntry = () => (
  <Popup trigger={<button className='bg-slate-500 w-20 rounded-lg text-lg font-bold text-slate-100'>New</button>} position="right center" modal nested>
    {close => (
      <div className='bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center'>
        <div className='bg-slate-700 w-96 h-auto flex flex-col shadow-lg shadow-slate-900 rounded-xl p-3 space-y-2 items-left text-white'>
          <label className='h-5'>Position</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Company</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Location</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Data Applied</label>
          <input type='date' className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Application Progress</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Status</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <label>Comments</label>
          <input className=" h-5 bg-slate-500 rounded-lg border-2 border-slate-500 focus:border-slate-300 text-white p-2 py-3 focus:outline-none shadow-md"></input>
          <button className='bg-slate-500 w-32 h-10 self-center rounded-2xl shadow-md shadow-slate-900'>Submit</button>

        </div>
      </div>
    )}
  </Popup>
);

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen flex flex-col items-center font-lexend">
      <div className='mt-10 w-1/2 flex justify-evenly'>
        <input className='w-96 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 focus:outline-none shadow-md'></input>
        <NewEntry />
      </div>
      <ul class="grid grid-cols-2 gap-4 mt-10">
        <li className='bg-slate-400 w-60 h-60 rounded-3xl p-3'>
          <div className='h-3/5'>
            <p className='text-3xl'>Position</p>
            <p className='text-xl'>Company</p>
          </div>
          <div className='h-2/5 flex relative flex-col justify-end text-xl'>
            <p>Status</p>
            <p>X days ago</p>
            <SlArrowRight className='absolute top-12 right-1' />
          </div>
        </li>
        <li className='bg-slate-400 w-60 h-60 rounded-3xl p-3'>
          <div className='h-3/5'>
            <p className='text-3xl'>Software Engineer Intern</p>
            <p className='text-xl'>Google</p>
          </div>
          <div className='h-2/5 flex relative flex-col justify-end text-xl'>
            <p>Submitted</p>
            <p>3 days ago</p>
            <SlArrowRight className='absolute top-12 right-1' />
          </div>
        </li>
        <li className='bg-slate-400 w-60 h-60 rounded-3xl '></li>
        <li className='bg-slate-400 w-60 h-60 rounded-3xl '></li>
      </ul>
    </div>
  );
}

export default App;
