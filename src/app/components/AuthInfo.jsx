"use server"
import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';
import Navigation from "./Navigation"
import Image from "next/image"

const AuthInfo =  ({ username }) => {
  const { userId } = auth();

  return (
    <nav className=' flex items-center justify-between px-6 py-4 mb-5 bg-gradient-to-b from-neutral-800 to-stone-400'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='w-40'>
            <Image src="/images/LogoEZ.png" height="50" width="50"alt="LogoEZ"/>
          </div>
        </Link>
        
      </div>
    
      <div className='flex items-center text-white'>
        {!userId && (
          <>
            <Link
              href='sign-in'
              className='px-3 py-1  rounded-xl bg-neutral-600 hover:bg-neutral-400 hover:border-2 hover:border-orange-400 text-gray-300 hover:text-white mr-4'
            >
              Sign In
            </Link>
            <Link
              href='sign-up'
              className='px-3 py-1  rounded-xl bg-neutral-600 hover:bg-neutral-400 hover:border-2 hover:border-orange-400 text-gray-300 hover:text-white mr-4'
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='py-1 px-3 rounded-xl bg-amber-600 text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
      <div className=''>
      <Navigation/>
      </div>
    </nav>
  );
};

export default AuthInfo;

