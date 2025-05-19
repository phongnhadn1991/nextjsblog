import ChartTotalPosts from '@/components/dashboard/chartdashboard/ChartTotalPosts';
import { ChartTotalUsers } from '@/components/dashboard/chartdashboard/ChartTotalUsers';
import TopUsers from '@/components/dashboard/topusers/TopUsers';
import React from 'react';

const Dashboard = () => {
  return (
    <div className='l-dashboard'>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
        <div className='p-charBoard lg:col-span-2'>
          <ChartTotalPosts />
        </div>
        <div className='p-topUsers'>
          <TopUsers />
        </div>
        <div className='bg-primary-foreground'>
          <ChartTotalUsers />
        </div>
        <div className='bg-primary-foreground p-4 rounded-lg'>Box Todolist</div>
        <div className='bg-primary-foreground p-4 rounded-lg'>Box</div>
        <div className='bg-primary-foreground p-4 rounded-lg'>Box</div>
        <div className='bg-primary-foreground p-4 rounded-lg'>Box</div>
      </div>
    </div>
  );
}

export default Dashboard;
