interface bgProps {
  bg: string,
  children: any,
}

const ResponsiveBackgroundContainer = ({ bg, children }: bgProps) => {
  return (
    <div className="relative w-full" style={{ minHeight: '100vh' }}>
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'top',
          maxHeight: '80px', // Adjust this value as needed
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default ResponsiveBackgroundContainer;