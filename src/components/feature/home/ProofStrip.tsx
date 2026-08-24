import Row from '@/components/common/Row';
import TextElement from '@/components/common/TextElement';

const stats = [
  { value: '3+', label: 'years of experience' },
  { value: '7+', label: 'production tenants across 2 SaaS platforms' },
  { value: '5', label: 'engineer product teams' },
];

const ProofStrip = () => {
  return (
    <Row className="w-full justify-center bg-white py-4 md:py-6">
      <Row className="w-[90%] flex-col divide-y divide-gray-200 md:w-[80%] md:flex-row md:justify-between md:divide-x md:divide-y-0">
        {stats.map(stat => (
          <Row
            key={stat.label}
            className="w-full flex-col items-center gap-1 py-3 text-center md:py-0"
          >
            <TextElement as="h2" className="text-[#8121d0] !border-none">
              {' '}
              {stat.value}
            </TextElement>

            <TextElement
              as="p"
              className="line-clamp-none text-[10px] text-[#211F20] md:text-[14px]"
            >
              {stat.label}
            </TextElement>
          </Row>
        ))}
      </Row>
    </Row>
  );
};

export default ProofStrip;
