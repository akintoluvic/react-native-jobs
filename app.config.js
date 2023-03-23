import "dotenv/config";

export default {
  "expo": {
    "scheme": "acme",
    "web": {
      "bundler": "metro"
    },
    "name": "react-native-jobs",
    "slug": "react-native-jobs",
    extra: {
        rapidApiKey: process.env.RAPID_API_KEY,
    },
  }
}