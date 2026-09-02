import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import type { searchType } from "../../types";
import Alert from "../Alert/Alert";

export const Form = () => {
  const [search, setSearch] = useState<searchType>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="Ciudad"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">País:</label>
        <select
          id="country"
          name="country"
          value={search.country}
          onChange={handleChange}
        >
          <option>-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  );
};
