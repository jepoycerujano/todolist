import { useState, useEffect, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className="my-3 flex items-center justify-between px-5 py-3">
      <div className="text-base font-normal md:text-xl">
        <Link href={'/'}>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
