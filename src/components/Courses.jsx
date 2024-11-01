import Carousal from './Carousal'
export default function Courses(){
	return(
		<div className="hero bg-base-200 min-h-screen min-w-screen">
		  <div className="hero-content flex-col">
		  	<h1>Topics</h1>
		    <Carousal />
		  </div>
		</div>
	)
}