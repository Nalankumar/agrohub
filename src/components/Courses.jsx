import Carousal from './Carousal'
export default function Courses(){
	return(
		<div className="hero bg-base-200 min-h-screen">
		  <div className="hero-content flex-col lg:flex-row">
		  	<h1 className="text-3xl font-bold mx-2">Topics</h1>
		    <Carousal />
		  </div>
		</div>
	)
}