import React from 'react'
import Link from 'next/link';

import {RiFacebookFill, RiInstagramFill, RiLinkedinFill} from 'react-icons/ri'

const socials= [
    {
        icon: <RiFacebookFill />,
        path: 'https://www.facebook.com',
    },
    {
        icon: <RiLinkedinFill />,
        path: 'https://www.facebook.com',
    },
    {
        icon: <RiInstagramFill />,
        path: 'https://www.facebook.com',
    },
];


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
            <Link href={item.path} key={index} className={`${iconStyles}`}>
            {item.icon}
            </Link>
        );
      })}
    </div>
  );
};

export default Socials;
