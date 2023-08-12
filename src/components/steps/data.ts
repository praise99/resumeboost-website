import { Circle } from "../../assets";

interface IStepData {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const Data: IStepData[] = [
  {
    id: 1,
    title: "Sign up",
    description:
      "Stand out from the competition as we help tailor your cover letter to the company and job you are applying for.",
    image: Circle,
  },
  {
    id: 2,
    title: "Fill your details",
    description:
      "Stand out from the competition as we help tailor your cover letter to the company and job you are applying for.",
    image: Circle,
  },
  {
    id: 3,
    title: "Ready to go!",
    description:
      "Stand out from the competition as we help tailor your cover letter to the company and job you are applying for.",
    image: Circle,
  },
];
