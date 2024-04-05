interface ContainerProps {
    children: React.ReactNode;
    fullWidth?: boolean;
  }
  
  const Container = ({ children, fullWidth }: ContainerProps) => {
    return <div className={`${fullWidth ? "w-full": "container"} mx-auto px-[15px] leading-7`}>{children}</div>;
  };
  
  export default Container;
  