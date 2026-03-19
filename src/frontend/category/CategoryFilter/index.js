import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
      root: {
            "&$checked": {
                  color: "#000",
            },
      },
      checked: {},
      wrap: {
            width: "100%",
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 0,
      },
      label: {
            fontSize: "1rem",
      },
});

const CategoryFilter = ({ category, type, handleChangeCategory }) => {
      const classes = useStyles();

      return (
            <>
                  <FormControlLabel
                        classes={{
                              label: classes.label,
                              root: classes.wrap,
                        }}
                        control={
                              <Checkbox
                                    classes={{
                                          checked: classes.checked,
                                          root: classes.root,
                                    }}
                                    size="small"
                                    checked={category.checked}
                                    onChange={() =>
                                          handleChangeCategory(
                                                category.id,
                                                type
                                          )
                                    }
                                    inputProps={{
                                          "aria-label":
                                                "checkbox with small size",
                                    }}
                              />
                        }
                        label={`${category.title}`}
                        // label={`${ category.title } (${category.products})`}
                  />
            </>
      );
};

export default CategoryFilter;
