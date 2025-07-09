import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
