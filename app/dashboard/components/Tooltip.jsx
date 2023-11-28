"use client"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Tooltip = ({ children,content }) => {
  return (
    <Tippy content={content}  animation="fade"  duration={100} delay={[300, 0]}>
      {children}
    </Tippy>
  );
};

export default Tooltip;
