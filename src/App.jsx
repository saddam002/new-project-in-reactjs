import "./App.css";
import Card from "./components/Card";

const datas = [
  {
    id: 1,
    photoName: "src/assets/first.jpg",
    company: "Amazon",
    work: "Senior UI/UX Designer",
  },
  {
    id: 2,
    photoName: "src/assets/second.avif",
    company: "Google",
    work: "Senior Backend Designer",
  },
  {
    id: 3,
    photoName: "src/assets/third.avif",
    company: "Facebook",
    work: "Senior FrontEnd Developer",
  },
  {
    id: 4,
    photoName: "src/assets/fourth.avif",
    company: "Apple",
    work: "Senior Mobile Developer",
  },
];

function App() {
  return (
    <div className="container">
      {datas.map((data, index) => {
        return (
          <Card
            key={index}
            photoName={data.photoName}
            company={data.company}
            work={data.work}
          />
        );
      })}
    </div>
  );
}

export default App;
