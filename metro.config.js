const { getDefaultConfig } = require("metro-config");
const defaultAssetExts = require("metro-config/src/defaults/defaults").assetExts;


module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
  
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: [defaultAssetExts.filter(ext => ext !== "svg"&&ext !== "png"&&ext !== "ttf"),"db","png","ttf"],
      sourceExts: [...sourceExts, "svg","png","ttf"]
    }
  };
})();