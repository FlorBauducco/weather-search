import style from "./App.module.css";
import { Form } from "./components/Form/Form";
import useWather from "./hook/useWeather";

function App() {
  const { fetchWeather } = useWather();

  return (
    <>
      <h1 className={style.title}>Buscador de clima</h1>

      <div className={style.container}>
        <Form fetchWeather={fetchWeather} />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
