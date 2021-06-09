import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Booking',
    path: '/booking',
    icon: <AiIcons.AiFillAccountBook />,
    cName: 'nav-text'
  },
  {
    title: 'Special Item',
    path: '/popular',
    icon: <FaIcons.FaGrinStars />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/order',
    icon: <FaIcons.FaBorderAll />,
    cName: 'nav-text'
  }
];
