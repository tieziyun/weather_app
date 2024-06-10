type WeatherTypeConfig = {
    Icon: string;
    message: string;
    BackgroundColor: string;
};

export const WeatherType: Record<string, WeatherTypeConfig> = {
    thunderstorm: {
        Icon: "Zap",
        message: "It could get noisy",
        BackgroundColor: "#000000"
    },
    Drizzle: {
        Icon: "CloudDrizzle",
        message: "Light rain, take an umbrella",
        BackgroundColor: "#A4A4A4"
    },
    Rain: {
        Icon: "CloudRain",
        message: "Don't forget your raincoat",
        BackgroundColor: "#575757"
    },
    Snow: {
        Icon: "CloudSnow",
        message: "Time to build a snowman",
        BackgroundColor: "#FFFFFF"
    },
    Clear: {
        Icon: "Sun",
        message: "Enjoy the sunshine",
        BackgroundColor: "#FFD700"
    },
    Cloud: {
        Icon: "Cloud",
        message: "A bit gloomy outside",
        BackgroundColor: "#BEBEBE"
    },
    Haze: {
        Icon: "Wind",
        message: "Visibility might be low",
        BackgroundColor: "#E0E0E0"
    },
    Mist: {
        Icon: "CloudFog",
        message: "Drive carefully",
        BackgroundColor: "#C0C0C0"
    }
};