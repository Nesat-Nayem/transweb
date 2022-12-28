import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "./Package.css";

const product = [
    {
        "id":767,
        "name":"Movers & Packers",
        "img":"https://moversco-demo.pbminfotech.com/demo2/wp-content/uploads/sites/2/2018/08/blog-01-800x533.jpg",
        "category":"TOP SELL",
        "price":8787,
        "review":5
    }

]

console.log(product.name)

const Packages = () => {
    return (
   <>
      {

        product.map((product)=>(





     <div
        style={{ margin: "80px 0px" }}
        className="col-lg-3 col-md-4 col-sm-6 col-xs-12 container "
      >
            <div className="card h-100">
            <img id="cardImage" src={product.img} className="card-img-top" alt={product.name} />
    
            <NavLink
              to={`/chackout`}
              className="text-decoration-none"
            >
              <div className="card-body d-flex flex-column align-items-start">
                <Rating ratingValue={product.review * 20} size={18} readonly={true} />
                <p
                  style={{
                    color: "#3a9046",
                    fontSize: "13px",
                    margin: "5px 0",
                  }}
                >
                  {String(product.category).toLocaleUpperCase()}
                </p>
                <h2
                  className="card-title"
                  style={{
                    color: "#FF0080",
                    fontSize: "18px",
                    fontWeight: 900,
                    margin: "10px 0",
                    letterSpacing: "1px",
                  }}
                >
                  {product.name}
                </h2>
                <p
                  style={{
                    color: "#3a9046",
                    fontSize: "25px",
                    marginBottom: "30px",
                  }}
                >
                  ${product.price}
                </p>
              </div>
            </NavLink>
          </div>

</div>   
        ))
      }
      </>                
    );
};

export default Packages;