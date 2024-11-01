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
		<div className="carousel rounded-box">
		  <div className="carousel-item">
		    <Card name="Irrigation System" desc="This is irrigation system" img={irrigation_system} url="/IrrigationSystem"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Artificial Intellence in Agriculture" desc="This is irrigation system" img={aiml} url="/AIML"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Crop Breeding" desc="This is irrigation system" img={crop_breeding} url="/CropBreeding"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Precision Agriculture" desc="This is irrigation system" img={precision_agriculture} url="/PrecisionAgriculture" />
		  </div>
		  <div className="carousel-item">
		   	<Card name="Big Data in Agriculture" desc="Big data in agriculutre" img={bigdata} url="/BigData"/>
		  </div>
		  <div className="carousel-item">
		    <Card name="Vertical Farming" desc="This is irrigation system" img={vertical_farming} url="/VerticalFarming"/>
		  </div>
		  <div className="carousel-item">
		   	<Card name="Drone Crop Monitoring" desc="This is irrigation system" img={drone_in_it} url="/DroneCropMonitoring"/>
		  </div>
		</div>
	)
}