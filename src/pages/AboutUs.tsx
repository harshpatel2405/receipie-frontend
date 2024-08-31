// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CakeIcon, CodeIcon, CompassIcon, CpuIcon, CupSodaIcon, DiscIcon, LeafyGreenIcon, MountainIcon } from "lucide-react"
// import Link from "react-router-dom"

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img src="/hero-bg.jpeg" alt="T-shirt designs" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 px-4 text-center text-primary-foreground">
          <CakeIcon  className="h-12 w-12" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Making the best PIE</h1>
          <p className="max-w-[600px] text-lg">
          From classic pastries to artisan breads, [Bakery Name] is dedicated to crafting the perfect bite every time. Our passion for baking shines through in every loaf, cake, and cookie, made fresh daily just for you. We believe in quality, tradition, and the joy of sharing our baked goods with our community.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Founders</h2>
            <p className="text-muted-foreground">
              Our journey began with a shared vision to create a brand that empowers individuals and celebrates
              diversity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center space-y-2">
              {/* <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar> */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground text-sm">
                JD
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Harsh Patel</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {/* John is a passionate designer with a keen eye for detail and a commitment to sustainable fashion. */}
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-primary-foreground text-sm">
                JA
              </div>
              {/* <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar> */}
              <div className="text-center">
                <p className="text-sm font-medium">Jane Appleseed</p>
                <p className="text-sm text-muted-foreground">Co-Founder</p>
              </div>
              <p className="text-sm text-muted-foreground">
                {/* Jane is a seasoned entrepreneur with a deep understanding of the fashion industry and a passion for */}
                {/* empowering communities. */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
  <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Baked with Love</h2>
      <p className="text-muted-foreground">
        Our bakery treats are crafted with the finest ingredients, ensuring every bite is a moment of pure delight.
      </p>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col items-center space-y-2">
        <CupSodaIcon className="h-8 w-8 text-primary" />
        <h3 className="text-lg font-medium">Fresh Ingredients</h3>
        <p className="text-sm text-muted-foreground">
          We use only the freshest, highest quality ingredients in all our baked goods.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <DiscIcon className="h-8 w-8 text-primary" />
        <h3 className="text-lg font-medium">Artisanal Craftsmanship</h3>
        <p className="text-sm text-muted-foreground">
          Every pastry is handmade with care by our skilled bakers, ensuring a perfect taste every time.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CodeIcon className="h-8 w-8 text-primary" />
        <h3 className="text-lg font-medium">Ethical Sourcing</h3>
        <p className="text-sm text-muted-foreground">
          We source our ingredients from sustainable and ethical suppliers to support our community.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <CompassIcon className="h-8 w-8 text-primary" />
        <h3 className="text-lg font-medium">Delicious Flavors</h3>
        <p className="text-sm text-muted-foreground">
          Our treats offer a variety of delightful flavors to satisfy every craving.
        </p>
      </div>
    </div>
  </div>
</section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl"></h2>
          <p className="max-w-[600px] text-muted-foreground">
           .
          </p>
          {/* <Link to="" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Shop Now
          </Link> */}
        </div>
      </section>
    </div>
  )
}
