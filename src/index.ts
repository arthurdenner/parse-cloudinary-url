export const parse = (url: string) => {
  const [apiKey, apiSecret, cloudName, options] = url
    .split(/cloudinary:\/\/(\w+):(\w+)@(\w+)\??(.*)/)
    .filter(Boolean);

  return {
    apiKey,
    apiSecret,
    cloudName,
    options: Object.fromEntries(new URLSearchParams(options)),
  };
};
