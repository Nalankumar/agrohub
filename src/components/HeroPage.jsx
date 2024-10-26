import heroImage from "./../assets/heropage-img.jpg"
export default function HeroPage(){
	
	return (

	<div className="hero bg-base-200 min-h-screen" id="heropage">
	{/*<p>hello</p>*/}
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={heroImage}
      className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">IT in Agriculture</h1>
      <p className="py-6">
        AgroHub helps to learn about the Information Technology in Agriculture. It provides the courses to know the help of IT in agriculture.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
)
}