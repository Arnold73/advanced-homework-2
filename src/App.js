import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import ProductDetail from "./components/ProductDetail";
import SubHeader from "./components/SubHeader";
import TopNav from "./components/TopNav";

function App(props) {
  let filteredcategory = props.state.products.filter((u)=>{
    if (u.category === props.currentCategory){
      return true;
    }
    return false;
  });
  return (
    <div className="App">
      <div className="wrap">
        <div className="header">
          <Header />
			<div className="clear"> </div>
			<SubHeader />
				<div className="clear"> </div>
			</div>
			<div className="clear"> </div>
			<TopNav changeCategory={props.changeCategory}/>

			</div>
      <ImageSlider />
				<div className="content">
					<div className="products-box">
					<div className="products">
						<h5><span>FEATURED</span> PRODUCTS</h5>
						<div className="section group">

             {filteredcategory.map((product, index) => {
               return <ProductDetail key={index} product={product} />
             })}
						</div>
					</div>
					<div className="products products-secondbox">
						<h5><span>Our</span> Specials</h5>
						<div className="section group">

						</div>
					</div>
				</div>
			</div>
			<div className="clear"> </div>
			<Footer />
			</div>


    );
}

export default App;
