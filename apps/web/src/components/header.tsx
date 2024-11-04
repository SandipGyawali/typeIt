'use client';
import { CircleUserRound, Crown, Info, Keyboard, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import Tooltip from './ui/tooltip';

const typeOptions = ['words', 'quotes', 'numbers'];
const duration = ['15', '30', '45', '60', '120'];

// Map of icon names to Lucide icon components
const icons = {
  Keyboard,
  Crown,
  Info,
  CircleUserRound,
  Settings,
};

type IconName = keyof typeof icons;

function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn('bg-transparent font-primary w-9/12 mx-auto space-y-8')}
    >
      <div className="flex w-full flex-col items-center justify-between space-y-2 pt-10 sm:flex-row sm:space-y-0 sm:space-x-6">
        {/* icon view */}
        <div className="flex w-full items-center justify-start space-x-6 sm:w-auto">
          <Link href="/">
            <div className="flex space-x-1 items-center justify-center">
              <Keyboard
                className={cn(
                  'transition-colors duration-200 group-hover:text-h1',
                  [pathname === '/' ? 'text-foreground' : 'text-foreground/60']
                )}
              />
              <div
                className={cn(
                  `text-2xl font-bold text-foreground group-hover:text-h1`,
                  [pathname === '/' ? 'text-h1' : 'text-h1/60']
                )}
              >
                <span className={cn('transition-colors duration-200')}>
                  typeIt
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* middle and option view */}
        <nav className="flex w-full flex-1 items-center justify-between sm:w-auto">
          <div className="flex space-x-6 items-center">
            {[
              {
                path: '/',
                icon: 'Keyboard' as IconName,
                toolTipLabel: 'Home',
              },
              {
                path: '/crown',
                icon: 'Crown' as IconName,
                toolTipLabel: 'Achievements',
              },
              {
                path: '/info',
                icon: 'Info' as IconName,
                toolTipLabel: 'About',
              },
              {
                path: '/settings',
                icon: 'Settings' as IconName,
                toolTipLabel: 'Settings',
              },
            ].map((data, index) => {
              const IconComponent = icons[data.icon];
              return (
                <div key={index} className="relative">
                  <div className="peer">
                    <Link href={data.path}>
                      <IconComponent
                        className={cn(
                          `cursor-pointer text-foreground fill-h1/50 w-5 h-5 text-lg transition-colors duration-200 hover:fill-h1`,
                          { 'fill-h1': pathname === data?.path }
                        )}
                      />
                    </Link>
                  </div>
                  <Tooltip className="cursor-default bg-foreground peer-hover:translate-y-0 peer-hover:opacity-100">
                    {data.toolTipLabel}
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </nav>

        {/* right-side end view */}
        <div className="flex justify-end">
          <div className="relative">
            <div className="peer">
              <Link href="/login">
                <CircleUserRound
                  className={cn(
                    `cursor-pointer text-foreground fill-h1/50 w-5 h-5 text-lg transition-colors duration-200 hover:fill-h1`
                    // { 'fill-h1': pathname === data?.path }
                  )}
                />
              </Link>
            </div>
            <Tooltip className="cursor-default bg-foreground peer-hover:translate-y-0 peer-hover:opacity-100">
              Profile
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="mx-auto flex rounded-md items-center justify-between w-10/12 bg-foreground/10">
        sdf
        {/* divider */}
        <div className="w-[2px] h-11/12 bg-red-500" />
        {/* duration */}
        <div className="flex p-3 px-4 rounded-md cursor-pointer justify-end space-x-3 text-[10px] font-medium sm:text-xs text-gray-700">
          {duration.map((item, key) => (
            <div
              key={key}
              className={cn(
                duration.includes(item) ? 'text-h1' : 'text-h1/50',
                'transition-colors duration-200 hover:text-foreground'
              )}
              onClick={() => {
                console.log('set_time');
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
