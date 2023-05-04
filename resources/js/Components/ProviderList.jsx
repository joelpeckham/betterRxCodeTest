import ProviderListItem from "./ProviderListItem";
const ProviderList = ({providerData, selectedProvider, setSelectedProvider}) => {
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
                    />
                );
            })}
        </ul>
    );
};

export default ProviderList;
