export const environment = {
    production: false,
    apiBaseUrl: "https://teamchatbot12.azurewebsites.net/api/Request/",
    selfUrl: "https://teamchatbot12-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "59304d84-3df0-45e2-8834-de4654ae8758",
        clientId: "da7e3d76-17dc-4e09-b5d1-b4903ae3c7a6",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
