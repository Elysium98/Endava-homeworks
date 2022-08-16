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
import { getProducts } from "../services/product";

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

  useEffect(() => {
    setTimeout(() => {
      getProducts().then((data) => setProducts(data));
    }, 400);
  }, []);

  useEffect(() => {
    if (products) {
      setIsLoading(false);
    }
  }, [products]);

  return (
    <div className="container-2">
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell> Name </TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => {
              const { id, name, price } = product;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{price}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {isLoading && <CircularProgress color="secondary" size={25} />}
      </TableContainer>
    </div>
  );
};
