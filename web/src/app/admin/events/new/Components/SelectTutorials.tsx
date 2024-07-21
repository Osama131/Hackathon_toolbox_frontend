import { Suspense } from 'react';
import { Input, Skeleton } from '@/lib/next-ui';
import SelectTutorialsInput from './SelectTutorialsInput';

const SelectTutorials = async () => {
  // TODO: relative path
  const tutorials = await fetch(
    'http://localhost:3000/hack-participant-kit/api/tutorials/list',
  )
    .then((res) => res.json())
    .then((data) => data.tutorials);
  return <SelectTutorialsInput tutorials={tutorials} />;
};

const SelectTutorialsSuspense = async () => {
  return (
    <Suspense
      fallback={
        <Skeleton className="rounded-none">
          <Input type="select" />
        </Skeleton>
      }
    >
      <SelectTutorials />
    </Suspense>
  );
};

export default SelectTutorialsSuspense;
