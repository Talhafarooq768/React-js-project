import './App.scss';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Routes from "./pages/Routes"
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" } }}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
