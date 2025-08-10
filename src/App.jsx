import { useRef, useState, useEffect } from "react";
import { data } from "./utils/data";
import Card from "./components/Card";

function App() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {showLeft && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white px-3 py-2 ml-2 rounded-full"
          onClick={() => scrollByAmount(-300)}
        >
          ◀
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
        onScroll={checkScrollButtons}
      >
        {data.map((value, index) => (
          <div key={index} className="p-0.5 w-80 flex-shrink-0">
            <Card title={value.title} imageUrl={value.imageUrl} />
          </div>
        ))}
      </div>

      {/* Right button */}
      {showRight && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 mr-2 text-white px-3 py-2 rounded-full"
          onClick={() => scrollByAmount(300)}
        >
          ▶
        </button>
      )}
    </div>
  );
}

export default App;
