import { cn } from '@/lib/utils';
import type { Review } from '@/types/review';

type CardProps = {
  data: Review;
};

export default function Card({ data }: CardProps) {
  return (
    <div
      className={cn(
        'px-8 py-8',
        'flex flex-col gap-4',
        'rounded-[8px] shadow-lg',
        data.bgColor,
        data.bgPattern,
        data.gridArea,
      )}>
      {/* 이름 부분 */}
      <div className={cn('flex gap-[17px] items-center')}>
        <figure className={cn('w-7 h-7', 'rounded-full overflow-hidden')}>
          <img src={data.img} alt={data.img} />
        </figure>
        <div className={cn('flex flex-col gap-1')}>
          <p className={cn('typo-2', data.titleColor)}>{data.name}</p>
          <p className={cn('typo-4', data.contentColor)}>{data.role}</p>
        </div>
      </div>
      {/* 내용 부분 */}
      <p className={cn('typo-1', data.titleColor)}>{data.title}</p>
      <p className={cn('typo-3', data.contentColor)}>{data.content}</p>
    </div>
  );
}
