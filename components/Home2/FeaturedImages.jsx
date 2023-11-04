import Image from "next/image";
import {
  feature_img_1,
  feature_img_2,
  feature_img_3,
} from "../../public/links";

const FeatureImages = () => {
  return (
    <section className="my-20 mt-32 flex">
      <figure>
        <Image
          src={feature_img_1}
          alt="workers having a discussion"
          className="-rotate-[10deg] rounded-2xl scale-[1.4] -translate-x-22 md:scale-110 md:-translate-x-24"
        />
      </figure>
      <figure>
        <Image
          src={feature_img_2}
          alt="two female co-workers talking"
          className="rotate-[4deg] rounded-2xl scale-[1.3] -translate-x-8 -translate-y-5 md:scale-110"
        />
      </figure>
      <figure>
        <Image
          src={feature_img_3}
          alt="workers having a meeting"
          className="-rotate-[10deg] rounded-2xl scale-150 translate-x-8 vsm:block hidden  md:scale-110"
        />
      </figure>
    </section>
  );
};

export default FeatureImages;
