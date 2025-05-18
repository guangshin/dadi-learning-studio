interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export function ImageGallery({ images, className = '' }: ImageGalleryProps) {
  return (
    <div className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Moments at Da Di
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-sm">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
