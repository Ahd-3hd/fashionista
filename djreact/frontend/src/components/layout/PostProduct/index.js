import React, { useState } from "react";
import { ProductForm, TextInput, SubmitButton, FileField } from "./index.style";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../actions/products";
const PostProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [productType, setProductType] = useState("");
  const [img, setImg] = useState();
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("product_type", productType);
    uploadData.append("img", img);
    dispatch(addProduct(uploadData));
  };
  if (redirect) {
    return <Redirect to="/gallery" />;
  } else {
    return (
      <ProductForm>
        <TextInput
          placeholder="title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          placeholder="product type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        />
        <FileField type="file" onChange={(e) => setImg(e.target.files[0])} />
        <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
      </ProductForm>
    );
  }
};

export default PostProduct;
