const TabMenu = ({ activeTab, onTabChange }) => {
  const tabs = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];
  return (
    <div className="flex space-x-10 mt-10 mb-6 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 text-lg ${
            activeTab === tab
              ? "text-[#1E2B45] border-b-2 border-[#4B40EE]"
              : "text-[#6F7177]"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
