import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import Card from "@/components/Card";
import { Fragment } from "react";
import prisma from "@/lib/dbConnect";

export const TestimonialsSection = async () => {
  const testimonial = await prisma.testimonials.findMany();

  const testimonials = testimonial.map((testimony, index) => ({
    name: testimony.name,
    position: testimony.position,
    text: testimony.text,
    avatar: [
      memojiAvatar1,
      memojiAvatar2,
      memojiAvatar3,
      memojiAvatar4,
      memojiAvatar5,
    ][index % 5],
  }));
  return (
    <div className="py-16 lg:py-24">
      <div className=" container">
        <SectionHeader
          title={"What Clients Say about Me"}
          eyebrow={"Happy Clients"}
          description={
            "Don't just take my word for it. See what my clients have to say about my work."
          }
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[
              ...new Array(2).fill(0).map((_, index) => (
                <Fragment key={index}>
                  {testimonials.map((testimonial: any) => (
                    <Card
                      key={testimonial.name}
                      className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex gap-4 items-center ">
                        <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                          {" "}
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>

                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                    </Card>
                  ))}
                </Fragment>
              )),
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};
