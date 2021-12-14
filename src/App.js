import { Button, Card } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Button type="primary">Button</Button>
      </section>
    </div>
  );
}

export default App;
