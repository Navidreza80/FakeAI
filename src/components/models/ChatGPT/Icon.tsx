const Icon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="relative">
      <span className="w-8 h-8 cursor-pointer items-center justify-center rounded-[8px] flex hover:bg-[#303030] transition-all duration-200">
        {icon}
      </span>
    </div>
  );
};
export default Icon;
