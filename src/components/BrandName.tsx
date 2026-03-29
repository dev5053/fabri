const BrandName = ({ className = "" }: { className?: string }) => {
  return (
    <span className={className}>
      <span className="font-heading italic">Fabri</span>
      <span className="font-body font-bold text-accent not-italic">Co</span>
    </span>
  );
};

export default BrandName;
