import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  min-height: 250px;
  background: #000;
`;

const Footer = () => {
  return <FooterBox></FooterBox>;
};

export default React.memo(Footer);