export default function Card(props){
	return(
		<div className="card bg-base-100 w-96 shadow-xl mx-5">
		  <figure className="px-10 pt-10">
		    <img
		      src={props.img}
		      alt={props.name}
		      className="rounded-xl" />
		  </figure>
		  <div className="card-body items-center text-center">
		    <h2 className="card-title">{props.name}</h2>
		    <p>{props.desc}</p>
		    <div className="card-actions">
		      <button className="btn btn-primary"><a href={props.url}>Learn more</a></button>
		    </div>
		  </div>
		</div>
	)
}