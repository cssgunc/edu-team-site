interface ServerConfig {
    mode: string;
    port: number;
}

const devConfig = {
    mode: "dev",
    port: process.env.PORT || 3000,
};

let selectedConfig;

if (process.env.NODE_ENV === "dev") {
    selectedConfig = devConfig;
}

export { selectedConfig };
