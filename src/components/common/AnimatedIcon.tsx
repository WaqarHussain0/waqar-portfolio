import React from 'react';

interface AnimatedIconProps {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
  animateIcon?: boolean;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  Icon,
  className,
  animateIcon = true,
}) => {
  return (
    <Icon
      className={`h-[15px] w-[15px] text-[#8121d0] md:h-[25px] md:w-[25px] ${
        animateIcon ? 'animate-bounce' : ''
      } ${className}`}
    />
  );
};

export default AnimatedIcon;
