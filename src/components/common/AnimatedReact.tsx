import { DiReact } from 'react-icons/di';
import Row from './Row';

const AnimatedReact = () => {
  return (
    <Row className="flex-col items-center gap-1">
      <div className="bg-opacity-15 flex size-[20px] items-center justify-center rounded-full bg-[#8121d0] md:size-[40px]">
        <DiReact className="text-opacity-45 size-[15px] animate-spin text-white md:size-[30px]" />
      </div>

      <div className="h-[150px] border-l-[5px] border-double border-[#8121d0] md:h-[200px] md:border-l-[8px]" />
    </Row>
  );
};

export default AnimatedReact;
