const ColorBlob = () => {
    return (
        <div
            className="color-blob"
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "100rem",
                background: "radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(ellipse at 70% 60%, #c3e060 0%, rgba(195, 224, 96, 0) 90%), radial-gradient(ellipse at 30% 30%, #c3e060 0%, rgba(195, 224, 96, 0) 60%), radial-gradient(ellipse at bottom left, #00a3cb 0%, rgba(0, 163, 203, 0) 70%), linear-gradient(135deg, rgba(18, 46, 119, 0) 0%, rgba(18, 46, 119, 0) 75%, #122e77 100%), linear-gradient(to right, #625793 0%, #d55d64 35%, #e49129 65%, #c0671c 100%)",
                backgroundBlendMode: "overlay,luminosity,color-dodge,saturation,screen,color",
                filter: "blur(50px)"
            }}
        ></div>
    );
};

export default ColorBlob;
