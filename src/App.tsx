import Card from './components/Card';
import type { Review } from './types/review';
import daniel from '@/assets/images/image-daniel.jpg';
import jeanette from '@/assets/images/image-jeanette.jpg';
import jonathan from '@/assets/images/image-jonathan.jpg';
import kira from '@/assets/images/image-kira.jpg';
import patrick from '@/assets/images/image-patrick.jpg';
import { cn } from './lib/utils';

const reviews: Review[] = [
  {
    id: 1,
    img: daniel,
    name: 'Daniel Clifford',
    role: 'Verified Graduate',
    title:
      'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
    content:
      '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”',
    bgColor: 'bg-purple-500',
    titleColor: 'text-white',
    contentColor: 'text-purple-50',
    gridArea: 'md:col-span-2',
    bgPattern: 'md:patternmd xl:patternxl',
  },
  {
    id: 2,
    img: jonathan,
    name: 'Jonathan Walters',
    role: 'Verified Graduate',
    title: 'The team was very supportive and kept me motivated',
    content:
      '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “',
    bgColor: 'bg-grey-500',
    titleColor: 'text-white',
    contentColor: 'text-grey-100',
  },
  {
    id: 3,
    img: jeanette,
    name: 'Jeanette Harmon',
    role: 'Verified Graduate',
    title: 'An overall wonderful and rewarding experience',
    content:
      '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”',
    bgColor: 'bg-white',
    titleColor: 'text-grey-500',
    contentColor: 'text-grey-400',
  },
  {
    id: 4,
    img: patrick,
    name: 'Patrick Abrams',
    role: 'Verified Graduate',
    title:
      'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
    content:
      '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”',
    bgColor: 'bg-dark-blue',
    titleColor: 'text-grey-200',
    contentColor: 'text-grey-100',
    gridArea: 'md:col-span-2',
  },
  {
    id: 5,
    img: kira,
    name: 'Kira Whittle',
    role: 'Verified Graduate',
    title: 'Such a life-changing experience. Highly recommended!',
    content:
      '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”',
    bgColor: 'bg-white',
    titleColor: 'text-grey-500',
    contentColor: 'text-grey-400',
    gridArea: 'md:col-span-2 xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-3',
  },
];

function App() {
  return (
    <>
      <main
        className={cn(
          'max-w-[305px] md:max-w-[647px] xl:max-w-[1114px]',
          'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[32px]',
          'mx-auto pt-[83px] xl:pt-[229px]',
        )}>
        {reviews.map((review) => (
          <Card key={review.id} data={review} />
        ))}
      </main>
    </>
  );
}

export default App;
