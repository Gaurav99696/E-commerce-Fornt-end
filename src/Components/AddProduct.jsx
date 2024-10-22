import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TiDeleteOutline } from "react-icons/ti";

const AddProduct = () => {
  let [setingIngredents, setSetingIngredents] = useState(false);
  let [ingredents, setIngredents] = useState([]);
  let [ingredent, setIngredent] = useState("");

  const addIngredent = () => {
    setIngredents([ingredent, ...ingredents]);
    setIngredent("");
    setSetingIngredents(false);
  };

  return (
    <>
      <div className="addProductWrapper">
        {setingIngredents ? (
          <>
            <div className="overlay"></div>
            <div className="popup">
              <div className="header">
                <h3>Enter your ingrident:</h3>
                <RxCross1
                  className="closeBtn"
                  onClick={() => setSetingIngredents(false)}
                />
              </div>
              <input
                type="text"
                className="input"
                value={ingredent}
                onChange={(e) => setIngredent(e.target.value)}
              />
              <div className="btns">
                <button onClick={() => addIngredent()}>Add</button>
                <button
                  className="cancel"
                  onClick={() => setSetingIngredents(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : null}
        <div className="addProductMain">
          <div className="addProductLeftSide">
            <div className="productImageWrapper">
              <div className="buttonToAddProductImage">
                <h4>+</h4>
              </div>
              <h4>Upload an image</h4>
            </div>
            <div className="images">
              <div className="image">+</div>
              <div className="image">+</div>
              <div className="image">+</div>
              <div className="image">+</div>
            </div>
            <div className="defineCategory">
              <input type="checkbox" id="handmade" />
              <label htmlFor="handmade">Hand made</label>
              <input type="checkbox" id="normal" />
              <label htmlFor="normal">Normal</label>
            </div>
            <button>Add Product</button>
          </div>
          <div className="addProductRightSide">
            <div className="besicInfo">
              <div className="besicInfo_productName">
                <h3>Product Name:</h3>
                <input type="text" className="input" />
              </div>
              <div className="besicInfo_productPrice">
                <h3>Product Price:</h3>
                <input type="text" className="input" />
              </div>
              <div className="besicInfo_productDescription">
                <h3>Product Description:</h3>
                <textarea className="input" maxLength={700}></textarea>
              </div>
            </div>
            <div className="ingredents">
              <h3>Ingridents:</h3>
              <div className="addIngridents">
                <div
                  className="addIngridentsBtn"
                  onClick={() => setSetingIngredents(true)}
                >
                  +
                </div>
                <div className="addIngridentsSection">
                  {ingredents.map((ingredent, key) => {
                    return (
                      <span className="ingredent">
                        {ingredent}
                        <TiDeleteOutline
                          className="deleteIngrident"
                          onClick={() =>
                            setIngredents(
                              ingredents.filter((item) => item !== ingredent)
                            )
                          }
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

// import React, { useState } from "react";

// export function App(props) {
//   const [file, setFile] = useState();
//   function handleChange(e) {
//     console.log(e.target.files);
//     setFile(URL.createObjectURL(e.target.files[0]));
//   }
//   return (
//     <div className="App">
//       <h2>Add Image:</h2>
//       <input type="file" onChange={handleChange} />
//       <img src={file} />
//     </div>
//   );
// }

// // Log to console
// console.log("Hello console");
