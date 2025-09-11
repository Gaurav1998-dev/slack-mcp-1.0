import {
  protectedResourceHandler,
  metadataCorsOptionsRequestHandler,
} from 'mcp-handler';
 
const handler = protectedResourceHandler({
  authServerUrls: ['https://inkeep.scalekit.dev/resources/res_89717234808652037'],
});
 
export { handler as GET, metadataCorsOptionsRequestHandler as OPTIONS };