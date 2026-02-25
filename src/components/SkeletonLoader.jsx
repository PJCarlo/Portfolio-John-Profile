const SkeletonLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-neutral-950 bg-opacity-95 backdrop-blur-sm flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Profile Section - Responsive */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 lg:space-y-8 min-h-screen">
          
          {/* Profile Image Skeleton - Responsive Sizes */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-pulse ring-4 ring-neutral-700"></div>
          </div>

          {/* Name Skeleton - Responsive Text */}
          <div className="h-8 sm:h-10 md:h-12 w-56 sm:w-64 md:w-72 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg animate-pulse"></div>

          {/* Title Skeleton - Responsive Text */}
          <div className="h-6 sm:h-8 md:h-10 w-40 sm:w-48 md:w-56 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg animate-pulse"></div>

          {/* Download CV Button Skeleton - Responsive */}
          <div className="h-8 sm:h-10 md:h-11 w-32 sm:w-36 md:w-40 bg-blue-600 rounded-lg animate-pulse mt-4 sm:mt-6 lg:mt-8"></div>

          {/* Scroll Indicator - Responsive */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center">
            <div className="h-4 sm:h-5 md:h-6 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg animate-pulse mx-auto"></div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SkeletonLoader;