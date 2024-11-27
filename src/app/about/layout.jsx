'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header type='type2' title='about' sharing='true' />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default AboutLayout;
