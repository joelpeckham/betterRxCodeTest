import ProviderListItem from "./ProviderListItem";
const ProviderList = ({providerData, selectedProvider, setSelectedProvider, setModalOpen}) => {
    const providerList = providerData.slice(0, 50);
    return (
        <ul className="h-full divide-y divide-gray-200">
            {providerList.map((provider, index) => {
                return (
                    <ProviderListItem
                        key={index}
                        index={index}
                        provider={provider}
                        selected={selectedProvider}
                        setSelected={setSelectedProvider}
                        setModalOpen={setModalOpen}
                    />
                );
            })}
        </ul>
    );
};

export default ProviderList;
