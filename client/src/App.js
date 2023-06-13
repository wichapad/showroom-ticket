import './App.css';
import Navbar from './Components/Navbar';


const App = () => {
  
 
  return (
    <div>
      <Navbar/>
      <h1 className="text-4xl font-bold leading-snug tracking-tight text-slate-950 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Free Landing Page Template for startups
            </h1>
            <p className="py-5 text-xl leading-normal text-slate-950 lg:text-xl xl:text-2xl">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>
    </div>
  )
}

export default App

