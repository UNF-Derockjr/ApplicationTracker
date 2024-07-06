import logo from './logo.svg';
import './App.css';
import Popup from 'reactjs-popup';
import { SlArrowRight } from "react-icons/sl";


const NewEntry = () => (
  <Popup trigger={<button className='bg-slate-500 w-20 rounded-lg text-lg font-bold text-slate-100'>New</button>} position="right center" modal nested>
    {close => (
      <div className='bg-black bg-opacity-50 h-screen w-screen flex justify-center items-center'>
        <div className='bg-slate-500 w-96 h-48 flex flex-col'>
          <label>Position</label>
          <label>Company</label>
          <label>Location</label>
          <label>Data Applied</label>
          <label>Application Progress</label>
          <label>Status</label>
          <label>Comments</label>


        </div>
      </div>
    )}
  </Popup>
);

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen flex flex-col items-center font-lexend">
      <div className='mt-10 w-1/2 flex justify-evenly'>
        <input className='w-96 bg-slate-700 rounded-lg border-2 border-slate-500 focus:border-slate-300 block'></input>
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
