import PlusSvg from "../../../../assets/App/Others/PlusSvg";
import SectionSvg from "../../../../assets/App/Others/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-[110.4rem] bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-[110.4rem] bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      <div className="hidden absolute top-[110.4rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      {/*<PlusSvg className="hidden absolute top-[117.90rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[117.90rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />*/}

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
