import { DiReact } from "react-icons/di";
import Row from "./Row";

const AnimatedReact = () => {
  return (
    <Row className="flex-col items-center gap-1">
      <div className=" bg-[#8121d0] bg-opacity-15  size-[20px] md:size-[40px] rounded-full flex justify-center items-center">
        <DiReact className="animate-spin text-white text-opacity-45 size-[15px] md:size-[30px]" />
      </div>

      <div className="border-l-[5px] md:border-l-[8px] border-double  border-[#8121d0] h-[150px] md:h-[200px]" />
    </Row>
  );
};

export default AnimatedReact;
