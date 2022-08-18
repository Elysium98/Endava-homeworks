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
import IngredientService from "../services/ingredient";

const useStyles = makeStyles(() => ({
  tableContainer: {
    margin: "16px",
    width: "60%",
    height: "auto",
  },
}));

export const Deposit = () => {
  const [ingredients, setIngredients] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const ingredientService = new IngredientService();
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      const data = await ingredientService.getIngredients();
      setIngredients(data);
      console.log(data);
    })();
  }, []);

  useEffect(() => {
    if (ingredients) {
      setIsLoading(false);
    }
  }, [ingredients]);

  return (
    <>
      <div className="container-2">
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableCell align="center" colSpan={2} className="title_table">
                Ingredients
              </TableCell>
            </TableHead>
            <TableHead>
              <TableRow className="table_row">
                <TableCell>Name</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients?.map((ingredient) => {
                return (
                  <TableRow key={ingredient.id}>
                    <TableCell>{ingredient.name}</TableCell>
                    <TableCell>{ingredient.quantity}</TableCell>
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
