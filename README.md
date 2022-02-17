# parse-cloudinary-url

A module to transform a Cloudinary string used as an environment variable to an object.

```js
import parseCloudinaryUrl from 'parse-cloudinary-url'
const CLOUDINARY_URL = 'cloudinary://apiKey:apiSecret@cloudName?uploadFolder=customFolder'
const uploadConfig = parseCloudinaryUrl(CLOUDINARY_URL)

/*
{
  apiKey: "apiKey",
  apiSecret: "apiSecret",
  cloudName: "cloudName",
  options: {
    uploadFolder: "customFolder",
  },
}
*/
```
