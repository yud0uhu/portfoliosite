import {
  createClient,
  type MicroCMSQueries,
  type MicroCMSImage,
} from "microcms-js-sdk";
// import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from "$env/static/private";

const MICROCMS_SERVICE_DOMAIN = "https://flyingcat.microcms.io/api/v1/";
const MICROCMS_API_KEY = "3fcabaf9-e211-4f84-aa89-c627cac3d947";

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

export type Works = {
  productTitle: string;
  productData: string;
  githubUrl: string;
  productDatail: string;
  productComposition: string;
  productImage: string;
  productUrl: string;
};
export type WorksResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Works[];
};

export const getList = async (queries?: MicroCMSQueries) => {
  return await client.get<WorksResponse>({ endpoint: "works", queries });
};
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
};
