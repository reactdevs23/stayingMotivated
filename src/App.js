import MainComponent from "./components/MaiComponent/MainComponent";

function App() {
  const data = {
    headerFontFamily: "'Noto Serif', serif",
    fontFamily: "'Poppins', sans-serif",
    primaryColor: "#D6D28D",
    secondaryColor: "#F69077",
    textColor: "#000",
    background: "#F4E9D5",
    boxBg: "#fff",
    title: "Tips for staying motivated",

    dosData: {
      heading: "Do",
      data: [
        "Set clear and achievable goals",
        "Break Task into smaller step",
        "Plan an visualize you goal",
        "Focus on your progress",
        "Cultivate a positive mindset",
      ],
    },
    dontData: {
      heading: "Don't",
      data: [
        "Don't overload yourself",
        "Don't neglect self-care",
        `Don't lose sight of your "why"`,
        "Don't be afraid of failure",
        "Don't compare yourself to others",
      ],
    },
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,
        "--secondaryColor": data.secondaryColor,
        "--textColor": data.textColor,
        "--backgroundColor": data.background,
        "--boxBg": data.boxBg,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
