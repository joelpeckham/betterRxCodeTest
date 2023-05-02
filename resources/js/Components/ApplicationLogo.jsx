export default function ApplicationLogo(props) {
    return (
        <img
            src="/images/logo.png"
            alt="BetterRx Logo"
            className="h-14 w-full object-contain"
            {...props}
        />
    );
}
