import piecyferLogo from "../../../public/piecyfer.png";
import exdLogo from "../../../public/exd.png";
import techverxLogo from "../../../public/techverx.jpg";
import { ICompanyExperience } from "@/components/feature/home/Experience";

const ExperienceData: ICompanyExperience[] = [
  {
    companyName: "Techverx",
    location: "Lahore",
    imgSrc: techverxLogo,
    websiteLink: "https://www.techverx.com/",
    roles: [
      {
        designation: "Software Engineer",
        startDate: "Jan 26",
        endDate: null,
      },
      {
        designation: "Associate Software Engineer",
        startDate: "May 25",
        endDate: "Dec 25",
      },
    ],
  },
  {
    companyName: "PieCyfer",
    location: "Lahore",
    imgSrc: piecyferLogo,
    websiteLink: "https://www.piecyfer.com/",
    roles: [
      {
        designation: "Associate MERN Dev.",
        startDate: "June 24",
        endDate: "May 25",
      },
      {
        designation: "Intern MERN Stack Dev.",
        startDate: "Mar 24",
        endDate: "May 24",
      },
    ],
  },
  {
    companyName: "Excellence Delivered Exd (Pvt.) Ltd",
    location: "Lahore",
    imgSrc: exdLogo,
    websiteLink: "https://66loop.com/",
    roles: [
      {
        designation: "MERN Bootcamp",
        startDate: "2023",
        endDate: "2023",
      },
    ],
  },
];

export default ExperienceData;