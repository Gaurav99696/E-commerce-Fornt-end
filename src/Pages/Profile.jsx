import React from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as ProfileUserIcon } from "../assets/ProfileUserIcon.svg";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { FcLikePlaceholder } from "react-icons/fc";
import { BsCashCoin } from "react-icons/bs";

const userProfileData = {
  name: "Gaurav Mishra",
  email: "gauravmishra996996@gmail.com",
  cartProducts: [
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
      productName: "Sunrise",
      price: "$ 500.60",
    },
  ],
  likedProducts: [
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
  ],
  buyedProducts: [
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
    {
      image:
        "https://media.istockphoto.com/id/825148240/photo/sunrise-over-field.jpg?s=1024x1024&w=is&k=20&c=D259YV7VZ_3ziV3TTOgl6aiJ4ByZpuhwOxUxeBCQpWU=",
      productType: "Hand Made",
    },
  ],
};

const Profile = () => {
  return (
    <Contanior>
      <div className="profileWrapper">
        <div className="profileMain">
          <div class="userDetails">
            <div className="topSection">
              <div className="leftSection flex">
                <h3>Your Profile</h3>
                <ProfileUserIcon />
              </div>
              <div className="rightSection flex">
                <button className="flex">
                  Edit <MdOutlineEdit />
                </button>
                <button className="flex">
                  Delete Account <RiDeleteBin6Line />
                </button>
              </div>
            </div>
            <div className="bottomSection">
              <h3>Name: {userProfileData.name}</h3>
              <h3>Email: {userProfileData.email}</h3>
            </div>
          </div>
          <div class="cart">
            <h3 className="flex">
              Cart Products <FaCartShopping />
            </h3>
            <div className="cartProducts">
              {userProfileData.cartProducts.map((product, key) => {
                return (
                  <div className="product">
                    <div className="productLeftSection flex">
                      <img src={product.image} className="box" />
                      <div className="productDetails">
                        <h5>{product.productName}</h5>
                        <h5>Price: {product.price}</h5>
                      </div>
                    </div>
                    <RiDeleteBin6Line className="delete" />
                  </div>
                );
              })}
            </div>
            <button className="button">Clear Cart</button>
          </div>
          <div class="liked">
            <h3 className="flex">
              Liked Products <FcLikePlaceholder />
            </h3>
            <div className="likedProducts">
              {userProfileData.likedProducts.map((product, key) => {
                return (
                  <div className="product">
                    <img src={product.image} className="box" />
                    <div className="actions flex">
                      <h5>LIKED</h5>
                      <RiDeleteBin6Line />
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="button">Clear Liked Products</button>
          </div>
          <div class="buyed">
            <h3 className="flex">
              Buyed Products <BsCashCoin />
            </h3>
            <div className="buyedProducts">
              {userProfileData.buyedProducts.map((product, key) => {
                return (
                  <div className="box">
                    <img src={product.image} />
                    <div className="overlay">✓</div>
                  </div>
                );
              })}
            </div>
            <button className="button">Clear Buyed Products</button>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Profile;
