import { countries } from "../../data/countries";

export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="city">Ciudad:</label>
        <input id="city" type="text" name="city" placeholder="Ciudad" />
      </div>
      <div>
        <label htmlFor="country">País:</label>
        <select name="" id="">
          <option>-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Consultar Clima" />
    </form>
  );
};
