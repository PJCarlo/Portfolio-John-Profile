import { useState, useEffect } from 'react';
import { SkeletonLoader } from '../components/SkeletonLoader';

export default function YourPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate 2-second delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        <SkeletonLoader/>
      ) : (
        <div>
          {/* Your actual content */}
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-2">This is the main content area.</p>
        </div>
      )}
    </div>
  );
}