import Image from "next/image"

const Devlmg = ({containerStyles, imgSrc}) => {
  return <div className={`${containerStyles}`}>
    <Image src={imgSrc} fill priority alt="" />
  </div>
}

export default Devlmg