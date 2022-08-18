import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../services/product";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const AddProduct = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: 0,
    time: 0,
  });
  const [buttonText, setButtonText] = useState("");
  const [titleText, setTitleText] = useState("");
  const navigate = useNavigate();
  const productService = new ProductService();
  let handleAddEdit = async () => {};

  if (id !== undefined) {
    handleAddEdit = async () => {
      try {
        console.log(form);
        await productService.updateProduct(form);
        navigate(`/`);
      } catch (e) {
        console.warn(e);
      }
    };
  } else {
    handleAddEdit = async () => {
      try {
        await productService.createProduct(form);
        navigate(`/`);
      } catch (e) {
        console.warn(e);
      }
    };
  }

  useEffect(() => {
    if (id !== undefined) {
      (async () => {
        try {
          setButtonText("Update");
          setTitleText("Edit a product");
          const product = await productService.getProductById(id);
          console.log(product);
          setForm(product);
        } catch (err) {
          console.log(err);
        }
      })();
    } else {
      (async () => {
        setButtonText("Create");
        setTitleText("Add a product");
      })();
    }
  }, [id]);

  const updateField = ({ name, value }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  if (form === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="div-card">
        <Card className="add-product-card">
          <CardContent>
            <Typography gutterBottom variant="h4">
              <b> {titleText}</b>
            </Typography>

            <form className="ProductEdit">
              <TextField
                id="filled-basic"
                label="ID"
                variant="filled"
                name="id"
                value={form.id}
                onChange={({ target }) => updateField(target)}
              />
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                name="name"
                value={form.name}
                onChange={({ target }) => updateField(target)}
              />
              <TextField
                id="filled-basic"
                label="Preparation time"
                variant="filled"
                name="time"
                value={form.time}
                onChange={({ target }) =>
                  updateField({
                    name: target.name,
                    value: parseInt(target.value, 10),
                  })
                }
              />
              <TextField
                id="filled-basic"
                label="Price"
                variant="filled"
                name="price"
                value={form.price}
                onChange={({ target }) =>
                  updateField({
                    name: target.name,
                    value: parseInt(target.value, 10),
                  })
                }
              />
            </form>
          </CardContent>
          <div className="buttons">
            <Button
              variant="contained"
              className="productEdit-btn"
              onClick={handleAddEdit}
            >
              {buttonText}
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AddProduct;
