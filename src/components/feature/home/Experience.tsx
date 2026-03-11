import AnimatedIcon from '@/components/common/AnimatedIcon';
import Row from '@/components/common/Row';
import TextElement from '@/components/common/TextElement';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import { ImOffice } from 'react-icons/im';
import { LuArrowUpRight } from 'react-icons/lu';

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
      <Row className="w-full flex-col items-center justify-between gap-4 md:px-0">
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

        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map(company => (
            <Card
              key={company.companyName}
              className="w-full px-4 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Row className="gap-4">
                {/* Company Logo */}
                <div className="relative size-[50px]">
                  <Image
                    src={company.imgSrc}
                    alt={`${company.companyName} Logo`}
                    fill
                    className="object-contain"
                    priority
                    fetchPriority="high"
                  />
                </div>

                <Row className="w-full flex-1 flex-col items-start gap-3">
                  {/* Company Name */}

                  <a
                    href={company.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group underline"
                  >
                    <Row className="items-center gap-1">
                      <CardDescription className="poppins text-[12px] font-normal md:text-[16px] lg:text-[18px]">
                        {company.companyName}
                      </CardDescription>

                      <LuArrowUpRight className="size-4 transition" />
                    </Row>
                  </a>

                  {/* Roles */}

                  <Row className="flex-col items-start gap-4 border-l pl-2">
                    {company.roles.map((role: IRole) => (
                      <Row
                        key={`${role.designation}-${role.startDate}`}
                        className="flex-col items-start"
                      >
                        <CardTitle className="text-base">
                          {role.designation}
                        </CardTitle>

                        <CardDescription className="poppinsRegular text-sm">
                          {role.startDate} -{' '}
                          {role.endDate ? (
                            role.endDate
                          ) : (
                            <span className="text-green-700">Present</span>
                          )}
                        </CardDescription>
                      </Row>
                    ))}
                  </Row>

                  <Row className="gap-2">
                    <Badge variant={'outline'} className="">
                      {company.location}
                    </Badge>

                    <Badge variant={'outline'} className="">
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
