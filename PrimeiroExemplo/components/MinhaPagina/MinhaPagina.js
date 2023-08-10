import WebView from "react-native-webview";

export const MinhaPagina = (url) => {
    console.log(url)
    return (
        <WebView
            source={{ uri: url }}
            style={{ marginTop: 30 }}
        />
    )
}