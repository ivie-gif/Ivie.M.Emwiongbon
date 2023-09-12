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
  }[];

  export const portfolioContent: IPortfolioContent = [
    {
        image: boosta,
        devType: 'Software',
        paragraph: 'Built for Businesses. Get all Transactions at a Go.',
    },
    {
        image: zestImage,
        devType: 'Web Application',
        paragraph: 'Built for Business Growth. Collect Payment Easily.',
    },
    {
        image: edsa,
        devType: 'Web Application',
        paragraph: 'Providing Youths With Tech Skills Needed For The Future.',
    },
    {
        image: ekgs,
        devType: 'Software',
        paragraph: "One Software. To manage all Corp. Department's Activities.",
    },
    {
        image: learnIT,
        devType: 'Web Application',
        paragraph: 'Achieve Your Goals. Find The PerfectMentor.',
    },
    {
        image: mpiImage,
        devType: 'Web Application',
        paragraph: 'Explore data on Multidimensional and Monetary Poverty in Nigeria.',
    },
    {
        image: pollEasy,
        devType: 'Software',
        paragraph: 'Collect data and layer analytics on it to manage election.',
    },
  ]