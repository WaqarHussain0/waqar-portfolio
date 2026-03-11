import TextElement from '@/components/common/TextElement';
import Row from '@/components/common/Row';
import ContactData from '@/assets/data/contact.data';

const ContactInfo = () => {
  return (
    <Row className="w-full flex-col items-start gap-3 md:w-[38%]">
      {ContactData.map(val => (
        <Row key={val.name} className="items-center gap-2 md:gap-4">
          <div className="flex size-[30px] items-center justify-center rounded-sm border-y bg-white shadow-md md:size-[40px]">
            <val.icon className={`size-[20px] text-[#8121d0] md:size-[25px]`} />
          </div>

          <Row className="flex-col items-start">
            <TextElement as="h3">{val.name}</TextElement>

            <TextElement as="p">{val.details}</TextElement>
          </Row>
        </Row>
      ))}
    </Row>
  );
};

export default ContactInfo;
