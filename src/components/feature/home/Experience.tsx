import AnimatedIcon from "@/components/common/AnimatedIcon";
import Row from "@/components/common/Row";
import TextElement from "@/components/common/TextElement";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { ImOffice } from "react-icons/im";
import { LuArrowUpRight } from "react-icons/lu";

export interface IRole {
  designation: string;
  startDate: string;
  endDate: string | null;
}

export interface ICompanyExperience {
  companyName: string;
  location: string;
  imgSrc: string | StaticImageData;
  websiteLink: string;
  roles: IRole[];
}

interface IExperienceSectionProps {
  experiences: ICompanyExperience[];
}
const ExperienceSection: React.FC<IExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <Row id="about" className="w-full justify-center">
      <Row className=" md:px-0 w-full flex-col justify-between items-center gap-4">
        <Row className="items-center gap-3 text-[#291c3a]">
          <Row className="flex-col gap-2">
            <Row className="gap-2">
              <AnimatedIcon Icon={ImOffice} />

              <TextElement as="h2">Experience</TextElement>
            </Row>
            <TextElement as="p">
              My professional journey and work experience
            </TextElement>
          </Row>
        </Row>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {experiences.map((company) => (
            <Card
              key={company.companyName}
              className="w-full shadow-sm  px-4 py-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Row className="gap-4">
                {/* Company Logo */}
                <div className="relative size-[50px]">
                  <Image
                    src={company.imgSrc}
                    alt={`${company.companyName} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                <Row className="flex-col flex-1 items-start w-full gap-3">
                  {/* Company Name */}

                  <a
                    href={company.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline group"
                  >
                    <Row className="items-center gap-1">
                      <CardDescription className="poppins text-[12px] md:text-[16px] lg:text-[18px] font-normal">
                        {company.companyName}
                      </CardDescription>

                      <LuArrowUpRight className="size-4  transition" />
                    </Row>
                  </a>

                  {/* Roles */}

                  <Row className="flex-col gap-4 pl-2 border-l items-start">
                    {company.roles.map((role: IRole) => (
                      <Row
                        key={`${role.designation}-${role.startDate}`}
                        className="flex-col items-start"
                      >
                        <CardTitle className="text-base">
                          {role.designation}
                        </CardTitle>

                        <CardDescription className="poppinsRegular text-sm">
                          {role.startDate} -{" "}
                          {role.endDate ? (
                            role.endDate
                          ) : (
                            <span className="text-green-600">Present</span>
                          )}
                        </CardDescription>
                      </Row>
                    ))}
                  </Row>

                  <Row className="gap-2">
                    <Badge variant={"outline"} className="">
                      {company.location}
                    </Badge>

                    <Badge variant={"outline"} className="">
                      Onsite
                    </Badge>
                  </Row>
                </Row>
              </Row>
            </Card>
          ))}
        </div>
      </Row>
    </Row>
  );
};

export default ExperienceSection;
