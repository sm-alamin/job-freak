import './SectionHeader.css'
const SectionHeader = ({heading,tagline}) => {
  return (
    <div className="section-header">
      <h1>
        {heading}<span className='w-full lg:w-2/3 mx-auto text-xs'>{tagline}</span>
      </h1>
    </div>
  );
};

export default SectionHeader;
