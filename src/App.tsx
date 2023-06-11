import { ConfigProvider } from "antd";
import "./App.css";
import RouteHandler from "./routing";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#000000',
        }
      }}
    >
      <RouteHandler />
    </ConfigProvider>
  )
}

export default App;
