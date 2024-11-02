import Card from './Card'
import aiml from './../assets/aiml.jpg'
import vertical_farming from './../assets/vertical_farming.jpg'
import drone_in_it from './../assets/drone_in_it.jpg'
import precision_agriculture from './../assets/precision_agriculture.webp'
import irrigation_system from './../assets/irrigation_system.jpg'
import crop_breeding from './../assets/crop_breeding.jpg'
import bigdata from './../assets/bigdata.jpg'

export default function Carousal(){
	return (
		<div className="carousel rounded-box w-[90vw] lg:w-[75vw]">
		  <div className="carousel-item">
		    <Card name="Irrigation System" desc="A Smart Irrigation System that optimizes water usage by monitoring soil moisture, weather conditions, and plant needs to deliver efficient and sustainable watering solutions" img={irrigation_system} url="/IrrigationSystem"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Artificial Intellence in Agriculture" desc="AI in agriculture enhances crop yields and sustainability through data-driven precision and predictive insights" img={aiml} url="/AIML"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Crop Breeding" desc="Crop breeding improves plant traits like yield, resilience, and nutrition by selecting and crossbreeding superior varieties" img={crop_breeding} url="/CropBreeding"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Precision Agriculture" desc="Precision agriculture uses data and technology to optimize farming practices, ensuring efficient resource use and improved crop yields" img={precision_agriculture} url="/PrecisionAgriculture" />
		  </div>
		  <div className="carousel-item">
		   	<Card name="Big Data in Agriculture" desc="Big data involves analyzing vast amounts of information to uncover patterns, trends, and insights, driving informed decisions across various industries" img={bigdata} url="/BigData"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Vertical Farming" desc="Vertical farming is a method of growing crops in stacked layers, often indoors, using controlled environments to maximize space and resource efficiency" img={vertical_farming} url="/VerticalFarming"/>
		  </div>
		  <div className="carousel-item">
		   	<Card name="Drone Crop Monitoring" desc="Drone crop monitoring uses aerial imaging to assess crop health, detect pests, and optimize farm management through real-time data collection" img={drone_in_it} url="/DroneCropMonitoring"/>
		  </div>
		</div>
	)
}