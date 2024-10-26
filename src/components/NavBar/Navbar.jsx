export default function Navbar(){
	return (
		<div className="navbar bg-base-100">
		  <div className="flex-1">
		    <a className="btn btn-ghost text-xl">AgroHub</a>
		  </div>
		  <div className="flex-none">
		    <ul className="menu menu-horizontal px-1">
		      <li><a href="#id">Home</a></li>
		      <li><a>Learn</a></li>
		      <li><a>Sign Up</a></li>
		    </ul>
		  </div>
		</div>
	)
}