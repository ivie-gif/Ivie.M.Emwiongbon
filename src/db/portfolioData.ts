import boosta from '../assets/boostaImage-fotor-bg.png'
import zestImage from '../assets/zestImage.png'
import edsa from '../assets/edsa.png'
import ekgs from '../assets/ekgs.png'
import learnIT from '../assets/learnIT.png'
import mpiImage from '../assets/mpiImage.png'
import pollEasy from '../assets/pollEasy.png'
import arrowIcon from '../assets/arrowIcon-removebg-preview.png'


export type IPortfolioContent = {
    image?: any;
    devType?: string;
    paragraph?: string;
    id?: number;
    links?: string;
    icon?: any;
  }[];

  export const portfolioContent: IPortfolioContent = [
    {
        id: 1,
        image: boosta,
        devType: 'Software',
        paragraph: 'Built for Businesses. Get all Transactions at a Go.',
        links: 'https://booosta-dev.netlify.app/',
        icon: arrowIcon,
    },
    {
        id: 2,
        image: zestImage,
        devType: 'Web Application',
        paragraph: 'Built for Business Growth. Collect Payment Easily.',
        links: 'https://zest.prunedge.org/',
        icon: arrowIcon,
    },
    {
        id: 3,
        image: edsa,
        devType: 'Web Application',
        paragraph: 'Providing Youths With Tech Skills Needed For The Future.',
        links: 'https://www.ekitidigitalskillacademy.com/',
        icon: arrowIcon,
    },
    {
        id: 4,
        image: ekgs,
        devType: 'Software',
        paragraph: "One Software. To manage all Corp. Department's Activities.",
        links: 'https://prowoks-dev.pages.dev/signin',
        icon: arrowIcon,
    },
    {
        id: 5,
        image: learnIT,
        devType: 'Web Application',
        paragraph: 'Achieve Your Goals. Find The Perfect Mentor.',
        links: 'https://learn-it.vercel.app/',
        icon: arrowIcon,
    },
    {
        id: 6,
        image: mpiImage,
        devType: 'Web Application',
        paragraph: 'Explore and Analyze data on Multidimensional Poverty in Nigeria.',
        links: 'https://polleasy.netlify.app/signin',
        icon: arrowIcon,
    },
    {
        id: 7,
        image: pollEasy,
        devType: 'Software',
        paragraph: 'Collect data & layer analytics on it to manage election.',
        links: 'https://www.nigeriapovertymap.com/',
        icon: arrowIcon,
    },
  ]