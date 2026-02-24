import TextElement from "@/components/common/TextElement";
import Row from "@/components/common/Row";
import ContactData from "@/assets/data/contact.data";

const ContactInfo = () => {
  return (
    <Row className="w-full md:w-[38%] flex-col items-start gap-3  ">
      {ContactData.map((val) => (
        <Row key={val.name} className="items-center gap-2 md:gap-4">
          <div className="flex justify-center items-center size-[30px] md:size-[40px] rounded-sm shadow-md border-y bg-white">
            <val.icon className="size-[20px] md:size-[25px] text-[#8121d0]" />
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
