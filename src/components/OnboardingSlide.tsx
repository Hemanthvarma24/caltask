import Image from "next/image"

interface OnboardingSlideProps {
  title: string
  description: string
  mainImage: string
  profileImages: string[]
}

export default function OnboardingSlide({ title, description, mainImage, profileImages }: OnboardingSlideProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 relative">
        <div className="flex justify-center">
          {/* Arc of profile images */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <div className="relative w-full h-20">
              {/* Dotted line connecting profile images */}
              <div className="absolute top-10 left-0 right-0 h-0.5 border-t border-dashed border-primary/30"></div>

              {/* Profile images positioned along the arc */}
              {profileImages.map((img, index) => {
                // Calculate position along the arc
                const totalImages = profileImages.length
                const position = (index / (totalImages - 1)) * 100
                const topOffset = Math.sin((position / 100) * Math.PI) * 20

                return (
                  <div
                    key={index}
                    className="absolute w-12 h-12 rounded-lg overflow-hidden transform -translate-y-1/2 shadow-md"
                    style={{
                      left: `${position}%`,
                      top: `${topOffset}px`,
                      transform: `translateX(-50%) rotate(${(position - 50) / 5}deg)`,
                      backgroundColor: getRandomColor(index),
                    }}
                  >
                    <Image
                      src={img || "/placeholder.svg?height=48&width=48"}
                      alt={`Profile ${index + 1}`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              })}

              {/* Dots on the arc */}
              {[0, 25, 50, 75, 100].map((position) => (
                <div
                  key={position}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                  style={{
                    left: `${position}%`,
                    top: `${Math.sin((position / 100) * Math.PI) * 20}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Main central image */}
          <div className="relative w-64 h-80 mt-24">
            <div className="absolute inset-0 w-full h-full">
              {/* Dotted arc around the main image */}
              <div className="absolute inset-0 rounded-t-full border-t border-l border-r border-dashed border-primary/30"></div>

              {/* Small green dots at the bottom of the arc */}
              <div className="absolute bottom-0 left-1/4 w-2 h-2 rounded-full bg-primary"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-primary"></div>
            </div>

            <div className="relative w-full h-full rounded-t-full overflow-hidden bg-gray-100">
              <Image
                src={mainImage || "/placeholder.svg?height=320&width=256"}
                alt="Main illustration"
                width={256}
                height={320}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 px-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

// Helper function to get a random color for profile image backgrounds
function getRandomColor(index: number) {
  const colors = [
    "#FFC107", // Yellow
    "#E0E0E0", // Light Gray
    "#4CAF50", // Green
    "#2196F3", // Blue
    "#FF5722", // Orange
  ]

  return colors[index % colors.length]
}

