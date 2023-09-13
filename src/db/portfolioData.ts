import boosta from '../assets/boostaImage-fotor-bg.png'
import zestImage from '../assets/zestImage.png'
import edsa from '../assets/edsa.png'
import ekgs from '../assets/ekgs.png'
import learnIT from '../assets/learnIT.png'
import mpiImage from '../assets/mpiImage.png'
import pollEasy from '../assets/pollEasy.png'


export type IPortfolioContent = {
    image?: any;
    devType?: string;
    paragraph?: string;
    id?: number;
  }[];

  export const portfolioContent: IPortfolioContent = [
    {
        id: 1,
        image: boosta,
        devType: 'Software',
        paragraph: 'Built for Businesses. Get all Transactions at a Go.',
    },
    {
        id: 2,
        image: zestImage,
        devType: 'Web Application',
        paragraph: 'Built for Business Growth. Collect Payment Easily.',
    },
    {
        id: 3,
        image: edsa,
        devType: 'Web Application',
        paragraph: 'Providing Youths With Tech Skills Needed For The Future.',
    },
    {
        id: 4,
        image: ekgs,
        devType: 'Software',
        paragraph: "One Software. To manage all Corp. Department's Activities.",
    },
    {
        id: 5,
        image: learnIT,
        devType: 'Web Application',
        paragraph: 'Achieve Your Goals. Find The PerfectMentor.',
    },
    {
        id: 6,
        image: mpiImage,
        devType: 'Web Application',
        paragraph: 'Explore data on Multidimensional and Monetary Poverty in Nigeria.',
    },
    {
        id: 7,
        image: pollEasy,
        devType: 'Software',
        paragraph: 'Collect data and layer analytics on it to manage election.',
    },
  ]