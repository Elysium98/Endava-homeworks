import {
  CircularProgress,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import ProductService, { deleteProduct } from "../services/product";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  tableContainer: {
    margin: "16px",
    width: "60%",
    height: "auto",
  },
}));

export const Products = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();
  const productService = new ProductService();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await productService.getProducts();
      setProducts(data);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
    }
  }, [products]);

  const handleDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      navigate(`/`);
    } catch (e) {
      console.warn(e);
    }
  };

  const goToEditProduct = async (id) => {
    try {
      navigate("/edit/" + id);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      <div className="container-2">
        <TableContainer component={Paper} className={classes.tableContainer}>
          <NavLink to="/new" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="add_product_btn">
              {" "}
              Add product
            </Button>
          </NavLink>
          <Table>
            <TableHead>
              <TableCell align="center" colSpan={4} className="title_table">
                Products
              </TableCell>
            </TableHead>
            <TableHead>
              <TableRow className="table_row">
                <TableCell>Id</TableCell>
                <TableCell> Name </TableCell>
                <TableCell>Price</TableCell>
                <TableCell className="action_cell">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product) => {
                return (
                  <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>

                    <TableCell>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to={"/product/" + product.id}
                      >
                        {product.name}
                      </NavLink>
                    </TableCell>

                    <TableCell>{product.price}</TableCell>
                    <TableCell>
                      <div className="table_btns">
                        <Button
                          variant="contained"
                          type="submit"
                          className="table_btn"
                          onClick={() => {
                            handleDelete(product.id);
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="contained"
                          type="submit"
                          className="table_btn"
                          onClick={() => {
                            goToEditProduct(product.id);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {isLoading && <CircularProgress color="secondary" size={25} />}
        </TableContainer>
      </div>
    </>
  );
};
