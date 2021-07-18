import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import CustomSelect from "../components/form/CustomSelect";
import SearchInput from "../components/form/SearchInput";

const Produto: React.FC = () => {
  const [pesquisar, setPesquisar] = useState<string>();
  const [sort, setSort] = useState<string>();

  return (
    <Grid container spacing={3} direction="row">
      <Grid item xs={12} md={6}>
        <SearchInput
          value={pesquisar}
          onChange={(e) => setPesquisar(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomSelect
          value={sort}
          label="Ordenar por:"
          onChange={(e) => setSort(e.target.value)}
          items={[
            { value: "ALFABETICA", label: "Nome (A-Z)" },
            { value: "VALOR", label: "Valor" },
          ]}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomSelect
          value={sort}
          label="Exibição:"
          onChange={(e) => setSort(e.target.value)}
          items={[
            { value: 5, label: "5" },
            { value: 10, label: "10" },
            { value: 50, label: "20" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default Produto;
