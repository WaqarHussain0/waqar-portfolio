import React from "react";
import clsx from "clsx";

type TextVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "blockquote"
  | "small"
  | "strong"
  | "em"
  | "a";

// Default Tailwind utility classes per element
const defaultClasses: Record<TextVariants, string> = {
  h1: "text-3xl font-semibold text-foreground font-heading",
  h2: "cotoris  font-semibold capitalize text-[26px] md:text-[36px] border-b-2 border-[#8121d0] text-start",
  h3: "poppins text-[14px] md:text-[18px] lg:text-[20px] font-medium line-clamp-1",
  h4: " text-md font-body",
  h5: "font-body text-sm",
  h6: "font-body",
  p: "line-clamp-1 poppinsRegular text-[#211F20] text-[10px] md:text-[16px] font-body",
  span: "text-red-600 poppinsRegular text-[12px] md:text-[14px]",
  label: "text-[14px] font-[400] text-[#4D4D4D] font-body",
  blockquote: "",
  small: "",
  strong: "",
  em: "s",
  a: "text-sm text-blue-800 hover:underline font-body",
};

interface TextElementProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextVariants;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TextElement: React.FC<TextElementProps> = ({
  as = "p",
  children,
  className,
  style,
  ...rest
}) => {
  const Component = as;
  const defaultClass = defaultClasses[as] || "";

  return (
    <Component
      className={`${clsx(defaultClass, className)}  `}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default TextElement;
