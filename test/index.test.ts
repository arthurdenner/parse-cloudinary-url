import parseCloudinaryUrl from '../src/index';

describe('parseCloudinaryUrl', () => {
  it('splits configuration without options', () => {
    const uploadConfig = parseCloudinaryUrl(
      'cloudinary://apiKey:apiSecret@cloudName'
    );

    expect(uploadConfig).toEqual({
      apiKey: 'apiKey',
      apiSecret: 'apiSecret',
      cloudName: 'cloudName',
      options: {},
    });
  });

  it('splits configuration with options', () => {
    const uploadConfig = parseCloudinaryUrl(
      'cloudinary://apiKey:apiSecret@cloudName?uploadFolder=customFolder'
    );

    expect(uploadConfig).toEqual({
      apiKey: 'apiKey',
      apiSecret: 'apiSecret',
      cloudName: 'cloudName',
      options: {
        uploadFolder: 'customFolder',
      },
    });
  });
});
