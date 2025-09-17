import {
  protectedResourceHandler,
  metadataCorsOptionsRequestHandler,
} from 'mcp-handler';
 
const handler = protectedResourceHandler({
  authServerUrls: ['https://inkeep.scalekit.dev/resources/res_90573301734179842'],
});
 
export { handler as GET, metadataCorsOptionsRequestHandler as OPTIONS };