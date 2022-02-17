# parse-cloudinary-url

A module to transform a Cloudinary string used as an environment variable to an object.

## Usage

```js
import { parse } from 'parse-cloudinary-url';
const CLOUDINARY_URL = 'cloudinary://apiKey:apiSecret@cloudName?uploadFolder=customFolder';
const uploadConfig = parse(CLOUDINARY_URL);

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

### Strapi

I created this module from a Strapi project because I wanted to use only one variable instead of many.

If you're in the same scenario, this module can be used as below:

```js
import { parse } from 'parse-cloudinary-url';

module.exports = ({ env }) => {
  const uploadConfig = parse(env('CLOUDINARY_URL'));

  return {
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        api_key: uploadConfig.apiKey,
        api_secret: uploadConfig.apiSecret,
        cloud_name: uploadConfig.cloudName,
      },
      actionOptions: {
        upload: {
          folder: uploadConfig.options.uploadFolder,
        },
      },
    },
  };
};
```
