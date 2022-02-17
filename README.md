# parse-cloudinary-url

A module to transform a Cloudinary string used as an environment variable to an object.

```js
import { parse } from 'parse-cloudinary-url'
const CLOUDINARY_URL = 'cloudinary://apiKey:apiSecret@cloudName?uploadFolder=customFolder'
const uploadConfig = parse(CLOUDINARY_URL)

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
