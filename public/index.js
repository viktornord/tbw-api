const ui = SwaggerUIBundle({
    url: "swagger.yaml",
    dom_id: '#swagger-ui',
    presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
    ],
    plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
    ],
    validatorUrl: null,
    layout: "StandaloneLayout"
});