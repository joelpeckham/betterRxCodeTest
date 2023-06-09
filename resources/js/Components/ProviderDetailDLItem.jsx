export default function ProviderDetailDLItem({ label, value }) {
    if (!value) return <></>;
    return (
        <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">{label}</dt>
            <dd className="mt-1 text-sm text-gray-900">{value}</dd>
        </div>
    );
}
