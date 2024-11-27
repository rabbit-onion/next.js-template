'use client';

import { Button, Container, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = ({ type = 'type1', title, sharing }) => {
  const renderHeader = () => {
    switch (type) {
      // main header
      case 'type1':
        return (
          <header>
            <Container size='full' className='flex justify-between items-center fixed top-0 left-0 right-0 bg-white-500 backdrop-blur-md z-50 py-3'>
              <Heading as='h1'>logo</Heading>
              <nav>nav</nav>
            </Container>
          </header>
        );
      // 이전, 타이틀, 각 페이지에 맞는 버튼
      case 'type2':
        return (
          <header>
            <Container>
              <Button>이전</Button>
              {title && <Heading>{title}</Heading>}
              {sharing && <Button>공유</Button>}
              {/* {등록 && <Button>등록</Button>} */}
            </Container>
            type2
          </header>
        );
      // 로그인 헤더
      case 'type3':
        return <div>type3</div>;
      default:
        return <div>default</div>;
    }
  };

  return renderHeader();
};

export default Header;
