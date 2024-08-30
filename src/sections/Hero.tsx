import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* <HeroOrbit size={800} roration={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} roration={20}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} roration={98}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} roration={-14}>
          <SparkleIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={440} roration={79}>
          <SparkleIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={530} roration={178}>
          <SparkleIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} roration={144}>
          <SparkleIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={720} roration={88}>
          <SparkleIcon className="size-28 text-emerald-300" />
        </HeroOrbit> */}
      </div>
    </div>
  );
};
